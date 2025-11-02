import DatePicker from "@repo/ui/DatePicker";
import { useState } from "react";
import Preview from "../Preview";

export default function DatePickerDefaultValue() {
	const [value, setValue] = useState<number | null>(1758573000000);

	return (
		<Preview>
			<DatePicker value={value} onChange={(value) => setValue(value)} locale="fa" />
		</Preview>
	);
}
