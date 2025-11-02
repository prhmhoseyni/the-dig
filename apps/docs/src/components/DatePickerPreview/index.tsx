import DatePicker from "@repo/ui/DatePicker";
import { useState } from "react";
import Preview from "../Preview";

export default function DatePickerPreview(props: { local: "fa" | "en" }) {
  const [value, setValue] = useState<number | null>(null);

  return (
    <Preview>
      <DatePicker
        locale={props.local}
        value={value}
        onChange={(value) => {
          console.log("val date : ", value);
          setValue(value);
        }}
      />
    </Preview>
  );
}
