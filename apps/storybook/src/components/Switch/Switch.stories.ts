import type { Meta, StoryObj } from "@storybook/web-components";
import { Switch, type Props } from "./Switch.ts";

const meta = {
    title: "Components/Switch",
    tags: ["autodocs"],
    render: (args) => Switch(args),
    argTypes: {
        disabled: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {};

export const Disabled: Story = { args: { disabled: true } };
