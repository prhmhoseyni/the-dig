"use client";

import Dialog from "@repo/ui/Dialog";
import Button from "@repo/ui/Button";
import { useState } from "react";

export default function DialogPage() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <Button color="brand" onClick={() => setIsOpenDialog(true)}>
          Open Me
        </Button>
      </div>

      <Dialog title="This is a test bottom sheet" isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <Dialog.Header>
          <div>123</div>
        </Dialog.Header>
        <Dialog.Body>
          <ul>
            <li>start</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>123456789</li>
            <li>end</li>
          </ul>
        </Dialog.Body>
        <Dialog.Footer>
          <div>123</div>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
