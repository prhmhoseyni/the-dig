import type { Meta, StoryObj } from "@storybook/web-components";
import { Notification, type Props } from "./Notification.ts";

const meta = {
    title: "Components/Notification",
    tags: ["autodocs"],
    render: (args) => Notification(args),
    argTypes: {
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
