import type { Meta, StoryObj } from "@storybook/web-components";
import { FormField, type Props } from "./FormField.ts";

const meta = {
    title: "Utilities/FormField",
    tags: ["autodocs"],
    render: (args) => FormField(args),
    argTypes: {
        label: { type: "string" },
        helperMessage: { type: "string" },
        errorMessage: { type: "string" },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = { args: { label: "نام" } };

export const WithHelperMessage: Story = { args: { label: "نام", helperMessage: "متن راهنما" } };

export const WithErrorMessage: Story = { args: { label: "نام", errorMessage: "متن خطا" } };