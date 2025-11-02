import DatePicker from "@repo/ui/DatePicker";
import { Calendar } from "lucide-react";
import { useState } from "react";
import Preview from "../Preview";
export default function DatePickerDisableDays() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Preview>
      <DatePicker
        locale="fa"
        disableDays={[
          { year: 1404, month: 7, day: 10 },
          { year: 1404, month: 7, day: 12 },
          { year: 1404, month: 7, day: 15 },
          { year: 1404, month: 7, day: 16 },
          { year: 1404, month: 7, day: 20 },
        ]}
        value={value}
        onChange={(value) => setValue(value)}
        inputProps={{
          endAdornment: <Calendar size={18} />,
        }}
      />
    </Preview>
  );
}
