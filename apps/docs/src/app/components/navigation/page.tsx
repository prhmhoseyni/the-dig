"use client";

import Navigation from "@repo/ui/Navigation";
import { useState } from "react";
import { CircleX } from "lucide-react";

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
