import { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

/**
 * @name RadioGroup component
 */
export type RadioGroupProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function RadioGroup(props: RadioGroupProps) {
  const { className = "", ...rest } = props;

  return <input type="radio" className={clsx(styles["radio"], className)} {...rest} />;
}
