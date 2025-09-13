import path from "path";
import {
  fetchComponentFromRepository,
  getComponentData,
  getTheDigConfig,
  installDependencies,
} from "./helpers/methods";

export async function add(componentName: string) {
  console.log(`Adding component: ${componentName}`);

  try {
    /**
     * 1. Load data asynchronously from the remote source
     */
    const componentData = await getComponentData();

    /**
     * 2. Validate component name
     */
    const component = componentData[componentName];

    if (!component) {
      console.error(`Error: Component "${componentName}" not found.`);
      console.log(
        "Available components:",
        Object.keys(componentData).join(", "),
      );
      process.exit(1);
    }

    /**
     * 3. Load project configuration from .thedigrc.json
     */
    const config = await getTheDigConfig();
    const componentsAlias = config.aliases.components;

    if (!componentsAlias) {
      console.error(
        `Error: 'aliases.components' not found in .thedigrc.json. Please check your configuration.`,
      );
      process.exit(1);
    }

    /**
     * 4. Install dependencies
     */
    await installDependencies(component.dependencies);

    /**
     * 5. Fetch component folder from Repository
     */
    const rootDir = process.cwd();
    const destination = path.join(rootDir, componentsAlias, componentName);
    await fetchComponentFromRepository(component.src, destination);

    console.log(`\n🚀 Component "${componentName}" added successfully!`);
  } catch (error) {
    console.error(`\n❌ Failed to add component "${componentName}".`);
    process.exit(1);
  }
}
