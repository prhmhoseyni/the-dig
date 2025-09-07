"use client";

import Tabs from "@repo/ui/Tabs";
import { CircleX } from "lucide-react";
import { useState } from "react";

export default function TabsWrapper() {
  const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Tabs
        value={value}
        onChange={(value) => {
          console.log(">>>>>>>>>", value);
          setValue(value);
        }}
      >
        <Tabs.Item>
          <span>عنوان</span>
          <CircleX size={16} />
        </Tabs.Item>

        <Tabs.Item>
          <span>عنوان</span>
          <CircleX size={16} />
        </Tabs.Item>

        <Tabs.Item>
          <span>عنوان</span>
          <CircleX size={16} />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
