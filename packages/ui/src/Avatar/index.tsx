import { type PropsWithChildren } from "react";
import clsx from "clsx";

const online = {
  lg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="absolute inset-x-0 bottom-0"
    >
      <circle cx="7" cy="7" r="6" fill="#43A824" stroke="rgb(var(--dig-background-secondary))" strokeWidth="2" />
    </svg>
  ),
  md: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="absolute inset-x-0 bottom-0"
    >
      <circle cx="6" cy="6" r="5" fill="#43A824" stroke="rgb(var(--dig-background-secondary))" strokeWidth="2" />
    </svg>
  ),
  sm: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="absolute inset-x-0 bottom-0"
    >
      <circle cx="5" cy="5" r="4" fill="#43A824" stroke="rgb(var(--dig-background-secondary))" strokeWidth="2" />
    </svg>
  ),
  xs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className="absolute inset-x-0 bottom-0"
    >
      <circle cx="4.5" cy="4.5" r="3.5" fill="#43A824" stroke="rgb(var(--dig-background-secondary))" strokeWidth="2" />
    </svg>
  ),
};

const sizes = {
  lg: "min-w-16 w-16 min-h-16 h-16 text-subtitle1",
  md: "min-w-11 w-11 min-h-11 h-11 text-subtitle2",
  sm: "min-w-8 w-8 min-h-8 h-8 text-subtitle5",
  xs: "min-w-6 w-6 min-h-6 h-6 text-subtitle5",
};

interface Props extends PropsWithChildren {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  status?: "online";
}

export default function Avatar(props: Props) {
  const sizeClasses = sizes[props.size ?? "md"];
  const status = props.status ? online[props.size ?? "md"] : null;

  const commonClasses = "relative rounded-full inline-flex items-center justify-center bg-gray-400 border-2 border-background-primary";
  const avatarClasses = clsx(commonClasses, sizeClasses, props.className);

  if (props.src && props.alt) {
    return (
      <div className={avatarClasses}>
        <img src={props.src} alt={props.alt} className="w-full h-full rounded-full object-cover" />
        {status}
      </div>
    );
  }

  return (
    <div className={avatarClasses}>
      {props.children}
      {status}
    </div>
  );
}
