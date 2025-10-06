"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import Menu from "../Menu";
import CircularProgress from "../CircularProgress";
import { X } from "lucide-react";
import Chip from "../Chip";
import clsx from "clsx";

const sizeClasses: Record<string, string> = {
	xs: "min-h-8 text-sm px-2",
	sm: "min-h-10 text-sm px-3",
	md: "min-h-12 text-base px-3",
	lg: "min-h-14 text-lg px-4",
};
/**
 * :::: types :::
 */
export type SelectVariant = "primary" | "secondary";

export interface AutocompleteProps<T>
	extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "defaultValue" | "onSelect"> {
	inputWrapperProps?: Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">;
	options?: Array<T & { disabled?: boolean }>;
	fetchOptions?: (query: string) => Promise<T[]>;
	debounceDelay?: number;
	onSelect?: (option: T | null) => void;
	maxDropdownHeight?: number;
	notFoundText?: string;
	isDropDown?: boolean;
	searchingText?: string;
	minSearchChars?: number;
	defaultValue?: T | null;
	multiple?: boolean;
	hasError?: boolean;
	heigth?: "xs" | "sm" | "md" | "lg";
	width?: number | string;
	renderOption?: (option: T, isSelected: boolean) => ReactNode;
	idField?: keyof T;
	labelField?: keyof T;
	valueField?: keyof T;
	variant?: SelectVariant;
	startAdornment?: ReactNode;
}

