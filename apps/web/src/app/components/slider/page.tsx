"use client";

import React, { useState } from "react";
import Slider from "@repo/ui/Slider";

const App: React.FC = () => {
  const [singleValue, setSingleValue] = useState<number>(20);
  const [rangeValue, setRangeValue] = useState<[number, number]>([30, 70]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 space-y-16">
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Single Value Slider
        </h2>
        <Slider
          value={singleValue}
          onChange={(v) => setSingleValue(v as number)}
        />
      </div>

      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Range Slider</h2>
        <Slider
          range
          value={rangeValue}
          onChange={(v) => setRangeValue(v as [number, number])}
        />
      </div>
    </div>
  );
};

export default App;
