"use client";

import { useState } from "react";
import Button from "@repo/ui/Button";
import Modal from "@repo/ui/Modal";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex justify-center items-center p-4">
        <Button onClick={() => setIsOpen(true)}>بازکردن</Button>
      </div>

      <Modal
        isOpen={isOpen}
        type="info"
        title="عنوان مودال"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        onAdmit={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }}
        onDeny={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
