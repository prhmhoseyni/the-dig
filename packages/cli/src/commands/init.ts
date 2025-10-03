import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { installDependencies } from "./helpers/methods";
import type { TheDigConfig } from "./helpers/types";

export async function init() {
	console.log(`Initializing The DIG project...`);

	try {
		/**
		 * 1. Create .diguirc.json file
		 */
		const configFileName = ".diguirc.json";
		const configFilePath = path.join(process.cwd(), configFileName);

		const configContent: TheDigConfig = {
			tsx: true,
			tailwind: {
				version: 4,
				css: "/src/app/globals.css",
			},
			aliases: {
				components: "/src/components",
			},
		};

		const spinner = ora(`Creating ${configFileName} at ${configFilePath}...`).start();

		try {
			await fs.writeJson(configFilePath, configContent, { spaces: 2 });
			spinner.succeed(`${configFileName} created successfully.`);
		} catch (error) {
			spinner.fail(`Failed to create ${configFileName}.`);
			console.error((error as Error).message);
			throw error;
		}

		/**
		 * 2. Install necessary dependencies (clsx)
		 */
		await installDependencies(["clsx", "lucide-react"]);

		console.log(`\n✨ The DIG project initialized successfully!`);
	} catch {
		console.error(`\n❌ Failed to initialize The DIG project.`);
		process.exit(1);
	}
}
