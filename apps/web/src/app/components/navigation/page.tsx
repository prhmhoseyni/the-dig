"use client";

import Navigation from "@repo/ui/Navigation";
import { CircleX } from "lucide-react";
import { useState } from "react";

export default function NavigationPage() {
  const [value, setValue] = useState(1);

  return (
    <div className="flex flex-col gap-4 p-4">
      <Navigation
        value={value}
        onChange={(value) => {
          console.log(">>>>>>>>>", value);
          setValue(value);
        }}
      >
        <Navigation.Item>
          <CircleX size={18} />
          <span>عنوان</span>
        </Navigation.Item>

        <Navigation.Item>
          <CircleX size={18} />
          <span>عنوان</span>
        </Navigation.Item>

        <Navigation.Item>
          <CircleX size={18} />
          <span>عنوان</span>
        </Navigation.Item>
      </Navigation>
    </div>
  );
}
