import { exec } from "node:child_process";
import path from "node:path";
import fs from "fs-extra";
import fetch from "node-fetch";
import ora from "ora";
import type { ComponentsData, TheDigConfig } from "./types";

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
	const registryURL = "https://pubgi.sandpod.ir/pod/frontobm/dig-ui/-/raw/main/packages/cli/libs/components.json";
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
		// Example src: https://pubgi.sandpod.ir/pod/frontobm/the-dig/-/tree/main/packages/ui/src/Button
		const url = new URL(srcUrl);
		const host = url.host; // pubgi.sandpod.ir
		const parts = url.pathname.split("/").filter(Boolean);

		// parts = ["pod", "frontobm", "the-dig", "-", "tree", "main", "packages", "ui", "src", "Button"]
		// const projectPath = parts.slice(0, 3).join("/"); // pod/frontobm/the-dig
		const branch = parts[5]; // "main"
		const repoPath = parts.slice(6).join("/"); // packages/ui/src/Button

		// 1. Get project ID
		// const projectRes = await fetch(`https://${host}/api/v4/projects/${encodeURIComponent(projectPath)}`);
		// if (!projectRes.ok) {
		// 	throw new Error(`Failed to fetch project ID: ${projectRes.statusText}`);
		// }
		// const project = await projectRes.json();
		const projectId = 94;

		// 2. List files inside component folder
		const treeRes = await fetch(`https://${host}/api/v4/projects/${projectId}/repository/tree?path=${repoPath}&ref=${branch}`);
		if (!treeRes.ok) {
			throw new Error(`Failed to fetch repository tree: ${treeRes.statusText}`);
		}
		const files = await treeRes.json();

		if (!Array.isArray(files)) {
			throw new Error("The specified path is not a directory.");
		}

		await fs.ensureDir(destination);

		// 3. Download raw file content
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
				await fs.writeFile(path.join(destination, file.name), fileContent);
			}
		}

		spinner.succeed(`Component successfully fetched and placed in ${destination}.`);
	} catch (error) {
		spinner.fail("Failed to fetch component from GitLab.");
		console.error((error as Error).message);
		throw error;
	}
}
