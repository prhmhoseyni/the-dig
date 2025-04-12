import type { Meta, StoryObj } from "@storybook/web-components";
import { Dialog, type Props } from "./Dialog.ts";

const meta = {
    title: "Components/Dialog",
    tags: ["autodocs"],
    render: (args) => Dialog(args),
    argTypes: {
        id: {
            control: { type: "text" },
        },
        title: {
            control: { type: "text" },
        },
        body: {
            control: { type: "text" },
        },
        withFooter: {
            control: { type: "boolean" },
        },
    },
    parameters: {
        docs: {
            story: {
                inline: true,
                height: '500px',
            }
        }
    }
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {
    args: {
        id:"dialog1",
        title: "عنوان دیالوگ",
        body: "محتوی داخل دیالوگ.",
    },
};

export const WithFooter: Story = {
    args: {
        id:"dialog2",
        title: "عنوان دیالوگ",
        body: "محتوی داخل دیالوگ.",
        withFooter:true
    },
};
