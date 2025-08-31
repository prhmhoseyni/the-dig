"use client";

import Tabs from "@repo/ui/Tabs";
import { useState } from "react";
import { CircleX } from "lucide-react";

export default function TabsPage() {
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
        <Tabs.Item>Tab 1</Tabs.Item>
        <Tabs.Item>Tab 2</Tabs.Item>
        <Tabs.Item>Tab 3</Tabs.Item>
      </Tabs>

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
