import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const colors = {
  brand: {
    contained:
      "text-prose-inverse bg-brand hover:bg-brand-hover active:bg-brand-active active:shadow-focus-brand",
    tinted:
      "text-prose-brand bg-brand-light hover:bg-brand-light-hover active:bg-brand-light-active active:shadow-focus-brand",
    outlined:
      "text-prose-brand border border-brand hover:border-brand-hover active:border-brand-active active:shadow-focus-brand",
  },

  info: {
    contained:
      "text-prose-inverse bg-info hover:bg-info-hover active:bg-info-active active:shadow-focus-info",
    tinted:
      "text-prose-info bg-info-light hover:bg-info-light-hover active:bg-info-light-active active:shadow-focus-info",
    outlined:
      "text-prose-info border border-info hover:border-info-hover active:border-info-active active:shadow-focus-info",
  },

  success: {
    contained:
      "text-prose-inverse bg-success hover:bg-success-hover active:bg-success-active active:shadow-focus-success",
    tinted:
      "text-prose-success bg-success-light hover:bg-success-light-hover active:bg-success-light-active active:shadow-focus-success",
    outlined:
      "text-prose-success border border-success hover:border-success-hover active:border-success-active active:shadow-focus-success",
  },

  warning: {
    contained:
      "text-prose-inverse bg-warning hover:bg-warning-hover active:bg-warning-active active:shadow-focus-warning",
    tinted:
      "text-prose-warning bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-active active:shadow-focus-warning",
    outlined:
      "text-prose-warning border border-warning hover:border-warning-hover active:border-warning-active active:shadow-focus-warning",
  },

  danger: {
    contained:
      "text-prose-inverse bg-danger hover:bg-danger-hover active:bg-danger-active active:shadow-focus-danger",
    tinted:
      "text-prose-danger bg-danger-light hover:bg-danger-light-hover active:bg-danger-light-active active:shadow-focus-danger",
    outlined:
      "text-prose-danger border border-danger hover:border-danger-hover active:border-danger-active active:shadow-focus-danger",
  },

  gray: {
    contained:
      "text-prose-inverse bg-gray hover:bg-gray-hover active:bg-gray-active active:shadow-focus-gray",
    tinted:
      "text-prose-gray bg-gray-light hover:bg-gray-light-hover active:bg-gray-light-active active:shadow-focus-gray",
    outlined:
      "text-prose-gray border border-gray hover:border-gray-hover active:border-gray-active active:shadow-focus-gray",
  },
};

const sizes = {
  xs: "px-[0.75rem] h-[2rem] text-subtitle5",
  sm: "px-[0.75rem] h-[2.25rem] text-subtitle5",
  md: "px-[0.75rem] h-[2.5rem] text-subtitle5",
  lg: "px-[1rem] h-[2.75rem] text-subtitle4",
  xl: "px-[1rem] h-[3rem] text-subtitle3",
};

/**
 * :::: types ::::
 */
export type ButtonVariant = "contained" | "tinted" | "outlined";
export type ButtonColor =
  | "brand"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "gray";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * @name Button component
 */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    variant = "contained",
    color = "brand",
    size = "md",
    className = "",
    isLoading = false,
    disabled = false,
    children,
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        "cursor-pointer inline-flex items-center justify-center gap-1 rounded-lg min-w-fit transition-all ease-in-out duration-300",
        "disabled:cursor-not-allowed disabled:opacity-40",
        colors[color][variant],
        sizes[size],
        className,
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (
        <svg
          className="size-5 animate-spin text-prose-inverse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <title>button</title>
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
}
