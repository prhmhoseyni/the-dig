import Color from "color";

function formatColor(c) {
    return Color(c).rgb().color.join(", ");
}

function generateTheme({ options = {}, themes, addBase }) {

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: config light mode palette ::::
     */
    const LightModePalette = themes.light;

    if (options?.themes?.light?.["bg-primary"]) LightModePalette["--dig-bg-primary"] = formatColor(options.themes.light["bg-primary"]);
    if (options?.themes?.light?.["bg-secondary"]) LightModePalette["--dig-bg-secondary"] = formatColor(options.themes.light["bg-secondary"]);
    if (options?.themes?.light?.["bg-dialog"]) LightModePalette["--dig-bg-dialog"] = formatColor(options.themes.light["bg-dialog"]);
    if (options?.themes?.light?.["bg-inverse"]) LightModePalette["--dig-bg-inverse"] = formatColor(options.themes.light["bg-inverse"]);

    if (options?.themes?.light?.["text-primary"]) LightModePalette["--dig-text-primary"] = formatColor(options.themes.light["text-primary"]);
    if (options?.themes?.light?.["text-secondary"]) LightModePalette["--dig-text-secondary"] = formatColor(options.themes.light["text-secondary"]);
    if (options?.themes?.light?.["text-hint"]) LightModePalette["--dig-text-hint"] = formatColor(options.themes.light["text-hint"]);
    if (options?.themes?.light?.["text-inverse"]) LightModePalette["--dig-text-inverse"] = formatColor(options.themes.light["text-inverse"]);
    if (options?.themes?.light?.["text-link"]) LightModePalette["--dig-text-link"] = formatColor(options.themes.light["text-link"]);

    if (options?.themes?.light?.["brand"]) LightModePalette["--dig-brand"] = formatColor(options.themes.light["brand"]);
    if (options?.themes?.light?.["info"]) LightModePalette["--dig-info"] = formatColor(options.themes.light["info"]);
    if (options?.themes?.light?.["success"]) LightModePalette["--dig-success"] = formatColor(options.themes.light["success"]);
    if (options?.themes?.light?.["warning"]) LightModePalette["--dig-warning"] = formatColor(options.themes.light["warning"]);
    if (options?.themes?.light?.["danger"]) LightModePalette["--dig-danger"] = formatColor(options.themes.light["danger"]);
    if (options?.themes?.light?.["gray"]) LightModePalette["--dig-gray"] = formatColor(options.themes.light["gray"]);


    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: config dark mode palette ::::
     */
    const DarkModePalette = themes.dark;

    if (options?.themes?.dark?.["bg-primary"]) DarkModePalette["--dig-bg-primary"] = formatColor(options.themes.dark["bg-primary"]);
    if (options?.themes?.dark?.["bg-secondary"]) DarkModePalette["--dig-bg-secondary"] = formatColor(options.themes.dark["bg-secondary"]);
    if (options?.themes?.dark?.["bg-dialog"]) DarkModePalette["--dig-bg-dialog"] = formatColor(options.themes.dark["bg-dialog"]);
    if (options?.themes?.dark?.["bg-inverse"]) DarkModePalette["--dig-bg-inverse"] = formatColor(options.themes.dark["bg-inverse"]);

    if (options?.themes?.dark?.["text-primary"]) DarkModePalette["--dig-text-primary"] = formatColor(options.themes.dark["text-primary"]);
    if (options?.themes?.dark?.["text-secondary"]) DarkModePalette["--dig-text-secondary"] = formatColor(options.themes.dark["text-secondary"]);
    if (options?.themes?.dark?.["text-hint"]) DarkModePalette["--dig-text-hint"] = formatColor(options.themes.dark["text-hint"]);
    if (options?.themes?.dark?.["text-inverse"]) DarkModePalette["--dig-text-inverse"] = formatColor(options.themes.dark["text-inverse"]);
    if (options?.themes?.dark?.["text-link"]) DarkModePalette["--dig-text-link"] = formatColor(options.themes.dark["text-link"]);

    if (options?.themes?.dark?.["brand"]) DarkModePalette["--dig-brand"] = formatColor(options.themes.dark["brand"]);
    if (options?.themes?.dark?.["info"]) DarkModePalette["--dig-info"] = formatColor(options.themes.dark["info"]);
    if (options?.themes?.dark?.["success"]) DarkModePalette["--dig-success"] = formatColor(options.themes.dark["success"]);
    if (options?.themes?.dark?.["warning"]) DarkModePalette["--dig-warning"] = formatColor(options.themes.dark["warning"]);
    if (options?.themes?.dark?.["danger"]) DarkModePalette["--dig-danger"] = formatColor(options.themes.dark["danger"]);
    if (options?.themes?.dark?.["gray"]) DarkModePalette["--dig-gray"] = formatColor(options.themes.dark["gray"]);

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

module.exports = generateTheme;