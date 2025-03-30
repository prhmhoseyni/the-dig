const light = {
    "color-scheme": "light",

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: generic variables ::::
     */
    "--dig-bg-primary": "245, 245, 245",
    "--dig-bg-secondary": "255, 255, 255",
    "--dig-bg-dialog": "255, 255, 255",
    "--dig-bg-inverse": "0, 0, 0",

    "--dig-text-primary": "12, 14, 16",
    "--dig-text-secondary": "102, 117, 133",
    "--dig-text-hint": "154, 166, 177",
    "--dig-text-inverse": "246, 247, 248",
    "--dig-text-link": "32, 156, 215",

    "--dig-brand": "62, 136, 193",
    "--dig-info": "45, 144, 210",
    "--dig-success": "21, 151, 84",
    "--dig-warning": "208, 124, 6",
    "--dig-danger": "197, 50, 17",
    "--dig-gray": "39, 41, 55",

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: design tokens ::::
     */
    "--dig-color-mix-hover": "#000000 10%",
    "--dig-color-mix-active": "#000000 15%",

    "--dig-color-mix-light": "#FFFFFF 90%",
    "--dig-color-mix-light-hover": "#FFFFFF 85%",
    "--dig-color-mix-light-active": "#FFFFFF 80%",

    "--dig-color-mix-gray": "#FFFFFF",
};

const dark = {
    "color-scheme": "dark",

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: generic variables ::::
     */
    "--dig-bg-primary": "18, 18, 18",
    "--dig-bg-secondary": "31, 31, 31",
    "--dig-bg-dialog": "45, 45, 45",
    "--dig-bg-inverse": "255, 255, 255",

    "--dig-text-primary": "244, 244, 244",
    "--dig-text-secondary": "179, 179, 179",
    "--dig-text-hint": "109, 109, 109",
    "--dig-text-inverse": "40, 40, 40",
    "--dig-text-link": "45, 144, 210",

    "--dig-brand": "62, 136, 193",
    "--dig-info": "45, 144, 210",
    "--dig-success": "21, 151, 84",
    "--dig-warning": "208, 124, 6",
    "--dig-danger": "197, 50, 17",
    "--dig-gray": "244, 244, 244",

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * :::: design tokens ::::
     */
    "--dig-color-mix-hover": "#FFFFFF 10%",
    "--dig-color-mix-active": "#FFFFFF 15%",

    "--dig-color-mix-light": "#000000 90%",
    "--dig-color-mix-light-hover": "#000000 85%",
    "--dig-color-mix-light-active": "#000000 80%",

    "--dig-color-mix-gray": "#000000",
};

const themes = { light, dark };

export default themes;