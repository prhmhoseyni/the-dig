import type { Meta, StoryObj } from "@storybook/web-components";
import { BoxShadow, BoxShadowVariant, type Props } from "./BoxShadow.ts";

const meta = {
    title: "Utilities/BoxShadow",
    tags: ["autodocs"],
    render: (args) => BoxShadow(args),
    argTypes: {
        variant: {
            control: { type: "select" },
            options: Object.keys(BoxShadowVariant),
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {};