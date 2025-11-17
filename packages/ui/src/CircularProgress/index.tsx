import clsx from "clsx";
import styles from "./index.module.css";

const colors = {
  brand: "border-brand-light border-t-brand",
  info: "border-info-light border-t-info",
  success: "border-success-light border-t-success",
  warning: "border-warning-light border-t-warning",
  danger: "border-danger-light border-t-danger",
  gray: "border-gray-light border-t-gray",
};

const sizes = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

/**
 * :::: types :::
 */
export type CircularProgressSize = "xs" | "sm" | "md" | "lg" | "xl";
export type CircularProgressColor = "brand" | "info" | "success" | "warning" | "danger" | "gray";

/**
 * @name CircularProgress component
 */
export interface CircularProgressProps {
  size?: CircularProgressSize;
  color?: CircularProgressColor;
  className?: string;
}

export default function CircularProgress(props: CircularProgressProps) {
  const { size = "md", color = "brand", className = "" } = props;

  return (
    <div
      className={clsx("rounded-full border-3 border-solid", className, colors[color], sizes[size], styles["animate-spin"])}
    ></div>
  );
}
