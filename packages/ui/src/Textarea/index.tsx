import { type DetailedHTMLProps, type ReactNode, type TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  variant?: "primary" | "secondary";
  hasError?: boolean;
  startAdornment?: ReactNode;
}

export default function Textarea(props: Props) {
  const { variant = "primary", hasError = false, startAdornment, className = "", ...rest } = props;

  return (
    <div className="w-full relative">
      <textarea
        className={clsx(
          "w-full resize-none min-h-12 text-label2 text-prose-primary border border-gray-400 outline-0 p-2 rounded-lg placeholder:text-prose-hint transition-all ease-in-out duration-300",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "focus:border-brand focus:shadow-focus-brand",
          { "bg-background-secondary": variant === "primary" },
          { "bg-background-primary": variant === "secondary" },
          { "!border-danger focus:!border-danger focus:!shadow-focus-danger": hasError },
          { "!ps-8": startAdornment },
          className,
        )}
        {...rest}
      />

      {startAdornment && <div className="absolute top-3 start-2">{startAdornment}</div>}
    </div>
  );
}
