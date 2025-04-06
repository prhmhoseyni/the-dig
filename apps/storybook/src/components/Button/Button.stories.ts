import type { Meta, StoryObj } from "@storybook/web-components";
import { Button, ButtonColor, ButtonSize, ButtonVariant, type Props } from "./Button.ts";

const meta = {
    title: "Components/Button",
    tags: ["autodocs"],
    render: (args) => Button(args),
    argTypes: {
        color: {
            control: { type: "select" },
            options: Object.keys(ButtonColor),
        },
        variant: {
            control: { type: "select" },
            options: Object.keys(ButtonVariant),
        },
        size: {
            control: { type: "select" },
            options: Object.keys(ButtonSize),
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
