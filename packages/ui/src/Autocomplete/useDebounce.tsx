import { useState, useEffect } from "react";

// این هوک یک مقدار ورودی می‌گیره و بعد از delay میلی‌ثانیه، مقدار نهایی رو برمی‌گردونه
export function useDebounce(value, delay = 500) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler); // جلوی اجراهای اضافی رو می‌گیره
		};
	}, [value, delay]);

	return debouncedValue;
}
