import clsx from "clsx";
import { X } from "lucide-react";
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState, useImperativeHandle } from "react";
import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

import Chip from "../Chip";
import CircularProgress from "../CircularProgress";
import Menu from "../Menu";

const sizeClasses: Record<string, string> = {
  xs: "min-h-8 text-sm px-2",
  sm: "min-h-10 text-sm px-3",
  md: "min-h-12 text-base px-3",
  lg: "min-h-14 text-lg px-4",
  xl: "min-h-16 text-lg px-4",
};

/**
 * :::: types :::
 */
export type SelectVariant = "primary" | "secondary";
export type DisabledType = { disabled?: boolean };

type AutocompleteValue<T> = T | T[] | string | number | boolean | (string | number | boolean)[] | null;

export interface AutocompleteProps<T> {
  /** شناسه منحصر به فرد کامپوننت */
  id?: string;
  options?: Array<T & DisabledType>;
  fetchOptions?: (query: string) => Promise<T[]>;
  debounceDelay?: number;
  onChange?: (option: T | T[] | null) => void;
  maxDropdownHeight?: number;
  notFoundText?: string;
  isDropDown?: boolean;
  searchingText?: string;
  minSearchChars?: number;
  defaultValue?: AutocompleteValue<T>;
  value?: AutocompleteValue<T>;
  multiple?: boolean;
  hasError?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: number | string;
  renderOption?: (option: T, isSelected: boolean) => ReactNode;
  idField?: keyof T;
  labelField?: keyof T;
  variant?: SelectVariant;
  startAdornment?: ReactNode;
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  className?: string;
  name?: string;
}

export interface AutocompleteRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getSelectedValue: () => any;
}

