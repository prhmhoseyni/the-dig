import { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Checkbox(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  const { className = "", ...rest } = props;

  return <input type="checkbox" className={clsx(styles["checkbox"], className)} {...rest} />;
}
