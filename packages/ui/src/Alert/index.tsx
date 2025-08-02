import clsx from "clsx";
import { memo, ReactNode } from "react";

const colors = {
  info: "text-info bg-info-light border-info-light-active",
  success: "text-success bg-success-light border-success-light-active",
  warning: "text-warning bg-warning-light border-warning-light-active",
  danger: "text-danger bg-danger-light border-danger-light-active",
  gray: "text-gray bg-gray-light border-gray-light-active",
};

const icons = {
  info: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9991 7.33332C10.8726 7.33332 10.7699 7.43599 10.7709 7.56249C10.7709 7.68899 10.8735 7.79166 11 7.79166C11.1265 7.79166 11.2292 7.68899 11.2292 7.56249C11.2292 7.43599 11.1265 7.33332 10.9991 7.33332"
        stroke="#1991FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.25V19.25C6.44325 19.25 2.75 15.5568 2.75 11V11C2.75 6.44325 6.44325 2.75 11 2.75V2.75C15.5568 2.75 19.25 6.44325 19.25 11V11C19.25 15.5568 15.5568 19.25 11 19.25Z"
        stroke="#1991FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 11V15.5833" stroke="#1991FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  success: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.25V19.25C6.44325 19.25 2.75 15.5568 2.75 11V11C2.75 6.44325 6.44325 2.75 11 2.75V2.75C15.5568 2.75 19.25 6.44325 19.25 11V11C19.25 15.5568 15.5568 19.25 11 19.25Z"
        stroke="#43A824"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 9.16669L10.0833 13.75L7.33331 11"
        stroke="#43A824"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  warning: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 11.9167V9.16669" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11 13.9792C11 13.9792 11 14.0818 11 14.2083C11 14.3348 11 14.4375 11 14.4375C11 14.4375 11 14.3348 11 14.2083C11 14.0818 11 13.9792 11 13.9792"
        stroke="#FF9500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6742 4.62253L18.9932 15.4964C19.7275 16.7604 18.7993 18.3334 17.3192 18.3334H4.68123C3.20028 18.3334 2.2721 16.7604 3.00722 15.4964L9.32622 4.62253C10.0663 3.34807 11.9342 3.34807 12.6742 4.62253Z"
        stroke="#FF9500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  danger: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8589 8.14124L11 11.0001M11 11.0001L8.14132 13.8588M11 11.0001L8.14124 8.14126M11 11.0001L13.8588 13.8588M11 19.25C6.44325 19.25 2.75 15.5568 2.75 11C2.75 6.44325 6.44325 2.75 11 2.75C15.5568 2.75 19.25 6.44325 19.25 11C19.25 15.5568 15.5568 19.25 11 19.25Z"
        stroke="#F1380E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  gray: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9991 7.33332C10.8726 7.33332 10.7699 7.43599 10.7709 7.56249C10.7709 7.68899 10.8735 7.79166 11 7.79166C11.1265 7.79166 11.2292 7.68899 11.2292 7.56249C11.2292 7.43599 11.1265 7.33332 10.9991 7.33332"
        stroke="#B4B4B9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.25V19.25C6.44325 19.25 2.75 15.5568 2.75 11V11C2.75 6.44325 6.44325 2.75 11 2.75V2.75C15.5568 2.75 19.25 6.44325 19.25 11V11C19.25 15.5568 15.5568 19.25 11 19.25Z"
        stroke="#B4B4B9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 11V15.5833" stroke="#B4B4B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface Props {
  color?: "info" | "success" | "warning" | "danger" | "gray";
  title?: string;
  description: ReactNode;
  className?: string;
}

const Alert = (props: Props) => {
  const { color = "gray", title, description, className = "" } = props;

  return (
    <div className={clsx("p-3 border rounded-xl flex gap-2", colors[color], className)}>
      {icons[color]}

      <div className="flex flex-col gap-1">
        {title && <p className="text-label2 text-prose-primary">{title}</p>}
        {description && <p className="text-paragraph4 text-prose-secondary">{description}</p>}
      </div>
    </div>
  );
};

export default memo(Alert);
