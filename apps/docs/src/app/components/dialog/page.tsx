"use client";

import Button from "@repo/ui/Button";
import Dialog from "@repo/ui/Dialog";
import { useState } from "react";

export default function DialogPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto flex justify-center items-center p-4">
        <Button onClick={() => setIsOpen(true)}>بازکردن</Button>
      </div>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        محتوی دیالوگ
        <p className="text-subtitle5">
          این یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ
          است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ است که یک دیالوگ
          است که
        </p>
      </Dialog>
    </>
  );
}
