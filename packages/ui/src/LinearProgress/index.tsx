import clsx from "clsx";
import styles from "./index.module.css";

const colors = {
  brand: "bg-brand",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

/**
 * :::: types :::
 */
export type LinearProgressColor = "brand" | "success" | "warning" | "danger";

/**
 * @name LinearProgress component
 */
export interface LinearProgressProps {
  value: number;
  color?: LinearProgressColor;
}

export default function LinearProgress(props: LinearProgressProps) {
  const { value, color = "brand" } = props;

  return (
    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
      <div
        className={clsx(
          "h-full rounded-full transition-all duration-500 ease-out",
          styles["progress-stripes"],
          colors[color],
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
