import type { Meta, StoryObj } from "@storybook/web-components";
import { Input, InputVariant, type Props } from "./Input.ts";

const meta = {
    title: "Components/Input",
    tags: ["autodocs"],
    render: (args) => Input(args),
    argTypes: {
        variant: {
            control: { type: "select" },
            options: Object.keys(InputVariant),
        },
        hasError: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: "secondary" } };

export const HasError: Story = { args: { hasError: true } };

export const Disabled: Story = { args: { disabled: true } };
