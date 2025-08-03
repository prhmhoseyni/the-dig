import clsx from "clsx";
import { memo, type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import styles from "./index.module.css";

const colors = {
  brand: "text-background-primary bg-gray-light-active checked:bg-brand",
  info: "text-background-primary bg-gray-light-active checked:bg-info",
  success: "text-background-primary bg-gray-light-active checked:bg-success",
  warning: "text-background-primary bg-gray-light-active checked:bg-warning",
  danger: "text-background-primary bg-gray-light-active checked:bg-danger",
  gray: "text-background-primary bg-gray-light-active checked:bg-gray",
};

const sizes = {
  sm: "w-8 h-5 p-1 rounded-xl",
  md: "w-10 h-6 p-1 rounded-2xl",
  lg: "w-14 h-8 p-1 rounded-3xl",
};

interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size"> {
  color?: "brand" | "info" | "success" | "warning" | "danger" | "gray";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Switch = (props: Props) => {
  const { color = "brand", size = "md", className = "", isLoading = false, disabled = false, ...rest } = props;

  if (isLoading) {
    return (
      <svg className="size-5 animate-spin text-brand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }

  return (
    <input
      type="checkbox"
      className={clsx(
        "disabled:cursor-not-allowed disabled:opacity-40",
        styles["switch"],
        colors[color],
        sizes[size],
        className,
      )}
      disabled={isLoading || disabled}
      {...rest}
    />
  );
};

export default memo(Switch);
