"use client";

import { useEffect, useMemo, useRef, useState, ReactNode } from "react";
import Menu from "@repo/ui/Menu";
import CircularProgress from "@repo/ui/CircularProgress";
import { X } from "lucide-react";
import Chip from "@repo/ui/Chip";

export interface AutocompleteProps<T> {
	options?: (T & { disabled?: boolean })[]; // داده لوکال + فیلد disable
	fetchOptions?: (query: string) => Promise<T[]>; // گرفتن داده از API
	placeholder?: string;
	debounceDelay?: number;
	onSelect?: (option: T | T[] | null) => void; // single | multiple | null
	maxDropdownHeight?: number; // پیش‌فرض 200px
	notFoundText?: string;
	isDropDown?: boolean;
	searchingText?: string;
	minSearchChars?: number; // حداقل کاراکتر برای سرچ
	defaultValue?: T | T[] | null; // مقدار پیش‌فرض

	// extras
	hasError?: boolean;
	size?: "xs" | "sm" | "md" | "lg";
	title?: string;
	titleClassName?: string;
	titleStyle?: React.CSSProperties;
	titleAlign?: "left" | "right" | "center";
	disabled?: boolean;
	readOnly?: boolean;
	renderOption?: (option: T, isSelected: boolean) => React.ReactNode;
	multiple?: boolean; // حالت چندانتخابی

	// مپینگ کلیدها
	idField?: keyof T;
	labelField?: keyof T;
	valueField?: keyof T;
}

