/**
 * -----------------------------------------------------------------------------------------------------------------
 * Defines the structure of the .thedigrc.json configuration file.
 */
export interface TheDigConfig {
	tsx: boolean;
	tailwind: {
		version: number;
		css: string;
	};
	aliases: {
		components: string;
	};
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Defines the structure of component data fetched from the registry.
 */
export interface ComponentsData {
	[key: string]: {
		dependencies: string[] | null;
		src: string;
	};
}
