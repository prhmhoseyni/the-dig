import { exec } from "node:child_process";
import path from "node:path";
import fs from "fs-extra";
import fetch from "node-fetch";
import ora from "ora";
import type { ComponentsData, TheDigConfig } from "./types";

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Checks if the project is a Next.js project by looking for 'next' in package.json dependencies.
 * @returns A Promise that resolves to true if Next.js is detected, false otherwise.
 */
export async function isNextJsProject(): Promise<boolean> {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  try {
    if (!fs.existsSync(packageJsonPath)) {
      return false;
    }
    const packageJson = await fs.readJson(packageJsonPath);
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    return "next" in allDeps;
  } catch {
    return false;
  }
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Checks if the file content uses React hooks (useEffect, useRef, useState).
 * @param content The file content to check.
 * @returns true if any of the hooks are found, false otherwise.
 */
export function usesReactHooks(content: string): boolean {
  const hookPatterns = [/\buseEffect\b/, /\buseRef\b/, /\buseState\b/];
  return hookPatterns.some((pattern) => pattern.test(content));
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Adds "use client" directive at the top of the file if it doesn't already exist.
 * @param content The original file content.
 * @returns The file content with "use client" directive at the top.
 */
export function addUseClientDirective(content: string): string {
  // Check if "use client" already exists (handles both single and double quotes, with or without semicolon)
  if (/^["']use client["']\s*;?\s*(\r?\n|$)/m.test(content)) {
    return content;
  }
  // Add "use client" at the top
  return '"use client";\n' + content;
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Checks if a file is a React component file (tsx, jsx, ts, js).
 * @param fileName The name of the file to check.
 * @returns true if the file extension indicates a React component, false otherwise.
 */
export function isReactComponentFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return [".tsx", ".jsx", ".ts", ".js"].includes(ext);
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Reads the .thedigrc.json configuration file from the project root.
 * @returns A Promise that resolves with the TheDigConfig, or rejects if the file is not found or invalid.
 */
export async function getTheDigConfig(): Promise<TheDigConfig> {
  const configFileName = ".thedigrc.json";
  const configFilePath = path.join(process.cwd(), configFileName);
  const spinner = ora(`Reading ${configFileName}...`).start();

  try {
    if (!fs.existsSync(configFilePath)) {
      spinner.fail(`${configFileName} not found.`);
      throw new Error(`Configuration file "${configFileName}" not found. Please run "the-dig init" first.`);
    }

    const config = (await fs.readJson(configFilePath)) as TheDigConfig;
    spinner.succeed(`${configFileName} loaded successfully.`);
    return config;
  } catch (error) {
    spinner.fail(`Failed to read ${configFileName}.`);
    console.error((error as Error).message);
    process.exit(1);
  }
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Installs specified npm dependencies.
 * @param dependencies An array of package names to install.
 * @returns A Promise that resolves when dependencies are installed, or rejects on error.
 */
export function installDependencies(dependencies: string[] | null): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!dependencies || dependencies.length === 0) {
      console.log("No dependencies to install.");
      resolve();
      return;
    }

    const command = `npm install ${dependencies.join(" ")}`;
    const spinner = ora(`Installing dependencies: ${dependencies.join(", ")}`).start();

    exec(command, (error, _stdout, stderr) => {
      if (error) {
        spinner.fail("Failed to install dependencies.");
        console.error(stderr);
        reject(error);
        return;
      }
      spinner.succeed("Dependencies installed successfully.");
      resolve();
    });
  });
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Loads the component registry data from a remote Repo.
 * @returns A Promise that resolves with the ComponentsData, or rejects on error.
 */
export async function getComponentData(): Promise<ComponentsData> {
  const registryURL = "https://pubgi.sandpod.ir/pod/frontobm/the-dig/-/raw/main/packages/cli/libs/components.json";
  const spinner = ora(`Loading component registry from ${registryURL}...`).start();

  try {
    const response = await fetch(registryURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch component registry: ${response.statusText} (${response.status})`);
    }

    const componentData = (await response.json()) as ComponentsData;
    spinner.succeed("Component registry loaded successfully.");
    return componentData;
  } catch (error) {
    spinner.fail("Failed to load component registry.");
    console.error((error as Error).message);
    process.exit(1);
  }
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Fetches a component directory from a Repo.
 * @param repoURL The URL to the component directory on repository.
 * @param destination The local path where the component files should be saved.
 * @returns A Promise that resolves when the component is fetched, or rejects on error.
 */
export async function fetchComponentFromRepository(srcUrl: string, destination: string): Promise<void> {
  const spinner = ora(`Fetching component from ${srcUrl}...`).start();
  try {
    const url = new URL(srcUrl);
    const host = url.host;
    const parts = url.pathname.split("/").filter(Boolean);

    const branch = parts[5];
    const repoPath = parts.slice(6).join("/");

    const projectId = 95;

    const treeRes = await fetch(`https://${host}/api/v4/projects/${projectId}/repository/tree?path=${repoPath}&ref=${branch}`);
    if (!treeRes.ok) {
      throw new Error(`Failed to fetch repository tree: ${treeRes.statusText}`);
    }
    const files = await treeRes.json();

    if (!Array.isArray(files)) {
      throw new Error("The specified path is not a directory.");
    }

    await fs.ensureDir(destination);

    // Check if project is Next.js once before processing files
    const isNextJs = await isNextJsProject();

    for (const file of files) {
      if (file.type === "blob") {
        const rawRes = await fetch(
          `https://${host}/api/v4/projects/${projectId}/repository/files/${encodeURIComponent(file.path)}/raw?ref=${branch}`,
        );
        if (!rawRes.ok) {
          spinner.warn(`Could not fetch file: ${file.name}`);
          continue;
        }
        const fileContent = await rawRes.buffer();
        const filePath = path.join(destination, file.name);

        // If Next.js project and file is a React component, check for hooks and add "use client" if needed
        if (isNextJs && isReactComponentFile(file.name)) {
          const content = fileContent.toString("utf-8");
          if (usesReactHooks(content)) {
            const updatedContent = addUseClientDirective(content);
            await fs.writeFile(filePath, updatedContent, "utf-8");
          } else {
            await fs.writeFile(filePath, fileContent);
          }
        } else {
          await fs.writeFile(filePath, fileContent);
        }
      }
    }

    spinner.succeed(`Component successfully fetched and placed in ${destination}.`);
  } catch (error) {
    spinner.fail("Failed to fetch component from GitLab.");
    console.error((error as Error).message);
    throw error;
  }
}
