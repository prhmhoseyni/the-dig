import type { Meta, StoryObj } from "@storybook/web-components";
import { type Props, Typography, TypographyColor, TypographyVariant } from "./Typography.ts";

const meta = {
    title: "Utilities/Typography",
    tags: ["autodocs"],
    render: (args) => Typography(args),
    argTypes: {
        variant: {
            control: { type: "select" },
            options: Object.keys(TypographyVariant),
        },
        color: {
            control: { type: "select" },
            options: Object.keys(TypographyColor),
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = { args: { label: "متن نمونه" } };
