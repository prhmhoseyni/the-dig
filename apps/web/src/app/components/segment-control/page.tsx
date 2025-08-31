"use client";

import SegmentControl from "@repo/ui/SegmentControl";
import { useState } from "react";

export default function SegmentControlPage() {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex flex-col gap-4 p-4">
      <SegmentControl value={value} onChange={(value) => setValue(value)}>
        <SegmentControl.Item value="1">عنوان نمونه 1</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="2">عنوان نمونه 2</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="3">عنوان نمونه 3</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="4">عنوان نمونه 4</SegmentControl.Item>
      </SegmentControl>

      <SegmentControl size="sm" value={value} onChange={(value) => setValue(value)}>
        <SegmentControl.Item value="1">عنوان نمونه 1</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="2">عنوان نمونه 2</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="3">عنوان نمونه 3</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="4">عنوان نمونه 4</SegmentControl.Item>
      </SegmentControl>

      <SegmentControl size="lg" value={value} onChange={(value) => setValue(value)}>
        <SegmentControl.Item value="1">عنوان نمونه 1</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="2">عنوان نمونه 2</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="3">عنوان نمونه 3</SegmentControl.Item>
        <SegmentControl.Divider />
        <SegmentControl.Item value="4">عنوان نمونه 4</SegmentControl.Item>
      </SegmentControl>
    </div>
  );
}
