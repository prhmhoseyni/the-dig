"use client";

import BottomSheet from "@repo/ui/BottomSheet";
import Button from "@repo/ui/Button";
import { useState } from "react";

export default function BottomSheetPage() {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState(false);
  const [isOpenScrollBottomSheet, setIsOpenScrollBottomSheet] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <Button color="brand" onClick={() => setIsOpenBottomSheet(true)}>
          Open Me
        </Button>
        <Button color="brand" onClick={() => setIsOpenScrollBottomSheet(true)}>
          Open Me Scroll
        </Button>
      </div>

      <BottomSheet
        title="This is a test bottom sheet"
        isOpen={isOpenBottomSheet}
        onClose={() => setIsOpenBottomSheet(false)}
      >
        <BottomSheet.Body>
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
        </BottomSheet.Body>
      </BottomSheet>

      <BottomSheet
        title="This is a test bottom sheet"
        isOpen={isOpenScrollBottomSheet}
        onClose={() => setIsOpenScrollBottomSheet(false)}
      >
        <BottomSheet.Body>
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
        </BottomSheet.Body>
      </BottomSheet>
    </>
  );
}
