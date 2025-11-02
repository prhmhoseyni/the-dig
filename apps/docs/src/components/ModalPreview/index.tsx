"use client";

import Button from "@repo/ui/Button";
import Modal, { type ModalType } from "@repo/ui/Modal";
import { useState } from "react";

export default function ModalPreview(props: { type: ModalType }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="info" onClick={() => setOpen(true)}>
        کلیک کن
      </Button>

      <Modal
        open={open}
        type={props.type}
        title="عنوان مودال"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        onAdmit={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setOpen(false);
        }}
        onDeny={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