export default function Autocomplete<T>(props: AutocompleteProps<T>) {
	const {
		options: localOptions,
		fetchOptions,
		debounceDelay = 500,
		onSelect,
		maxDropdownHeight = 200,
		notFoundText = "موردی یافت نشد",
		isDropDown = true,
		searchingText = "در حال جستجو...",
		minSearchChars = 3,
		defaultValue = null,
		multiple = false,
		hasError = false,
		heigth = "md",
		width = "100%",
		renderOption,
		idField = "id" as keyof T,
		labelField = "label" as keyof T,
		variant = "variant",
		inputWrapperProps,
		startAdornment,
	} = props;

	const disabled = props.disabled ?? (inputWrapperProps as { disabled?: boolean })?.disabled ?? false;
	const readOnly = props.readOnly ?? (inputWrapperProps as { readOnly?: boolean })?.readOnly ?? false;
	const placeholder = props.placeholder ?? (inputWrapperProps as { placeholder?: string })?.placeholder ?? false;

	const [menuOpen, setMenuOpen] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState<(T & { disabled?: boolean })[]>([]);
	const [loading, setLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState<T | null>(null);
	const [selectedOptions, setSelectedOptions] = useState<T[]>([]);
	const [searchDone, setSearchDone] = useState(false);

	const [lastResults, setLastResults] = useState<(T & { disabled?: boolean })[]>([]);

	const isSelectingRef = useRef(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const selectedIds = useMemo(
		() => new Set(selectedOptions.map((o) => String((o as any)[idField]))),
		[selectedOptions, idField],
	);

	useEffect(() => {
		if (defaultValue) {
			if (multiple) {
				setSelectedOptions([defaultValue]);
			} else {
				setSelectedOption(defaultValue);
				setInputValue(String(defaultValue[labelField]));
			}
		}
	}, [defaultValue, labelField, multiple]);

	const localMatches = useMemo(() => {
		if (!localOptions) return [];
		if (!inputValue) return localOptions;
		const q = inputValue.toLowerCase();
		return localOptions.filter((opt) => String(opt[labelField]).toLowerCase().includes(q));
	}, [localOptions, inputValue, labelField]);

	useEffect(() => {
		if (!localOptions) return;

		if (multiple) {
			const filtered = localMatches.filter((opt) => !selectedIds.has(String((opt as any)[idField])));
			setOptions(filtered as (T & { disabled?: boolean })[]);
		} else if (selectedOption && menuOpen) {
			setOptions(localOptions as (T & { disabled?: boolean })[]);
		} else {
			setOptions(localMatches as (T & { disabled?: boolean })[]);
		}
	}, [localMatches, localOptions, multiple, selectedIds, idField, menuOpen, selectedOption]);

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
				let res = await fetchOptions(inputValue);
				// تغییر اصلی: حذف آیتم‌های انتخاب‌شده وقتی multiple=true
				if (multiple && Array.isArray(res)) {
					res = res.filter((r) => !selectedOptions.some((sel) => String(sel[idField]) === String(r[idField])));
				}
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
	}, [
		inputValue,
		fetchOptions,
		debounceDelay,
		minSearchChars,
		localOptions,
		localMatches.length,
		multiple,
		selectedOptions,
		idField,
	]);

	const handleFocus = () => {
		if (!disabled && !readOnly) {
			if ((options && options.length > 0) || (fetchOptions && options.length > 0)) {
				if (fetchOptions && lastResults.length > 0 && options.length === 0) {
					setOptions(
						lastResults.filter(
							(opt) => !selectedOptions.some((sel) => String((sel as any)[idField]) === String((opt as any)[idField])),
						),
					);
				}
				setMenuOpen(true);
			}
		}
	};

	const handleCloseMenu = () => {
		setMenuOpen(false);
		if (!multiple && !selectedOption) {
			setInputValue("");
			onSelect?.(null);
		}
	};

	/**
	 * select item dropdown
	 */
	const handleSelect = (option: T & { disabled?: boolean }) => {
		if (multiple) {
			setSelectedOptions((prev) => {
				const updated = [...prev, option];

				if (localOptions) {
					setOptions((opts) => {
						const newOpts = opts.filter((o) => String((o as any)[idField]) !== String(option[idField]));
						if (newOpts.length === 0) setMenuOpen(false);
						return newOpts;
					});
				} else {
					const newOpts = lastResults.filter(
						(opt) => !updated.some((sel) => String((sel as any)[idField]) === String((opt as any)[idField])),
					);
					setOptions(newOpts);
					if (newOpts.length === 0) setMenuOpen(false);
				}

				return updated;
			});
			onSelect?.(option);
			setInputValue("");
		} else {
			isSelectingRef.current = true;
			setInputValue(String(option[labelField]));
			setSelectedOption(option);
			setMenuOpen(false);
			onSelect?.(option);
		}
	};

	/**
	 * remove selected item
	 */
	const handleRemoveChip = (option: T) => {
		setInputValue("");
		if (disabled || readOnly) return;
		setSelectedOptions((prev) => prev.filter((o) => String((o as any)[idField]) !== String(option[idField])));

		if (localOptions) {
			setOptions((opts) => [...opts, option as T & { disabled?: boolean }]);
		} else {
			setOptions(
				lastResults.filter(
					(opt) =>
						!selectedOptions
							.filter((sel) => String((sel as any)[idField]) !== String(option[idField]))
							.some((sel) => String((sel as any)[idField]) === String((opt as any)[idField])),
				),
			);
		}

		onSelect?.(null);
	};

	const handleClear = () => {
		if (disabled || readOnly) return;
		setInputValue("");
		setOptions([]);
		setMenuOpen(false);
		setSelectedOption(null);
		//setSelectedOptions([]);
		setSearchDone(false);
		setLastResults([]);
		onSelect?.(null);
	};

	/**
	 * remove all selected item
	 */
	const handleClearAll = () => {
		if (disabled || readOnly) return;
		setSelectedOptions([]);
		if (localOptions) {
			setOptions(localOptions as (T & { disabled?: boolean })[]);
		} else {
			setOptions(lastResults);
		}
		onSelect?.(null);
	};

	useEffect(() => {
		if (!multiple && menuOpen && selectedOption) {
			const id = String((selectedOption as any)[idField]);
			const el = document.getElementById(`autocomplete-item-${id}`);
			if (el) {
				setTimeout(() => el.scrollIntoView({ block: "nearest" }), 0);
			}
		}
	}, [menuOpen, multiple, selectedOption, idField]);

	return (
		<div className="w-full flex flex-col justify-center items-start p-4" style={{ width }}>
			<div ref={containerRef} className="relative w-full">
				<div
					className={clsx(
						"flex flex-wrap items-center gap-1 border rounded-lg transition-all ease-in-out duration-300 p-2",
						sizeClasses[heigth],
						{
							// حالت غیرفعال
							"bg-gray-100 text-gray-400 cursor-not-allowed": disabled,

							//  حالت فقط خواندنی
							"bg-gray-50 text-gray-500 cursor-default": readOnly,

							//  حالت عادی
							"text-prose-primary border-gray-400 focus-within:border-brand focus-within:shadow-focus-brand":
								!hasError && !disabled && !readOnly,

							// حالت ارور (box-shadow فقط موقع فوکوس)
							"!border-danger focus-within:!border-danger focus-within:!shadow-focus-danger":
								hasError && !disabled && !readOnly,
						},
					)}
				>
					{startAdornment && (
						<div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">{startAdornment}</div>
					)}

					<div className={selectedOptions.length && startAdornment ? "mr-5" : ""}>
						{multiple &&
							selectedOptions.map((opt) => (
								<Chip key={String((opt as any)[idField])} onClick={() => handleRemoveChip(opt)} className="mr-1">
									{String(opt[labelField])}
								</Chip>
							))}

						{multiple && selectedOptions.length > 2 && (
							<Chip key="clear-all" onClick={handleClearAll} color="danger">
								حذف همه
							</Chip>
						)}
					</div>

					<input
						id="autocomplete-input"
						ref={inputRef}
						type="text"
						autoComplete="off"
						value={inputValue}
						onFocus={handleFocus}
						//disabled={disabled}
						readOnly={readOnly}
						onChange={(e) => {
							if (disabled || readOnly) return;
							setInputValue(e.target.value);
							if (!multiple) setSelectedOption(null);
							setMenuOpen(true);
						}}
						placeholder={
							((!multiple && placeholder) || (multiple && !selectedOptions.length && placeholder)) as string | undefined
						}
						dir="rtl"
						className={clsx(
							"flex-1 min-w-[60px] border-0 outline-none bg-transparent",
							{ "bg-background-secondary": variant === "primary" },
							{ "bg-background-primary": variant === "secondary" },
							{ "mr-5": startAdornment && !selectedOptions.length },
						)}
						{...inputWrapperProps}
					/>
				</div>

				{inputValue && !loading && !disabled && !readOnly && (
					<X
						onClick={handleClear}
						className={clsx(
							"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600 p-1 transition cursor-pointer hover:bg-gray-300 rounded-full",
							{ "left-10": isDropDown },
						)}
						size={22}
					/>
				)}

				{loading && (
					<div className={clsx("absolute left-3 top-1/2 -translate-y-1/2", { "left-10": isDropDown })}>
						<CircularProgress size="xs" />
					</div>
				)}
				{isDropDown && (
					<div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center pointer-events-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
							<title>x</title>
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
			<div className={!inputValue && !multiple ? "hidden" : ""}>
				<Menu anchor={containerRef.current} open={menuOpen} onClose={handleCloseMenu}>
					<div
						dir="rtl"
						className="overflow-y-auto"
						style={{
							width: containerRef.current?.offsetWidth ? containerRef.current.offsetWidth - 10 : "100%",
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
								const isSelected = !multiple && selectedOption && String((selectedOption as any)[idField]) === id;
								const isDisabled = !multiple && isSelected;

								return (
									<Menu.Item
										id={`autocomplete-item-${id}`}
										key={id}
										dir="rtl"
										aria-disabled={isDisabled ? "true" : "false"} //  تبدیل به Booleanish
										tabIndex={isDisabled ? -1 : 0} //  جلوگیری از فوکوس روی آیتم غیرفعال
										className={clsx("vazirmatn text-base sm:text-sm rounded p-1 mt-1 mb-1", {
											// حالت غیرفعال
											"!text-gray-500 !bg-gray-200 !cursor-not-allowed opacity-60": isDisabled,

											// حالت hover و کلیک‌پذیر
											"cursor-pointer hover:bg-gray-100": !isDisabled,

											// حالت انتخاب‌شده
											"bg-gray-200": isSelected,
										})}
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											if (isDisabled) return; //  جلوگیری از کلیک روی آیتم غیرفعال
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
		</div>
	);
}
