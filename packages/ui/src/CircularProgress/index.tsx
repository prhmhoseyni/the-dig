import React from "react";
import styles from "./index.module.css";

// Define the available sizes
type CircularProgressSize = "xs" | "sm" | "md" | "lg";

// Define the props interface
interface CircularProgressProps {
  size?: CircularProgressSize;
  color?: "brand" | "info" | "success" | "warning" | "danger" | "gray";
}

const colors = {
  brand: "border-brand-light border-t-brand",
  info: "border-info-light border-t-info",
  success: "border-success-light border-t-success",
  warning: "border-warning-light border-t-warning",
  danger: "border-danger-light border-t-danger",
  gray: "border-gray-light border-t-gray",
};

// Map sizes to Tailwind CSS utility classes
const sizes = {
  xs: { sizeClass: "w-5 h-5", borderClass: "border-3" },
  sm: { sizeClass: "w-6 h-6", borderClass: "border-3" },
  md: { sizeClass: "w-10 h-10", borderClass: "border-3" },
  lg: { sizeClass: "w-12 h-12", borderClass: "border-3" },
};

const CircularProgress: React.FC<CircularProgressProps> = ({ size = "sm", color = "brand" }) => {
  const { sizeClass, borderClass } = sizes[size];

  return (
    <div
      className={`rounded-full border-solid ${styles["animate-spin"]} ${sizeClass} ${borderClass} ${colors[color]}`}
    ></div>
  );
};

export default CircularProgress;