export default function Autocomplete<T>({
	options: localOptions,
	fetchOptions,
	placeholder = "جستجو کنید",
	debounceDelay = 500,
	onSelect,
	maxDropdownHeight = 200,
	notFoundText = "موردی یافت نشد",
	isDropDown = true,
	searchingText = "در حال جستجو...",
	minSearchChars = 2,
	defaultValue = null,
	hasError = false,
	size = "md",
	title = "test",
	titleClassName,
	titleStyle,
	titleAlign = "right",
	disabled = false,
	readOnly = false,
	renderOption,
	multiple = true,

	idField = "id" as keyof T,
	labelField = "label" as keyof T,
	valueField = "value" as keyof T,
}: AutocompleteProps<T>) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState<(T & { disabled?: boolean })[]>([]);
	const [loading, setLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState<T | null>(null); // single
	const [selectedOptions, setSelectedOptions] = useState<(T & { disabled?: boolean })[]>([]); // multiple
	const [searchDone, setSearchDone] = useState(false);

	const isSelectingRef = useRef(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null); // anchor for Menu
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set<string>());

	// size classes
	const sizeClasses: Record<string, string> = {
		xs: "min-h-8 text-sm px-2",
		sm: "min-h-10 text-sm px-3",
		md: "min-h-12 text-base px-3",
		lg: "min-h-14 text-lg px-4",
	};

	// initialize defaultValue
	useEffect(() => {
		if (defaultValue == null) return;
		if (multiple) {
			if (Array.isArray(defaultValue)) {
				setSelectedOptions(defaultValue as any);
				const ids = new Set<string>((defaultValue as any).map((it: any) => String(it[idField])));
				setSelectedIds(ids);
			} else {
				setSelectedOptions([defaultValue as any]);
				setSelectedIds(new Set([String((defaultValue as any)[idField])]));
			}
		} else {
			if (!Array.isArray(defaultValue)) {
				setSelectedOption(defaultValue as any);
				setInputValue(String((defaultValue as any)[labelField] ?? ""));
			} else {
				const first = (defaultValue as any)[0] as T | undefined;
				if (first) {
					setSelectedOption(first);
					setInputValue(String((first as any)[labelField] ?? ""));
				}
			}
		}
	}, [defaultValue, multiple, idField, labelField]);

	const localMatches = useMemo(() => {
		if (!localOptions) return [];
		if (!inputValue) return localOptions;
		const q = inputValue.toLowerCase();
		return localOptions.filter((opt) =>
			String((opt as any)[labelField])
				.toLowerCase()
				.includes(q),
		);
	}, [localOptions, inputValue, labelField]);

	useEffect(() => {
		if (!localOptions) return;
		setOptions(localMatches as (T & { disabled?: boolean })[]);
	}, [localMatches, localOptions]);

	useEffect(() => {
		if (!fetchOptions) return;
		if (localOptions && localMatches.length > 0) return;

		if (!inputValue || !inputValue.trim()) {
			setOptions([]);
			setSearchDone(false);
			return;
		}

		if (isSelectingRef.current) {
			isSelectingRef.current = false;
			return;
		}

		if (inputValue.length < minSearchChars) {
			setOptions([]);
			setSearchDone(false);
			return;
		}

		const handler = setTimeout(async () => {
			setLoading(true);
			try {
				const res = await fetchOptions(inputValue);
				setOptions((res ?? []) as (T & { disabled?: boolean })[]);
				setSearchDone(true);
			} catch (err) {
				console.error("Autocomplete fetch error:", err);
				setOptions([]);
				setSearchDone(true);
			} finally {
				setLoading(false);
			}
		}, debounceDelay);

		return () => clearTimeout(handler);
	}, [inputValue, fetchOptions, debounceDelay, localOptions, localMatches, minSearchChars]);

	const handleFocus = () => {
		if (disabled || readOnly) return;
		if ((options && options.length > 0) || fetchOptions || (localOptions && localOptions.length > 0)) {
			setMenuOpen(true);
		}
	};

	const handleCloseMenu = () => {
		setMenuOpen(false);
		if (!multiple && !selectedOption) {
			setInputValue("");
			onSelect?.(null);
		}
		if (options.length === 0) setSearchDone(false);
	};

	const handleSelect = (option: T & { disabled?: boolean }) => {
		const id = String((option as any)[idField]);
		const propDisabled = Boolean((option as any).disabled);

		if (propDisabled) return;
		if (multiple && selectedIds.has(id)) return;

		isSelectingRef.current = true;

		if (multiple) {
			const newSelected = [...selectedOptions, option];
			setSelectedOptions(newSelected);
			setSelectedIds((prev) => {
				const s = new Set(prev);
				s.add(id);
				return s;
			});
			onSelect?.(newSelected);
			setInputValue(""); // clear input

			if (inputRef.current) inputRef.current.focus();
		} else {
			setSelectedOption(option);
			setInputValue(String((option as any)[labelField] ?? ""));
			setMenuOpen(false);
			onSelect?.(option);
		}
	};

	const handleClear = () => {
		if (disabled || readOnly) return;
		setInputValue("");
		setOptions([]);
		setMenuOpen(false);
		setSelectedOption(null);
		setSelectedOptions([]);
		setSelectedIds(new Set());
		setSearchDone(false);
		onSelect?.(null);
	};

	// remove chip in multiple mode
	const removeChip = (option: T & { disabled?: boolean }) => {
		const id = String((option as any)[idField]);
		const updated = selectedOptions.filter((o) => String((o as any)[idField]) !== id);
		setSelectedOptions(updated);
		setSelectedIds((prev) => {
			const s = new Set(prev);
			s.delete(id);
			return s;
		});
		onSelect?.(updated);
		if (inputRef.current) inputRef.current.focus();
	};

	return (
		<div className="w-full flex flex-col gap-1">
			{/* title */}
			{title && (
				<label
					className={`mb-2 text-sm font-medium text-gray-700 ${titleClassName ?? ""}`}
					style={{ textAlign: titleAlign as any, ...(titleStyle ?? {}) }}
				>
					{title}
				</label>
			)}

			{/* input wrapper (anchor for Menu) */}
			<div ref={wrapperRef} className={`relative w-full max-w-md`}>
				<div
					className={`
    flex flex-wrap items-center gap-2 w-full rounded-lg border ${sizeClasses[size]} px-2
    ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-prose-primary"}
    ${readOnly ? "bg-gray-50 text-gray-500 cursor-default" : ""}
    ${hasError ? "border-red-500" : "border-gray-300"}
    focus-within:border-brand focus-within:shadow-focus-brand
    transition-all ease-in-out duration-300
  `}
					onClick={() => {
						if (disabled || readOnly) return;
						inputRef.current?.focus();
						if ((options && options.length > 0) || fetchOptions || (localOptions && localOptions.length > 0)) {
							setMenuOpen(true);
						}
					}}
				>
					{/* chips  multiple */}
					{multiple &&
						selectedOptions.map((opt) => (
							<Chip
								key={String((opt as any)[idField])}
								color="brand"
								onClick={(e) => {
									e.stopPropagation();
									removeChip(opt);
								}}
								className="!h-8"
							>
								{String((opt as any)[labelField])}
							</Chip>
						))}

					{/* input */}
					{!readOnly && (
						<input
							ref={inputRef}
							type="text"
							value={inputValue}
							onFocus={handleFocus}
							onChange={(e) => {
								if (disabled || readOnly) return;
								setInputValue(e.target.value);
								if (!multiple) setSelectedOption(null);
								setMenuOpen(true);
							}}
							placeholder={multiple && selectedOptions.length > 0 ? "" : placeholder}
							dir="rtl"
							disabled={disabled}
							readOnly={readOnly}
							className="flex-1 min-w-[80px] outline-0 border-0 bg-transparent py-2"
						/>
					)}

					{readOnly && !multiple && <div className="flex-1 min-w-[80px] py-2">{inputValue}</div>}

					{!multiple && inputValue && !loading && !disabled && !readOnly && (
						<X
							onClick={handleClear}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
							style={isDropDown ? { left: "40px" } : {}}
						/>
					)}

					{/* loading */}
					{loading && (
						<div className="absolute left-3 top-1/2 -translate-y-1/2" style={isDropDown ? { left: "40px" } : {}}>
							<CircularProgress size="xs" />
						</div>
					)}

					{isDropDown && !disabled && !readOnly && (
						<div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center pointer-events-none">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
								<path
									d="M16 10L12 14L8 10"
									stroke="rgb(var(--dig-prose-hint))"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					)}
				</div>
			</div>

			{/* Dropdown */}
			<Menu anchor={wrapperRef.current} open={menuOpen} onClose={handleCloseMenu}>
				<div
					dir="rtl"
					className="overflow-y-auto"
					style={{
						width: wrapperRef.current?.offsetWidth - 10 ?? "100%",
						maxHeight: `${maxDropdownHeight}px`,
						right: 0,
					}}
				>
					{loading ? (
						<Menu.Item dir="rtl" className="vazirmatn text-gray-500">
							{searchingText}
						</Menu.Item>
					) : options.length > 0 ? (
						options.map((option) => {
							const id = String((option as any)[idField]);
							const propDisabled = Boolean((option as any).disabled);
							const isSelected = multiple
								? selectedIds.has(id)
								: selectedOption && String((selectedOption as any)[idField]) === id;

							const isDisabled = propDisabled || (multiple && selectedIds.has(id));

							return (
								<Menu.Item
									key={id}
									dir="rtl"
									disabled={option.disabled} // در صورتی که Menu.Item پشتیبانی کنه
									className={`vazirmatn text-base sm:text-lg px-2 py-1 rounded
		${option.disabled ? "!text-gray-500 !bg-gray-200 !cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-gray-100"}
		${isSelected ? "bg-gray-200 font-medium" : ""}
	`}
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										if (isDisabled) return;
										handleSelect(option as any);
									}}
								>
									{renderOption ? renderOption(option as T, Boolean(isSelected)) : String(option[labelField])}
								</Menu.Item>
							);
						})
					) : searchDone || (!!localOptions && inputValue) ? (
						<Menu.Item dir="rtl" className="vazirmatn text-gray-500">
							{notFoundText}
						</Menu.Item>
					) : null}
				</div>
			</Menu>
		</div>
	);
}
