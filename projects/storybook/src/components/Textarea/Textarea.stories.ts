import type { Meta, StoryObj } from "@storybook/web-components";
import { type Props, Textarea, TextareaVariant } from "./Textarea.ts";

const meta = {
    title: "Components/Textarea",
    tags: ["autodocs"],
    render: (args) => Textarea(args),
    argTypes: {
        variant: {
            control: { type: "select" },
            options: Object.keys(TextareaVariant),
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
