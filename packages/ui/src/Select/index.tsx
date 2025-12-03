import clsx from "clsx";
import {
  memo,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  type Ref,
  useCallback,
} from "react";
import Chip from "../Chip";
import Menu from "../Menu";
import styles from "./index.module.css";

const sizeClasses: Record<string, string> = {
  xs: "min-h-8 text-sm px-2",
  sm: "min-h-10 text-sm px-3",
  md: "min-h-12 text-base px-3",
  lg: "min-h-14 text-lg px-4",
  xl: "min-h-16 text-lg px-4",
};
export type SelectVariant = "primary" | "secondary";
export type DisabledType = { disabled?: boolean };

type SelectValue<T> = T | T[] | string | number | boolean | (string | number | boolean)[] | null;

export interface SelectListProps<T> {
  options: Array<T & DisabledType>;
  onChange?: (option: T | T[] | null) => void;
  value?: SelectValue<T>;
  defaultValue?: SelectValue<T>;
  multiple?: boolean;
  hasError?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: number | string;
  idField?: keyof T;
  labelField?: keyof T;
  variant?: SelectVariant;
  startAdornment?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  maxDropdownHeight?: number;
  className?: string;
  name?: string;
  renderOption?: (option: T, isSelected: boolean) => ReactNode;
  id?: string;
}

