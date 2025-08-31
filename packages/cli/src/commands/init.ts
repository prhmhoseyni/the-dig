import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";
import path from "path";
import { installDependencies } from "./helpers/methods";
import { type TheDigConfig } from "./helpers/types";

export async function init() {
  console.log(chalk.blue(`Initializing The DIG project...`));

  try {
    /**
     * 1. Create .thedigrc.json file
     */
    const configFileName = ".thedigrc.json";
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

    const spinner = ora(
      `Creating ${chalk.cyan(configFileName)} at ${chalk.gray(configFilePath)}...`,
    ).start();

    try {
      await fs.writeJson(configFilePath, configContent, { spaces: 2 });
      spinner.succeed(`${configFileName} created successfully.`);
    } catch (error: any) {
      spinner.fail(`Failed to create ${configFileName}.`);
      console.error(chalk.red(error.message));
      throw error;
    }

    /**
     * 2. Install necessary dependencies (clsx)
     */
    await installDependencies(["clsx", "lucide-react"]);

    console.log(
      chalk.bold.green(`\n✨ The DIG project initialized successfully!`),
    );
  } catch (error) {
    console.error(chalk.red(`\n❌ Failed to initialize The DIG project.`));
    process.exit(1);
  }
}
