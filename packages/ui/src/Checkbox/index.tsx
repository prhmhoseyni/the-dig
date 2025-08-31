import { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

/**
 * @name Checkbox component
 */
export type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Checkbox(props: CheckboxProps) {
  const { className = "", ...rest } = props;

  return (
    <input
      type="checkbox"
      className={clsx(styles["checkbox"], className)}
      {...rest}
    />
  );
}
