import type { Meta, StoryObj } from "@storybook/web-components";
import { Button, ButtonColor, ButtonSize, ButtonVariant, type Props } from "./Button.ts";

const meta = {
    title: "Components/Button",
    tags: ["autodocs"],
    render: (args) => Button(args),
    argTypes: {
        size: {
            control: { type: "select" },
            options: Object.keys(ButtonSize),
        },
        variant: {
            control: { type: "select" },
            options: Object.keys(ButtonVariant),
        },
        color: {
            control: { type: "select" },
            options: Object.keys(ButtonColor),
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {
    args: {
        label: "متن دکمه",
    },
};

export const Brand: Story = {
    args: {
        label: "متن دکمه",
        color: "brand",
    },
};

export const Gray: Story = {
    args: {
        label: "متن دکمه",
        color: "gray",
    },
};

export const Success: Story = {
    args: {
        label: "متن دکمه",
        color: "success",
    },
};

export const Warning: Story = {
    args: {
        label: "متن دکمه",
        color: "warning",
    },
};

export const Danger: Story = {
    args: {
        label: "متن دکمه",
        color: "danger",
    },
};
