import Color from "color";

function formatColor(c) {
    return Color(c).rgb().color.join(", ");
}

export default function generateTheme({ options = {}, themes, addBase }) {

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: config light mode palette ::::
     */
    const LightModePalette = themes.light;

    if (options?.["--bg-primary"]) LightModePalette["--dig-bg-primary"] = formatColor(options["--bg-primary"]);
    if (options?.["--bg-secondary"]) LightModePalette["--dig-bg-secondary"] = formatColor(options["--bg-secondary"]);
    if (options?.["--bg-dialog"]) LightModePalette["--dig-bg-dialog"] = formatColor(options["--bg-dialog"]);
    if (options?.["--bg-inverse"]) LightModePalette["--dig-bg-inverse"] = formatColor(options["--bg-inverse"]);

    if (options?.["--text-primary"]) LightModePalette["--dig-text-primary"] = formatColor(options["--text-primary"]);
    if (options?.["--text-secondary"]) LightModePalette["--dig-text-secondary"] = formatColor(options["--text-secondary"]);
    if (options?.["--text-hint"]) LightModePalette["--dig-text-hint"] = formatColor(options["--text-hint"]);
    if (options?.["--text-inverse"]) LightModePalette["--dig-text-inverse"] = formatColor(options["--text-inverse"]);
    if (options?.["--text-link"]) LightModePalette["--dig-text-link"] = formatColor(options["--text-link"]);

    if (options?.["--brand"]) LightModePalette["--dig-brand"] = formatColor(options["--brand"]);
    if (options?.["--info"]) LightModePalette["--dig-info"] = formatColor(options["--info"]);
    if (options?.["--success"]) LightModePalette["--dig-success"] = formatColor(options["--success"]);
    if (options?.["--warning"]) LightModePalette["--dig-warning"] = formatColor(options["--warning"]);
    if (options?.["--danger"]) LightModePalette["--dig-danger"] = formatColor(options["--danger"]);
    if (options?.["--gray"]) LightModePalette["--dig-gray"] = formatColor(options["--gray"]);


    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: config dark mode palette ::::
     */
    const DarkModePalette = themes.dark;

    if (options?.["--dark-bg-primary"]) DarkModePalette["--dig-bg-primary"] = formatColor(options["--dark-bg-primary"]);
    if (options?.["--dark-bg-secondary"]) DarkModePalette["--dig-bg-secondary"] = formatColor(options["--dark-bg-secondary"]);
    if (options?.["--dark-bg-dialog"]) DarkModePalette["--dig-bg-dialog"] = formatColor(options["--dark-bg-dialog"]);
    if (options?.["--dark-bg-inverse"]) DarkModePalette["--dig-bg-inverse"] = formatColor(options["--dark-bg-inverse"]);

    if (options?.["--dark-text-primary"]) DarkModePalette["--dig-text-primary"] = formatColor(options["--dark-text-primary"]);
    if (options?.["--dark-text-secondary"]) DarkModePalette["--dig-text-secondary"] = formatColor(options["--dark-text-secondary"]);
    if (options?.["--dark-text-hint"]) DarkModePalette["--dig-text-hint"] = formatColor(options["--dark-text-hint"]);
    if (options?.["--dark-text-inverse"]) DarkModePalette["--dig-text-inverse"] = formatColor(options["--dark-text-inverse"]);
    if (options?.["--dark-text-link"]) DarkModePalette["--dig-text-link"] = formatColor(options["--dark-text-link"]);

    if (options?.["--dark-brand"]) DarkModePalette["--dig-brand"] = formatColor(options["--dark-brand"]);
    if (options?.["--dark-info"]) DarkModePalette["--dig-info"] = formatColor(options["--dark-info"]);
    if (options?.["--dark-success"]) DarkModePalette["--dig-success"] = formatColor(options["--dark-success"]);
    if (options?.["--dark-warning"]) DarkModePalette["--dig-warning"] = formatColor(options["--dark-warning"]);
    if (options?.["--dark-danger"]) DarkModePalette["--dig-danger"] = formatColor(options["--dark-danger"]);
    if (options?.["--dark-gray"]) DarkModePalette["--dig-gray"] = formatColor(options["--dark-gray"]);

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: config palette ::::
     */
    addBase({ ":root": LightModePalette });

    if (options.darkMode && options.darkMode === "auto") {
        addBase({ "@media (prefers-color-scheme: dark)": { ":root": DarkModePalette } });
    } else {
        addBase({ "html.dark": DarkModePalette });
    }
}