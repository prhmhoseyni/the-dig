"use client";

import Slider from "@repo/ui/Slider";
import { useState } from "react";

export default function SliderPreview() {
  const [singleValue, setSingleValue] = useState<number>(20);
  const [rangeValue, setRangeValue] = useState<[number, number]>([30, 70]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-full max-w-lg flex flex-col gap-8">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Single Value Slider
        </h2>
        <Slider
          value={singleValue}
          onChange={(v) => setSingleValue(v as number)}
        />
      </div>

      <div className="w-full max-w-lg flex flex-col gap-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Range Slider</h2>
        <Slider
          range
          value={rangeValue}
          onChange={(v) => setRangeValue(v as [number, number])}
        />
      </div>
    </div>
  );
}
