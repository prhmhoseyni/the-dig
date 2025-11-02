import DatePicker from "@repo/ui/DatePicker";
import { useState } from "react";
import Preview from "../Preview";

export default function DatePickerDisableRangeDays() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Preview>
      <DatePicker
        locale="fa"
        value={value}
        disabledRange={{
          start: { year: 1404, month: 7, day: 10 },
          end: { year: 1404, month: 8, day: 25 },
        }}
        onChange={(value) => setValue(value)}
      />
    </Preview>
  );
}
