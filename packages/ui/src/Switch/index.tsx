import clsx from "clsx";
import { memo, type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import styles from "./index.module.css";

const colors = {
  brand: "text-background-primary bg-gray-400 checked:bg-brand",
  info: "text-background-primary bg-gray-400 checked:bg-info",
  success: "text-background-primary bg-gray-400 checked:bg-success",
  warning: "text-background-primary bg-gray-400 checked:bg-warning",
  danger: "text-background-primary bg-gray-400 checked:bg-danger",
  gray: "text-background-primary bg-gray-400 checked:bg-gray",
};

const sizes = {
  sm: "w-8 h-5 p-1 rounded-xl",
  md: "w-10 h-6 p-1 rounded-2xl",
  lg: "w-14 h-8 p-1 rounded-3xl",
};

interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size"> {
  color?: "brand" | "info" | "success" | "warning" | "danger" | "gray";
  size?: "sm" | "md" | "lg";
}

const Switch = (props: Props) => {
  const { color = "brand", size = "md", className = "", ...rest } = props;

  return (
    <input
      type="checkbox"
      className={clsx(
        "relative inline-grid shrink-0 cursor-pointer appearance-none place-content-center align-middle select-none",
        "disabled:cursor-not-allowed disabled:opacity-40",
        styles["switch"],
        colors[color],
        sizes[size],
        className,
      )}
      {...rest}
    />
  );
};

export default memo(Switch);