const Autocomplete = forwardRef<AutocompleteRef, AutocompleteProps<any>>(
  <T extends object>(props: AutocompleteProps<T>, ref: React.ForwardedRef<AutocompleteRef>) => {
    const {
      id: componentId,
      options: localOptions,
      fetchOptions,
      debounceDelay = 500,
      onChange,
      maxDropdownHeight = 200,
      notFoundText = "موردی یافت نشد",
      isDropDown = true,
      searchingText = "در حال جستجو...",
      minSearchChars = 3,
      defaultValue = null,
      value,
      multiple = false,
      hasError = false,
      size = "md",
      width = "100%",
      renderOption,
      idField = "id" as keyof T,
      labelField = "label" as keyof T,
      variant = "primary",
      startAdornment,
      inputProps = {},
      className = "",
      name,
    } = props;

    // حالت کنترل شده یا غیرکنترل شده
    const isControlled = value !== undefined;

    const disabled = inputProps.disabled ?? false;
    const readOnly = inputProps.readOnly ?? false;
    const placeholder = inputProps.placeholder ?? "جستجو کنید...";

    const [menuOpen, setMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState<(T & DisabledType)[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedList, setSelectedList] = useState<T[]>([]);
    const [searchDone, setSearchDone] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);

    const [lastResults, setLastResults] = useState<(T & DisabledType)[]>([]);

    const isSelectingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchTimeoutRef = useRef<number | null>(null);

    const selectedIds = useMemo(() => new Set(selectedList.map((o) => String(o[idField]))), [selectedList, idField]);
    const MemoChip = memo(Chip);

    // تابع کمکی برای تبدیل مقدار به آیتم‌ها (فقط برای حالت محلی)
    const convertToItems = useCallback(
      (val: AutocompleteValue<T>): T[] => {
        if (!val && val !== false) return []; // false مجاز است

        // اگر fetchOptions فعال است، فقط آبجکت قبول کند
        if (fetchOptions) {
          if (!val) return [];
          if (Array.isArray(val)) {
            return val.filter((v): v is T => typeof v === "object" && v !== null);
          } else if (typeof val === "object" && val !== null) {
            return [val as T];
          }
          return [];
        }

        // حالت محلی: پشتیبانی از string, number, boolean
        if (multiple) {
          // حالت multiple
          const values = Array.isArray(val) ? val : [val];
          const items: T[] = [];

          values.forEach((v) => {
            if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
              // جستجو بر اساس idField در options محلی
              if (localOptions) {
                const found = localOptions.find((option) => String(option[idField]) === String(v));
                if (found) items.push(found);
              }
            } else if (typeof v === "object" && v !== null) {
              // اگر آبجکت بود، مستقیماً اضافه کن
              items.push(v as T);
            }
          });

          return items;
        } else {
          // حالت single
          if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
            // جستجو بر اساس idField در options محلی
            if (localOptions) {
              const found = localOptions.find((option) => String(option[idField]) === String(val));
              return found ? [found] : [];
            }
            return [];
          } else if (Array.isArray(val)) {
            // اگر آرایه بود، اولین آیتم را بررسی کن
            if (val.length === 0) return [];
            const first = val[0];
            if (typeof first === "string" || typeof first === "number" || typeof first === "boolean") {
              if (localOptions) {
                const found = localOptions.find((option) => String(option[idField]) === String(first));
                return found ? [found] : [];
              }
              return [];
            } else {
              return [first as T];
            }
          } else if (val && typeof val === "object") {
            // اگر آبجکت بود
            return [val as T];
          }
          return [];
        }
      },
      [localOptions, idField, multiple, fetchOptions],
    );

    // مقداردهی اولیه
    const initialized = useRef(false);

    // expose methods via ref
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
      clear: () => {
        handleClearAll();
      },
      getSelectedValue: () => {
        if (multiple) {
          return selectedList;
        }
        return selectedList.length > 0 ? selectedList[0] : null;
      },
    }));

    useEffect(() => {
      if (initialized.current) return;

      // مقداردهی اولیه برای هر دو حالت
      const initialValue = defaultValue || value;

      if (initialValue !== null && initialValue !== undefined) {
        const items = convertToItems(initialValue);
        setSelectedList(items);

        if (!multiple && items.length > 0) {
          const firstItem = items[0];
          setInputValue(String((firstItem as T)[labelField] ?? ""));
        }
      }

      initialized.current = true;
    }, [defaultValue, value, multiple, labelField, convertToItems]);

    // سینک کردن مقدار value خارجی با state داخلی برای حالت کنترل شده
    useEffect(() => {
      if (!isControlled) return;

      if (value === null || value === undefined) {
        setSelectedList([]);
        if (!multiple) {
          setInputValue("");
        }
      } else {
        const items = convertToItems(value);
        setSelectedList(items);

        if (!multiple && items.length > 0) {
          const firstItem = items[0];
          setInputValue(String((firstItem as T)[labelField] ?? ""));
        }
      }
    }, [value, isControlled, multiple, labelField, convertToItems]);

    const localMatches = useMemo(() => {
      if (!localOptions) return [];
      if (!inputValue) return localOptions;
      const q = inputValue.toLowerCase();
      return localOptions.filter((opt) => String(opt[labelField]).toLowerCase().includes(q));
    }, [localOptions, inputValue, labelField]);

    // استفاده از useCallback برای fetchOptions - بدون وابستگی به selectedList
    const performSearch = useCallback(
      async (query: string) => {
        if (!fetchOptions) return;

        setLoading(true);
        try {
          const res = await fetchOptions(query);
          setOptions((res ?? []) as (T & DisabledType)[]);
          setLastResults((res ?? []) as (T & DisabledType)[]);
          setSearchDone(true);
        } catch (err) {
          console.error("Autocomplete fetch error:", err);
          setOptions([]);
          setSearchDone(true);
        } finally {
          setLoading(false);
        }
      },
      [fetchOptions], // فقط وابستگی به fetchOptions
    );

    useEffect(() => {
      if (!localOptions) return;
      if (multiple) {
        const filtered = localMatches.filter((opt) => !selectedIds.has(String(opt[idField])));
        setOptions(filtered as (T & DisabledType)[]);
      } else if (selectedList.length > 0 && menuOpen) {
        setOptions(localOptions as (T & DisabledType)[]);
      } else {
        setOptions(localMatches as (T & DisabledType)[]);
      }
    }, [localMatches, localOptions, multiple, selectedIds, idField, menuOpen, selectedList]);

    // منطق سرچ برای fetchOptions
    useEffect(() => {
      if (!fetchOptions) return;

      // اگر کاربر با کامپوننت تعامل نداشته (مثلاً فقط مقدار پیشفرض دارد)، سرچ نکن
      if (!hasUserInteracted) {
        return;
      }

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

      // پاک کردن تایماوت قبلی
      if (searchTimeoutRef.current) {
        window.clearTimeout(searchTimeoutRef.current);
      }

      searchTimeoutRef.current = window.setTimeout(() => {
        performSearch(inputValue);
      }, debounceDelay);

      return () => {
        if (searchTimeoutRef.current) {
          window.clearTimeout(searchTimeoutRef.current);
        }
      };
    }, [inputValue, fetchOptions, debounceDelay, minSearchChars, localOptions, localMatches, hasUserInteracted, performSearch]);

    /**
     * focus input
     */
    const handleFocus = () => {
      if (!disabled && !readOnly) {
        if (!selectedList.length || inputValue.trim() === "") {
          setHasUserInteracted(true);
        }

        if ((options && options.length > 0) || (fetchOptions && options.length > 0)) {
          if (fetchOptions && lastResults.length > 0 && options.length === 0) {
            setOptions(lastResults.filter((opt) => !selectedList.some((sel) => String(sel[idField]) === String(opt[idField]))));
          }
          setMenuOpen(true);
        }
      }
    };

    /**
     * close menu drop down
     */
    const handleCloseMenu = () => {
      setMenuOpen(false);
      if (!multiple && selectedList.length === 0) {
        setInputValue("");
        if (!isControlled) {
          onChange?.(null);
        }
      } else if (!multiple && selectedList.length > 0) {
        const selected = selectedList[0];
        if (selected?.[labelField]) {
          setInputValue(String(selected[labelField]));
        }
      }
    };

    /**
     * select item dropdown
     */
    const handleSelect = (option: T & DisabledType) => {
      const updated = multiple ? [...selectedList, option] : [option];

      if (!isControlled) {
        setSelectedList(updated);
      }

      onChange?.(multiple ? updated : option);

      if (multiple) {
        if (localOptions) {
          // برای localOptions، آیتم انتخاب شده را از لیست حذف کن
          setOptions((opts) => opts.filter((o) => String(o[idField]) !== String(option[idField])));
        } else {
          // برای fetchOptions، لیست را فیلتر نکن و فقط منو را ببند
          setMenuOpen(false);
        }
        setInputValue("");
      } else {
        isSelectingRef.current = true;
        setInputValue(String(option[labelField]));
        setMenuOpen(false);
      }
    };

    /**
     * remove selected item
     */
    const handleRemoveChip = (option: T) => {
      if (disabled || readOnly) return;

      setInputValue("");
      const updated = selectedList.filter((o) => String(o[idField]) !== String(option[idField]));

      if (!isControlled) {
        setSelectedList(updated);
      }

      onChange?.(updated.length ? (multiple ? updated : updated[0] || null) : null);

      if (localOptions) {
        setOptions((opts) => [...opts, option as T & DisabledType]);
      }
    };

    /**
     *  clear selected
     */
    const handleClear = () => {
      if (disabled || readOnly) return;

      setInputValue("");
      setMenuOpen(false);
      setSearchDone(false);
      setLastResults([]);
      setHasUserInteracted(true);

      if (!multiple) {
        setSelectedList([]);
        onChange?.(null);
      }
    };

    /**
     * remove all selected item
     */
    const handleClearAll = () => {
      if (disabled || readOnly) return;

      if (!isControlled) {
        setSelectedList([]);
      }
      setInputValue("");
      setHasUserInteracted(true);

      if (localOptions) {
        setOptions(localOptions as (T & DisabledType)[]);
      } else {
        setOptions(lastResults);
      }

      onChange?.(null);
    };

    /**
     * handle input change
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;

      const newValue = e.target.value;
      setInputValue(newValue);
      setHasUserInteracted(true);

      if (!multiple && !isControlled) {
        setSelectedList([]);
      }
      setMenuOpen(true);
    };

    return (
      <div id={componentId} className="w-full flex flex-col justify-center items-start" style={{ width: width }}>
        <div ref={containerRef} className="relative w-full" style={{ position: "relative" }}>
          <div
            className={clsx(
              "flex flex-wrap items-center gap-1 border rounded-lg transition-all ease-in-out duration-300 p-2",
              sizeClasses[size],
              className,
              {
                // حالت غیرفعال
                "bg-gray-100 text-gray-400 cursor-not-allowed": disabled,

                // حالت فقط خواندنی
                "bg-gray-50 text-gray-500 cursor-default": readOnly,

                // حالت عادی
                "text-prose-primary border-gray-400 focus-within:border-brand focus-within:shadow-focus-brand":
                  !hasError && !disabled && !readOnly,

                // حالت ارور (box-shadow فقط موقع فوکوس)
                "!border-danger focus-within:!border-danger focus-within:!shadow-focus-danger":
                  hasError && !disabled && !readOnly,
                "bg-background-secondary": variant === "primary",
                "bg-background-primary": variant === "secondary",
              },
            )}
          >
            {startAdornment && (
              <div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">{startAdornment}</div>
            )}

            <div className={selectedList.length && startAdornment ? "mr-5" : ""}>
              {multiple &&
                selectedList.length > 0 &&
                selectedList.map(
                  (opt) =>
                    opt[labelField] && (
                      <MemoChip key={String(opt[idField])} onClick={() => handleRemoveChip(opt)} className="mr-1 mt-1">
                        {String(opt[labelField])}
                      </MemoChip>
                    ),
                )}

              {multiple && selectedList.length > 2 && (
                <MemoChip className="mr-1 mt-1" key="clear-all" onClick={handleClearAll} color="danger">
                  حذف همه
                </MemoChip>
              )}
            </div>

            <input
              id={`${componentId}-input`} // استفاده از id برای input
              ref={inputRef}
              type="text"
              autoComplete="off"
              value={inputValue}
              onFocus={handleFocus}
              readOnly={readOnly}
              onChange={handleInputChange}
              style={{ outline: "none !important", outlineStyle: "none !important" }}
              placeholder={!multiple || (multiple && !selectedList.length) ? placeholder : undefined}
              className={clsx(
                "flex-1 min-w-[60px] border-0 outline-none bg-transparent focus:outline-none",
                { "bg-background-secondary": variant === "primary" },
                { "bg-background-primary": variant === "secondary" },
                { "mr-5": startAdornment && !selectedList.length },
              )}
              name={name} // اضافه شدن name برای فرم‌ها
              {...inputProps}
            />
          </div>

          {inputValue && !loading && !disabled && !readOnly && (
            <X
              onClick={handleClear}
              className={clsx(
                "absolute end-3 top-1/2 mt-05  -translate-y-1/2 text-gray-500 hover:text-gray-600 p-1 transition cursor-pointer hover:bg-gray-300 rounded-full",
                { "end-10": isDropDown },
              )}
              size={22}
            />
          )}

          {loading && (
            <div className={clsx("absolute end-3 top-1/2 -translate-y-1/2", { "end-10": isDropDown })}>
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
          <div className={!inputValue && !multiple ? "hidden" : ""}></div>
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
                  const optionId = String(option[idField]);
                  const isSelected = !multiple && selectedIds.has(optionId);
                  const isDisabled = !multiple && isSelected;

                  return (
                    <Menu.Item
                      id={`${componentId}-item-${optionId}`} // استفاده از id برای آیتم‌های منو
                      key={`${optionId}__${option[labelField]}`}
                      dir="rtl"
                      aria-disabled={isDisabled ? "true" : "false"}
                      tabIndex={isDisabled ? -1 : 0}
                      className={clsx("vazirmatn text-base sm:text-sm rounded p-1 mt-1 mb-1", {
                        // حالت غیرفعال
                        "!text-gray-500 !bg-gray-200 !cursor-not-allowed opacity-60": isDisabled && !renderOption,

                        // حالت hover و کلیک‌پذیر
                        "cursor-pointer hover:bg-gray-100": !isDisabled,

                        // حالت انتخاب‌شده
                        "bg-gray-200": isSelected && !renderOption,
                      })}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (isDisabled) return;
                        handleSelect(option);
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
  },
);

export default Autocomplete;
