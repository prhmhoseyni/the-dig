/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: import tailwind and storybook styles ::::
 */
import "./storybook.css";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: import base, components and utilities ::::
 */
import "../../../packages/plugin/src/base/index.css";
import "../../../packages/plugin/src/components/index.css";
import "../../../packages/plugin/src/utilities/index.css";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: storybook ::::
 */
import type { Preview } from "@storybook/web-components";

const preview: Preview = {
    decorators: [
        (fn, c) => {
            const theme = c.globals.theme ?? "light";

            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

            return fn(c);
        },
    ],
    globalTypes: {
        theme: {
            name: "Theme",
            description: "Toggle Light/Dark mode",
            defaultValue: "light",
            toolbar: {
                icon: "circlehollow",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
                showName: true,
            },
        },
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;