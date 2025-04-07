import type { Meta, StoryObj } from "@storybook/web-components";
import { IconButton, IconButtonColor, IconButtonSize, IconButtonVariant, type Props } from "./IconButton.ts";

const meta = {
    title: "Components/IconButton",
    tags: ["autodocs"],
    render: (args) => IconButton(args),
    argTypes: {
        size: {
            control: { type: "select" },
            options: Object.keys(IconButtonSize),
        },
        variant: {
            control: { type: "select" },
            options: Object.keys(IconButtonVariant),
        },
        color: {
            control: { type: "select" },
            options: Object.keys(IconButtonColor),
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {};

export const Brand: Story = { args: { color: "brand" } };

export const Gray: Story = { args: { color: "gray" } };

export const Success: Story = { args: { color: "success" } };

export const Warning: Story = { args: { color: "warning" } };

export const Danger: Story = { args: { color: "danger" } };
