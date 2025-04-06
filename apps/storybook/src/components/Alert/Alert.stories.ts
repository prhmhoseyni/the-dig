import type { Meta, StoryObj } from "@storybook/web-components";
import { Alert, AlertColor, type Props } from "./Alert.ts";

const meta = {
    title: "Components/Alert",
    tags: ["autodocs"],
    render: (args) => Alert(args),
    argTypes: {
        color: {
            control: { type: "select" },
            options: Object.keys(AlertColor),
        },
        title: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {
    args: {
        title: "عنوان پیام",
        description: "توضیحات مختصر درمورد پیام هشدار.",
    },
};

export const WithoutTitle: Story = {
    args: {
        description: "توضیحات مختصر درمورد پیام هشدار.",
    },
};
