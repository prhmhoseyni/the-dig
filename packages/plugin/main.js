import plugin from "./helpers/plugin";
import generateTheme from "./helpers/generate-theme";
import themes from "./helpers/themes";
import { backgroundColor, borderColor, colors } from "./helpers/config";
import base from "./dist/base";
import components from "./dist/components";
import utilities from "./dist/utilities";

export default plugin.withOptions(
    (options) => {
        return ({ addBase, addComponents, addUtilities }) => {

            generateTheme({ options, themes, addBase });

            addBase(base);
            addComponents(components);
            addUtilities(utilities);
        };
    },
    () => ({
        theme: {
            extend: {
                colors,
                backgroundColor,
                borderColor,
            },
        },
    }),
);