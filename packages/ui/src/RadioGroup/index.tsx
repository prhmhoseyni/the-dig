import { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export default function RadioGroup(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  const { className = "", ...rest } = props;

  return <input type="radio" className={clsx(styles["radio"], className)} {...rest} />;
}
