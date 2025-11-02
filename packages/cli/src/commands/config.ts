import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { getTheDigConfig } from "./helpers/methods";
import { GLOBALS_CSS_CONTENT } from "./helpers/theme";

export async function config() {
  console.log(`Configuring project CSS...`);

  try {
    /**
     * 1. Load project configuration from .thedigrc.json
     */
    const config = await getTheDigConfig();
    const globalCssPathFromConfig = config.tailwind.css;

    if (!globalCssPathFromConfig) {
      console.error(`Error: 'tailwind.css' path not found in .thedigrc.json. Please check your configuration.`);
      process.exit(1);
    }

    /**
     * 2. Construct the absolute path to the globals.css file
     */
    const rootDir = process.cwd();
    const globalCssFilePath = path.join(rootDir, globalCssPathFromConfig);

    const spinner = ora(`Updating ${globalCssFilePath}...`).start();

    /**
     * 3. Read existing content of globals.css
     */
    let _existingContent = "";
    if (fs.existsSync(globalCssFilePath)) {
      _existingContent = await fs.readFile(globalCssFilePath, "utf8");
    } else {
      // If the file doesn't exist, create its parent directory if needed
      await fs.ensureDir(path.dirname(globalCssFilePath));
      spinner.warn(`File ${globalCssFilePath} not found. Creating it.`);
    }

    /**
     * 4. Prepend the new content
     */
    // const newContent = `${GLOBALS_CSS_CONTENT}\n${existingContent}`;
    const newContent = `${GLOBALS_CSS_CONTENT}`;

    /**
     * 5. Write the combined content back to the file
     */
    await fs.writeFile(globalCssFilePath, newContent, "utf8");

    spinner.succeed(`Successfully updated ${globalCssFilePath} with The DIG styles.`);
    console.log(`\n✅ Project CSS configured successfully!`);
  } catch (error: any) {
    console.error(`\n❌ Failed to configure project CSS.`);
    console.error((error as Error).message);
    process.exit(1);
  }
}
