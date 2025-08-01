import { type HTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";

const colors = {
  brand: {
    contained: "text-prose-inverse bg-brand",
    tinted: "text-brand bg-brand-light",
  },

  info: {
    contained: "text-prose-inverse bg-info",
    tinted: "text-info bg-info-light",
  },

  success: {
    contained: "text-prose-inverse bg-success",
    tinted: "text-success bg-success-light",
  },

  warning: {
    contained: "text-prose-inverse bg-warning",
    tinted: "text-warning bg-warning-light",
  },

  danger: {
    contained: "text-prose-inverse bg-danger",
    tinted: "text-danger bg-danger-light",
  },

  gray: {
    contained: "text-prose-inverse bg-gray",
    tinted: "text-gray bg-gray-light",
  },
};

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: "contained" | "tinted";
  color?: "brand" | "info" | "success" | "warning" | "danger" | "gray";
}

export default function Badge(props: Props) {
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
