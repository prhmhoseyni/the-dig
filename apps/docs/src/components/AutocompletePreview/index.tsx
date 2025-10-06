"use client";

import Autocomplete from "@repo/ui/Autocomplete"; // مسیر صحیح به فایل خودت
import { BadgeCheck } from "lucide-react";
interface Place {
	// ساختار آبجکت مکانی برگشتی از Geoapify
	place_id: string;
	name: string;
	formatted: string;
	lat: number;
	lon: number;
}

async function fetchBook(query: string): Promise<Place[]> {
	console.log(query);
	const url = `https://openlibrary.org/search.json?q=${query}`;

	const resp = await fetch(url);
	if (!resp.ok) {
		console.error("fetch failed", resp.statusText);
		return [];
	}
	const data = await resp.json();
	return data?.docs;
}

// سپس استفاده در صفحه:

export default function Page() {
	return (
		<Autocomplete
			fetchOptions={fetchBook}
			placeholder="جستجو ..."
			idField={"key" as keyof Place}
			labelField={"title" as keyof Place}
			valueField={"key" as keyof Place}
			onSelect={(book) => {
				console.log("انتخاب شد:", book);
			}}
			title="Async Data"
			minSearchChars={3}
			startAdornment={<BadgeCheck size={18} />}
		/>
	);
}
