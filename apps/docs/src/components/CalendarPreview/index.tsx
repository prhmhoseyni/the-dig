import Calendar from "@repo/ui/Calendar";
import { useState } from "react";
import Preview from "../Preview";
import "./index.css";

export default function CalendarPreview() {
	const [selected, setSelected] = useState<Date>();

	return (
		<Preview>
			<Calendar mode="single" selected={selected} onSelect={setSelected} />
		</Preview>
	);
}
