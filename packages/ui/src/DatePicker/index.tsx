import ReactModernDatePicker, { type DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import moment from "jalali-moment";
import { toEnglishDigits } from "msk-utils";
import type { RefObject } from "react";
import TextField, { type TextFieldProps } from "../TextField";
import "./datepicker.css";
type JalaliDate = {
	year: number;
	month: number;
	day: number;
};
type DisabledRange = {
	start: JalaliDate;
	end: JalaliDate;
};
function convertTimestamp2DayValue(value: number) {
	return {
		day: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { day: "numeric" }))),
		month: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { month: "numeric" }))),
		year: Number(toEnglishDigits(new Date(value).toLocaleDateString("fa", { year: "numeric" }))),
	};
}

function convertDayValue2Timestamp(value: DayValue) {
	const convertedDateFromSolarToGregorian = moment
		.from(`${value?.year}/${value?.month}/${value?.day}`, "fa", "YYYY/MM/DD")
		.format("YYYY/MM/DD");

	return new Date(convertedDateFromSolarToGregorian).getTime();
}

const generateDisabledRange = (start: JalaliDate, end: JalaliDate): JalaliDate[] => {
	const days: JalaliDate[] = [];
	const current = { ...start };

	while (
		current.year < end.year ||
		(current.year === end.year && (current.month < end.month || (current.month === end.month && current.day <= end.day)))
	) {
		days.push({ ...current });

		current.day++;
		if (current.day > 31) {
			current.day = 1;
			current.month++;
		}
		if (current.month > 12) {
			current.month = 1;
			current.year++;
		}
	}
	return days;
};

export interface DatePickerProps {
	value: number | null;
	onChange: (value: number | null) => void;
	locale?: "fa" | "en";
	minDate?: number;
	maxDate?: number;
	disableDays?: Array<JalaliDate>;
	disabledRange?: DisabledRange;
	inputProps?: TextFieldProps;
}

export default function DatePicker(props: DatePickerProps) {
	const render = ({ ref }: { ref: RefObject<HTMLElement> }) => (
		<TextField
			dir={props.locale === "en" ? "ltr" : "rtl"}
			ref={ref as RefObject<HTMLInputElement>}
			readOnly
			value={
				props.value
					? new Date(props.value).toLocaleDateString(props.locale === "en" ? "en" : "fa", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})
					: undefined
			}
			{...props.inputProps}
		/>
	);

	return (
		<ReactModernDatePicker
			locale={props.locale ?? "fa"}
			value={props.value ? convertTimestamp2DayValue(props.value) : null}
			shouldHighlightWeekends
			wrapperClassName="w-full"
			renderInput={render}
			maximumDate={props.maxDate ? convertTimestamp2DayValue(props.maxDate) : undefined}
			minimumDate={props.minDate ? convertTimestamp2DayValue(props.minDate) : undefined}
			disabledDays={
				props.disableDays
					? props.disableDays
					: props.disabledRange
						? generateDisabledRange(props.disabledRange?.start, props.disabledRange?.end)
						: undefined
			}
			colorPrimary="rgb(var(--dig-brand))"
			onChange={(_val) => {
				if (_val) props.onChange(convertDayValue2Timestamp(_val));
			}}
		/>
	);
}
