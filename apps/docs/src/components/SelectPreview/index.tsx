"use client";

import SelectList from "@repo/ui/Select";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
export default function Page() {
	const options = [
		{ id: 1, label: "تهران" },
		{ id: 2, label: "اصفهان" },
		{ id: 3, label: "شیراز" },
		{ id: 5, label: "مشهد" },
		{ id: 6, label: "اهواز" },
		{ id: 7, label: "خراسان رضوی" },
		{ id: 8, label: "تبریز" },
		{ id: 9, label: "خراسان شمالی" },
		{ id: 10, label: "سمنان" },
		{ id: 11, label: "زنجان" },
		{ id: 12, label: "کرمان" },
	];
	const [, setSingleValue] = useState<any | null>();
	return (
		<SelectList
			options={options}
			onSelect={(val) => {
				setSingleValue(val);
			}}
			startAdornment={<BadgeCheck size={18} />}
		/>
	);
}
