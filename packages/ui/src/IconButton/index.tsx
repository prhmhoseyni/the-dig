import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";

const colors = {
    brand: {
        contained: "text-prose-inverse bg-brand hover:bg-brand-hover active:bg-brand-active active:shadow-focus-brand",
        tinted: "text-brand bg-brand-light hover:bg-brand-light-hover active:bg-brand-light-active active:shadow-focus-brand",
        outlined:
            "text-brand hover:text-brand-hover active:text-brand-active border border-brand hover:border-brand-hover active:border-brand-active active:shadow-focus-brand",
    },

    info: {
        contained: "text-prose-inverse bg-info hover:bg-info-hover active:bg-info-active active:shadow-focus-info",
        tinted: "text-info bg-info-light hover:bg-info-light-hover active:bg-info-light-active active:shadow-focus-info",
        outlined:
            "text-info hover:text-info-hover active:text-info-active border border-info hover:border-info-hover active:border-info-active active:shadow-focus-info",
    },

    success: {
        contained: "text-prose-inverse bg-success hover:bg-success-hover active:bg-success-active active:shadow-focus-success",
        tinted: "text-success bg-success-light hover:bg-success-light-hover active:bg-success-light-active active:shadow-focus-success",
        outlined:
            "text-success hover:text-success-hover active:text-success-active border border-success hover:border-success-hover active:border-success-active active:shadow-focus-success",
    },

    warning: {
        contained: "text-prose-inverse bg-warning hover:bg-warning-hover active:bg-warning-active active:shadow-focus-warning",
        tinted: "text-warning bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-active active:shadow-focus-warning",
        outlined:
            "text-warning hover:text-warning-hover active:text-warning-active border border-warning hover:border-warning-hover active:border-warning-active active:shadow-focus-warning",
    },

    danger: {
        contained: "text-prose-inverse bg-danger hover:bg-danger-hover active:bg-danger-active active:shadow-focus-danger",
        tinted: "text-danger bg-danger-light hover:bg-danger-light-hover active:bg-danger-light-active active:shadow-focus-danger",
        outlined:
            "text-danger hover:text-danger-hover active:text-danger-active border border-danger hover:border-danger-hover active:border-danger-active active:shadow-focus-danger",
    },

    gray: {
        contained: "text-prose-inverse bg-gray hover:bg-gray-hover active:bg-gray-active active:shadow-focus-gray",
        tinted: "text-gray bg-gray-light hover:bg-gray-light-hover active:bg-gray-light-active active:shadow-focus-gray",
        outlined:
            "text-gray hover:text-gray-hover active:text-gray-active border border-gray hover:border-gray-hover active:border-gray-active active:shadow-focus-gray",
    },
};

const sizes = {
    xs: "h-[2rem] min-w-[2rem] w-[2rem] text-subtitle5",
    sm: "h-[2.25rem] min-w-[2.25rem] w-[2.25rem] text-subtitle5",
    md: "h-[2.5rem] min-w-[2.5rem] w-[2.5rem] text-subtitle5",
    lg: "h-[2.75rem] min-w-[2.75rem] w-[2.75rem] text-subtitle4",
    xl: "h-[3rem] min-w-[3rem] w-[3rem] text-subtitle3",
};

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: "contained" | "tinted" | "outlined";
    color?: "brand" | "info" | "success" | "warning" | "danger" | "gray";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
}

export default function IconButton(props: Props) {
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
                "cursor-pointer inline-flex items-center justify-center gap-1 rounded-lg transition-all ease-in-out duration-300",
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
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
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
