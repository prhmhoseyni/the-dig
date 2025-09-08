import DatePicker from "@repo/ui/DatePicker";
import { useState } from "react";
import Preview from "../Preview";

export default function DatePickerPreview() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Preview>
      <DatePicker value={value} onChange={(_value) => setValue(_value)} />
    </Preview>
  );
}
