import path from "node:path";
import { fetchComponentFromRepository, getComponentData, getTheDigConfig, installDependencies } from "./helpers/methods";

export async function update(componentNamesStr: string) {
  // 1. Parse the comma-separated string into an array of names
  const componentNames = componentNamesStr.split(",").map((name) => name.trim());
  console.log(`Updating components: ${componentNames.join(", ")}`);

  try {
    /**
     * 2. Load remote component data and local config concurrently
     */
    const [componentData, config] = await Promise.all([getComponentData(), getTheDigConfig()]);

    const componentsAlias = config.aliases.components;
    if (!componentsAlias) {
      console.error(`Error: 'aliases.components' not found in .thedigrc.json. Please check your configuration.`);
      process.exit(1);
    }

    /**
     * 3. Validate all requested components before proceeding
     */

    const validComponents: any[] = [];
    const invalidNames: string[] = [];

    for (const name of componentNames) {
      const component = componentData[name];
      if (component) {
        // Update the component's name to its data for later use
        validComponents.push({ ...component, name });
      } else {
        invalidNames.push(name);
      }
    }

    if (invalidNames.length > 0) {
      console.error(`\n❌ Error: The following components were not found: ${invalidNames.join(", ")}.`);
      console.log("\nAvailable components:", Object.keys(componentData).join(", "));
      process.exit(1);
    }

    /**
     * 4. Aggregate all unique dependencies from the valid components
     */
    const allDependencies = new Set<string>();
    validComponents.forEach((component) => {
      if (component.dependencies && Array.isArray(component.dependencies)) {
        component.dependencies.map((dep: string) => {
          allDependencies.add(dep);
          return dep;
        });
      }
    });

    const dependenciesToInstall = Array.from(allDependencies);

    /**
     * 5. Install all collected dependencies in a single batch
     */
    if (dependenciesToInstall.length > 0) {
      await installDependencies(dependenciesToInstall);
    }

    /**
     * 6. Fetch all component folders from the repository concurrently
     */
    const rootDir = process.cwd();
    const fetchPromises = validComponents.map((component) => {
      const destination = path.join(rootDir, componentsAlias, component.name);
      return fetchComponentFromRepository(component.src, destination);
    });

    await Promise.all(fetchPromises);

    console.log(`\n🚀 Components "${componentNames.join(", ")}" updated successfully!`);
  } catch (error) {
    console.error(`\n❌ Failed to update components: "${componentNames.join(", ")}".`);
    // For debugging, you might want to log the actual error
    console.error(error);
    process.exit(1);
  }
}