export interface SelectListRef<T = any> {
  getValue: () => any;
  setValue: (value: SelectValue<T>) => void;
  clearValue: () => void;
  focus: () => void;
  blur: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

function SelectListInner<T extends object>(props: SelectListProps<T>, ref: Ref<SelectListRef<T>>) {
  const {
    options: localOptions,
    onChange,
    value,
    defaultValue = null,
    multiple = false,
    hasError = false,
    size = "md",
    width = "100%",
    idField = "id" as keyof T,
    labelField = "label" as keyof T,
    variant = "primary",
    startAdornment,
    disabled = false,
    readOnly = false,
    placeholder = "انتخاب کنید",
    maxDropdownHeight = 200,
    className = "",
    name,
    renderOption,
    id: componentId,
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedList, setSelectedList] = useState<T[]>([]);
  const [isControlled] = useState(value !== undefined);
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const MemoChip = memo(Chip);

  // تابع کمکی برای تبدیل مقدار به آیتم‌ها
  const convertToItems = useCallback(
    (val: SelectValue<T>): T[] => {
      if (!val && val !== false) return []; // false مجاز است

      if (multiple) {
        // حالت multiple
        const values = Array.isArray(val) ? val : [val];
        const items: T[] = [];

        values.forEach((v) => {
          if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
            // جستجو بر اساس idField
            const found = localOptions.find((option) => String(option[idField]) === String(v));
            if (found) items.push(found);
          } else if (typeof v === "object" && v !== null) {
            // اگر آبجکت بود، مستقیماً اضافه کن
            items.push(v as T);
          }
        });

        return items;
      } else {
        // حالت single
        if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
          // جستجو بر اساس idField
          const found = localOptions.find((option) => String(option[idField]) === String(val));
          return found ? [found] : [];
        } else if (Array.isArray(val)) {
          // اگر آرایه بود، اولین آیتم را بررسی کن
          if (val.length === 0) return [];
          const first = val[0];
          if (typeof first === "string" || typeof first === "number" || typeof first === "boolean") {
            const found = localOptions.find((option) => String(option[idField]) === String(first));
            return found ? [found] : [];
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
    [localOptions, idField, multiple],
  );

  // مقداردهی اولیه بر اساس defaultValue (حالت غیرکنترل شده)
  useEffect(() => {
    if (isControlled || isInitialized) return;

    if (defaultValue !== null && defaultValue !== undefined) {
      const items = convertToItems(defaultValue);
      setSelectedList(items);
    }
    setIsInitialized(true);
  }, [defaultValue, isControlled, isInitialized, convertToItems]);

  // سینک با value (حالت کنترل شده)
  useEffect(() => {
    if (!isControlled) return;

    const items = convertToItems(value || null);
    setSelectedList(items);
  }, [value, isControlled, convertToItems]);

  const selectedIds = useMemo(() => new Set(selectedList.map((o) => String(o[idField]))), [selectedList, idField]);

  /**
   * label selected value
   */
  const displayLabel = useMemo(() => {
    if (multiple) return "";
    if (selectedList.length === 0) return "";
    return String(selectedList[0]?.[labelField] ?? "");
  }, [multiple, selectedList, labelField]);

  const handleOpenMenu = () => {
    if (disabled || readOnly) return;
    setMenuOpen(true);
  };

  /**
   * close drop down
   */
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // ایجاد ref برای دسترسی از خارج
  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (multiple) {
        return selectedList.length > 0 ? selectedList : null;
      }
      return selectedList.length > 0 ? selectedList[0] : null;
    },
    setValue: (newValue: SelectValue<T>) => {
      if (isControlled) {
        return;
      }
      const items = convertToItems(newValue);
      setSelectedList(items);
      onChange?.(multiple ? items : items[0] || null);
    },
    clearValue: () => {
      if (isControlled) {
        return;
      }
      setSelectedList([]);
      onChange?.(null);
    },
    focus: () => {
      buttonRef.current?.focus();
      // باز کردن منو وقتی فوکوس می‌کنیم
      handleOpenMenu();
    },
    blur: () => {
      buttonRef.current?.blur();
      // بستن منو وقتی بلور می‌کنیم
      handleCloseMenu();
    },
    openMenu: () => {
      handleOpenMenu();
    },
    closeMenu: () => {
      handleCloseMenu();
    },
  }));

  /**
   * select items drop down
   */
  const handleSelect = (option: T & DisabledType) => {
    if (disabled || readOnly) return;
    if (option.disabled) return;

    let updated: T[];

    if (multiple) {
      if (selectedIds.has(String(option[idField]))) return;
      updated = [...selectedList, option];
    } else {
      updated = [option];
    }

    // حالت کنترل شده
    if (isControlled) {
      onChange?.(multiple ? updated : option);
      if (!multiple) {
        setMenuOpen(false);
      }
      return;
    }

    // حالت غیرکنترل شده
    setSelectedList(updated);
    onChange?.(multiple ? updated : option);
    if (!multiple) {
      setMenuOpen(false);
    }
  };

  /**
   * remove chip in multiple select
   */
  const handleRemoveChip = (option: T) => {
    if (disabled || readOnly) return;

    const updated = selectedList.filter((o) => String(o[idField]) !== String(option[idField]));

    // حالت کنترل شده
    if (isControlled) {
      onChange?.(updated.length ? updated : null);
      return;
    }

    // حالت غیرکنترل شده
    setSelectedList(updated);
    onChange?.(updated.length ? updated : null);
  };

  /**
   * remove all selected chip
   */
  const handleClearAll = () => {
    if (disabled || readOnly) return;

    // حالت کنترل شده
    if (isControlled) {
      onChange?.(null);
      return;
    }

    // حالت غیرکنترل شده
    setSelectedList([]);
    onChange?.(null);
  };

  /**
   * hidden input and set name
   */
  const getHiddenInputValue = (): string => {
    if (multiple) {
      return selectedList
        .map((item) => {
          const fieldValue = item[idField];
          return fieldValue !== undefined && fieldValue !== null ? String(fieldValue) : "";
        })
        .filter(Boolean)
        .join(",");
    } else {
      if (selectedList.length === 0 || !selectedList[0]) {
        return "";
      }
      const fieldValue = selectedList[0][idField];
      return fieldValue !== undefined && fieldValue !== null ? String(fieldValue) : "";
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start" style={{ width }}>
      {/* فیلد مخفی برای فرم‌ها */}
      {name && <input type="hidden" name={name} value={getHiddenInputValue()} />}

      <div ref={containerRef} className="relative w-full">
        <button
          ref={buttonRef}
          type="button"
          id={componentId}
          className={clsx(
            "w-full flex flex-wrap items-center gap-1 border rounded-lg transition-all ease-in-out duration-300 p-2",
            sizeClasses[size],
            className,
            {
              "border-gray-400 bg-gray-100 text-gray-400 cursor-not-allowed": disabled,
              "border-gray-400 bg-gray-50 text-gray-500 cursor-default": readOnly,
              "text-prose-primary border-gray-400": !hasError && !disabled && !readOnly,
              "!border-danger": hasError && !disabled && !readOnly,
              "shadow-focus-danger": hasError && menuOpen,
              "!border-brand shadow-focus-brand": menuOpen && !hasError && !disabled && !readOnly,
              "bg-background-secondary": variant === "primary",
              "bg-background-primary": variant === "secondary",
            },
          )}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpenMenu();
            }
          }}
          onClick={handleOpenMenu}
          disabled={disabled}
        >
          {startAdornment && (
            <div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">{startAdornment}</div>
          )}

          <div className={clsx("flex flex-wrap items-center gap-1", { "mr-6": startAdornment })}>
            {multiple &&
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

            {((multiple && !selectedList.length) || !multiple) && (
              <span
                className={clsx("truncate text-gray-700 text-sm", {
                  "text-gray-400": !displayLabel,
                })}
              >
                {displayLabel || placeholder}
              </span>
            )}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <title>dropdown</title>
              <path
                d="M16 10L12 14L8 10"
                stroke="rgb(var(--dig-prose-hint))"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* منو */}
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
          {localOptions.map((option) => {
            const id = String(option[idField]);
            const isSelected = selectedIds.has(id);
            const isDisabled = option.disabled;

            return (
              <Menu.Item
                id={`selectlist-item-${id}`}
                key={id}
                dir="rtl"
                aria-disabled={isDisabled ? "true" : "false"}
                tabIndex={isDisabled ? -1 : 0}
                className={clsx(
                  "vazirmatn text-base sm:text-sm rounded p-1",
                  styles["select-item"],
                  isDisabled && !renderOption && styles["cursor-not-allowed"],
                  isDisabled && !renderOption && styles["gray-color"],
                  !isDisabled && "cursor-pointer hover:bg-gray-100",
                  isSelected && !renderOption && styles["bg-gray-200"],
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isDisabled || (isSelected && multiple)) return;
                  handleSelect(option);
                }}
              >
                {renderOption ? renderOption(option, isSelected) : String(option[labelField])}
              </Menu.Item>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}

// استفاده از forwardRef برای پشتیبانی از ref
const SelectList = forwardRef(SelectListInner) as <T extends object>(
  props: SelectListProps<T> & { ref?: Ref<SelectListRef<T>> },
) => React.ReactElement;

export default SelectList;
