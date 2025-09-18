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
	const registryURL = "https://raw.githubusercontent.com/prhmhoseyni/the-dig/refs/heads/main/packages/cli/libs/components.json";
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
export async function fetchComponentFromRepository(repoURL: string, destination: string): Promise<void> {
	const spinner = ora(`Fetching component from ${repoURL}...`).start();
	try {
		const parts = repoURL.split("/");
		const owner = parts[3];
		const repo = parts[4];
		const branch = parts[6];
		const repoPath = parts.slice(7).join("/");

		const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${repoPath}?ref=${branch}`;

		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`Failed to fetch directory info: ${response.statusText}`);
		}
		const files = (await response.json()) as any[];

		if (!Array.isArray(files)) {
			throw new Error("The specified path is not a directory or the repository is private.");
		}

		await fs.ensureDir(destination);

		for (const file of files) {
			if (file.type === "file" && file.download_url) {
				const fileResponse = await fetch(file.download_url);
				if (!fileResponse.ok) {
					spinner.warn(`Could not fetch file: ${file.name}`);
					continue;
				}
				const fileContent = await fileResponse.buffer();
				await fs.writeFile(path.join(destination, file.name), fileContent);
			}
		}
		spinner.succeed(`Component successfully fetched and placed in ${destination}.`);
	} catch (error) {
		spinner.fail("Failed to fetch component from Repository.");
		console.error((error as Error).message);
		throw error;
	}
}
