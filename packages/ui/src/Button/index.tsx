import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import CircularProgress from "../CircularProgress";

const colors = {
  brand: {
    contained: "text-prose-inverse bg-brand border-0 hover:bg-brand-hover active:bg-brand-active active:shadow-focus-brand",
    tinted:
      "border-0 text-prose-brand bg-brand-light hover:bg-brand-light-hover active:bg-brand-light-active active:shadow-focus-brand",
    outlined:
      "bg-transparent text-prose-brand border border-brand hover:border-brand-hover active:border-brand-active active:shadow-focus-brand",
  },
  info: {
    contained: "text-prose-inverse bg-info border-0 hover:bg-info-hover active:bg-info-active active:shadow-focus-info",
    tinted:
      "border-0 text-prose-info bg-info-light hover:bg-info-light-hover active:bg-info-light-active active:shadow-focus-info",
    outlined:
      "bg-transparent text-prose-info border border-info hover:border-info-hover active:border-info-active active:shadow-focus-info",
  },
  success: {
    contained:
      "text-prose-inverse bg-success border-0 hover:bg-success-hover active:bg-success-active active:shadow-focus-success",
    tinted:
      "border-0 text-prose-success bg-success-light hover:bg-success-light-hover active:bg-success-light-active active:shadow-focus-success",
    outlined:
      "bg-transparent text-prose-success border border-success hover:border-success-hover active:border-success-active active:shadow-focus-success",
  },
  warning: {
    contained:
      "text-prose-inverse bg-warning border-0 hover:bg-warning-hover active:bg-warning-active active:shadow-focus-warning",
    tinted:
      "border-0 text-prose-warning bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-active active:shadow-focus-warning",
    outlined:
      "bg-transparent text-prose-warning border border-warning hover:border-warning-hover active:border-warning-active active:shadow-focus-warning",
  },
  danger: {
    contained: "text-prose-inverse bg-danger border-0 hover:bg-danger-hover active:bg-danger-active active:shadow-focus-danger",
    tinted:
      "border-0 text-prose-danger bg-danger-light hover:bg-danger-light-hover active:bg-danger-light-active active:shadow-focus-danger",
    outlined:
      "bg-transparent text-prose-danger border border-danger hover:border-danger-hover active:border-danger-active active:shadow-focus-danger",
  },
  gray: {
    contained: "text-prose-inverse bg-gray border-0 hover:bg-gray-hover active:bg-gray-active active:shadow-focus-gray",
    tinted:
      "border-0 text-prose-gray bg-gray-light hover:bg-gray-light-hover active:bg-gray-light-active active:shadow-focus-gray",
    outlined:
      "bg-transparent text-prose-gray border border-gray hover:border-gray-hover active:border-gray-active active:shadow-focus-gray",
  },
};

const sizes = {
  xs: "px-[0.75rem] h-[2rem] text-subtitle5",
  sm: "px-[0.75rem] h-[2.25rem] text-subtitle5",
  md: "px-[0.75rem] h-[2.5rem] text-subtitle5",
  lg: "px-[1rem] h-[2.75rem] text-subtitle4",
  xl: "px-[1rem] h-[3rem] text-subtitle3",
};

export type ButtonVariant = "contained" | "tinted" | "outlined";
export type ButtonColor = "brand" | "info" | "success" | "warning" | "danger" | "gray";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loadingIndicator?: string;
  loadingPosition?: "start" | "end";
  isShowAdornmentLoading?: boolean;
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
    startIcon,
    endIcon,
    loadingIndicator = null,
    loadingPosition = null,
    isShowAdornmentLoading = false,
    ...rest
  } = props;

  const renderContent = () => {
    if (isLoading) {
      const loader = loadingIndicator ? <span>{loadingIndicator}</span> : <CircularProgress color="gray" size="xs" />;

      if (loadingPosition === "start") {
        return (
          <>
            {loader}
            {isShowAdornmentLoading && startIcon && <span className="mr-1 mt-1">{startIcon}</span>}
            {!loadingIndicator && <span>{children}</span>}
          </>
        );
      }

      if (loadingPosition === "end") {
        return (
          <>
            {!loadingIndicator && <span>{children}</span>}
            {isShowAdornmentLoading && endIcon && <span className="mr-1 mt-1">{endIcon}</span>}
            {loader}
          </>
        );
      }

      return loader;
    }

    return (
      <>
        {startIcon && <span className="mr-1 mt-1">{startIcon}</span>}
        {children}
        {endIcon && <span className="ml-1 mt-1">{endIcon}</span>}
      </>
    );
  };
  const loadingStyle = variant === "outlined" ? "border border-gray-600 text-gray-700" : "bg-gray-400 text-gray-700 border-0";

  return (
    <button
      className={clsx(
        "cursor-pointer inline-flex items-center justify-center gap-1 rounded-lg transition-all ease-in-out duration-300  !min-w-28",
        "disabled:cursor-not-allowed disabled:opacity-40",
        !isLoading ? colors[color][variant] : loadingStyle,
        sizes[size],
        className,
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {renderContent()}
    </button>
  );
}
