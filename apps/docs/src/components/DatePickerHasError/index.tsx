import DatePicker from "@repo/ui/DatePicker";
import { useState } from "react";
import Preview from "../Preview";

export default function DatePickerHasError() {
	const [value, setValue] = useState<number | null>(null);

	return (
		<Preview>
			<DatePicker inputProps={{ hasError: true }} value={value} onChange={(value) => setValue(value)} />
		</Preview>
	);
}
