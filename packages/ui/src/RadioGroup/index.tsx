import clsx from "clsx";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./index.module.css";

/**
 * @name RadioGroup component
 */
export type RadioGroupProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function RadioGroup(props: RadioGroupProps) {
  const { className = "", ...rest } = props;

  return <input type="radio" className={clsx(styles.radio, className)} {...rest} />;
}
