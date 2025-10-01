"use client";

import Autocomplete from "@repo/ui/Autocomplete"; // مسیر صحیح به فایل خودت

// export default function Page() {
// 	const cities = ["تهران", "اصفهان", "مشهد", "شیراز", "تبریز"];

// 	return <Autocomplete options={cities} placeholder="please search" notFoundText="not found :::::)" />;
// }

// async function fetchCities(query: string): Promise<string[]> {
// 	const res = await fetch(`/api/search?q=${query}`);
// 	const data = await res.json();
// 	return data.items;
// }

// export default function Page() {
// 	return <Autocomplete fetchOptions={fetchCities} placeholder="جستجو کنید...." debounceDelay={600} />;
// }

// interface AutocompleteOption {
// 	id: number;
// 	label: string;
// 	value: string;
// }

// export default function Page() {
// 	const cities: AutocompleteOption[] = [
// 		{ id: 1, label: "تهران", value: "tehran" },
// 		{ id: 2, label: "اصفهان", value: "isfahan" },
// 		{ id: 3, label: "مشهد", value: "mashhad" },
// 		{ id: 4, label: "شیراز", value: "shiraz" },
// 		{ id: 5, label: "تبریز", value: "tabriz" },
// 		{ id: 6, label: "شمهد ریزه", value: "mashhad1" },
// 		{ id: 7, label: "مشهد خیلی ریزه", value: "mashhad2" },
// 		{ id: 8, label: "مشهد درشته", value: "mashhad3" },
// 		{ id: 9, label: "مشهد خیلی درشته", value: "mashhad4" },
// 	];

// 	const handleSelect = (option: AutocompleteOption) => {
// 		console.log("انتخاب شد:", option); // value داخل option.value هست
// 	};

// 	return (
// 		<div className="min-h-screen flex items-center justify-center bg-gray-50">
// 			<Autocomplete
// 				options={cities}
// 				placeholder="جستجو کنید"
// 				onSelect={handleSelect}
// 				notFoundText="موردی یافت نشد"
// 				maxDropdownHeight={200} // دلخواه قابل تغییر است
//isDropDown={false}
// 			/>
// 		</div>
// 	);
// }

// async function fetchCities(query: string): Promise<AutocompleteOption[]> {
// 	const res = await fetch(`/api/search?q=${query}`);
// 	const data = await res.json();
// 	// فرض میکنیم سرور لیستی از {id, label, value} برگردونه
// 	return data.items;
// }

// export default function Page() {
// 	const handleSelect = (option: AutocompleteOption) => {
// 		console.log("انتخاب از API:", option);
// 	};

// 	return (
// 		<Autocomplete
// 			fetchOptions={fetchCities}
// 			placeholder="جستجو کنید"
// 			debounceDelay={600}
// 			onSelect={handleSelect}
// 			isDropDown={true}
// 		/>
// 	);
// }

// مثلا در صفحه یا جایی که کامپوننت رو استفاده می‌کنی:

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
			idField="cover_i"
			labelField="title"
			valueField="cover_i"
			onSelect={(book) => {
				console.log("انتخاب شد:", book);
			}}
			minSearchChars={3}
		/>
	);
}
