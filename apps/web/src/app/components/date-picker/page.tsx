"use client";

import { useState } from "react";
import DatePicker from "@repo/ui/DatePicker";

export default function Page() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-4 p-4">
      <DatePicker
        value={value}
        onChange={(val) => setValue(val)}
        inputProps={{ placeholder: "تاریخ را انتخاب کنید" }}
      />
    </div>
  );
}
