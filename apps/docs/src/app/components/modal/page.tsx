"use client";

import Button from "@repo/ui/Button";
import Modal from "@repo/ui/Modal";
import { useState } from "react";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex justify-center items-center p-4">
        <Button onClick={() => setIsOpen(true)}>بازکردن</Button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        محتوی مودال
      </Modal>
    </>
  );
}
