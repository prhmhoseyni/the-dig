import { type HTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";

const colors = {
  brand: {
    contained: "text-prose-inverse bg-brand",
    tinted: "text-prose-brand bg-brand-light",
  },

  info: {
    contained: "text-prose-inverse bg-info",
    tinted: "text-prose-info bg-info-light",
  },

  success: {
    contained: "text-prose-inverse bg-success",
    tinted: "text-prose-success bg-success-light",
  },

  warning: {
    contained: "text-prose-inverse bg-warning",
    tinted: "text-prose-warning bg-warning-light",
  },

  danger: {
    contained: "text-prose-inverse bg-danger",
    tinted: "text-prose-danger bg-danger-light",
  },

  gray: {
    contained: "text-prose-inverse bg-gray",
    tinted: "text-prose-gray bg-gray-light",
  },
};

/**
 * :::: types ::::
 */
export type BadgeColor = "brand" | "info" | "success" | "warning" | "danger" | "gray";
export type BadgeVariant = "contained" | "tinted";

/**
 * @name Badge component
 */
export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
}

export default function Badge(props: BadgeProps) {
  const { variant = "contained", color = "brand", className = "", children, ...rest } = props;

  return (
    <div
      className={clsx(
        "h-6 px-2 text-subtitle5 inline-flex items-center justify-center gap-1 rounded-full min-w-fit",
        colors[color][variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
