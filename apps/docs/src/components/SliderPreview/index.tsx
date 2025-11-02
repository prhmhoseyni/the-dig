"use client";

import Slider from "@repo/ui/Slider";
import { useState } from "react";

export default function SliderPreview() {
  const [value, setValue] = useState<number>(20);
  const [range, setRange] = useState<[number, number]>([30, 70]);

  return (
    <div className="min-w-lg flex flex-col items-center justify-center gap-5">
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Single Value Slider</h2>
        <Slider value={value} onChange={(v) => setValue(v as number)} />
      </div>

      <div className="w-full flex flex-col gap-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Range Slider</h2>
        <Slider range value={range} onChange={(v) => setRange(v as [number, number])} />
      </div>
    </div>
  );
}
