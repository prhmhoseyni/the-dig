import clsx from "clsx";
import styles from "./index.module.css";

const colors = {
  brand: "bg-brand",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

interface Props {
  value: number;
  color?: "brand" | "success" | "warning" | "danger";
}

export default function LinearProgress(props: Props) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
      <div
        className={clsx(
          "h-full rounded-full transition-all duration-500 ease-out",
          styles["progress-stripes"],
          colors[props.color ?? "brand"],
        )}
        style={{ width: `${props.value}%` }}
      />
    </div>
  );
}
