import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { Dialog, type Props } from "./Dialog.ts";

const meta = {
    title: "Components/Dialog",
    tags: ["autodocs"],
    render: (args) => Dialog(args),
    argTypes: {
        title: {
            control: { type: "text" },
        },
        body: {
            control: { type: "text" },
        },
        footer: {
            control: false,
        },
    },
} satisfies Meta<Props>;

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {
    args: {
        title: "عنوان دیالوگ",
        body: "محتوی داخل دیالوگ.",
    },
};

export const WithoutFooter: Story = {
    args: {
        title: "عنوان دیالوگ",
        body: "محتوی داخل دیالوگ.",
    },
    render: (args) =>
    Dialog({
      ...args,
      footer: html`<div class="flex" style="width:100%;flex: 1 1 0%;justify-content: flex-end; gap: 0.75rem">
      <label class="btn btn-gray btn-tinted" style="min-width: 3rem" for="my_modal_1">انصراف</label>
      <label class="btn btn-brand" style="min-width: 3rem" for="my_modal_1">تایید</label>
      </div>`,
    }),
};
