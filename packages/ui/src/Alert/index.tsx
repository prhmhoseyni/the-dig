"use client";

import clsx from "clsx";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";
import type { ReactNode } from "react";

const colors = {
  info: "text-prose-info bg-info-light border-info-light-active",
  success: "text-prose-success bg-success-light border-success-light-active",
  warning: "text-prose-warning bg-warning-light border-warning-light-active",
  danger: "text-prose-danger bg-danger-light border-danger-light-active",
  gray: "text-prose-gray bg-gray-light border-gray-light-active",
};

const icons = {
  info: <Info width={20} height={20} />,
  success: <CircleCheck width={20} height={20} />,
  warning: <TriangleAlert width={20} height={20} />,
  danger: <CircleX width={20} height={20} />,
  gray: <Info width={20} height={20} />,
};

/**
 * :::: types ::::
 */
export type AlertColor = "info" | "success" | "warning" | "danger" | "gray";

/**
 * @name Alert component
 */
export interface AlertProps {
  color?: AlertColor;
  title?: ReactNode;
  description: ReactNode;
  onClose?: VoidFunction;
  className?: string;
}

export default function Alert(props: AlertProps) {
  const { color = "gray", title, description, onClose, className = "" } = props;

  return (
    <div className={clsx("p-3 border rounded-xl flex gap-2", colors[color], className)}>
      {icons[color]}

      <div className="flex flex-col gap-1 flex-1">
        {title && <p className="text-subtitle3 text-prose-primary">{title}</p>}

        <p className={clsx("text-paragraph4", title ? "text-prose-secondary" : "text-prose-primary")}>{description}</p>
      </div>

      {onClose && <X className="cursor-pointer" onClick={onClose} />}
    </div>
  );
}
