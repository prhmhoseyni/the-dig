"use client";

import clsx from "clsx";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";
import { memo, type ReactNode } from "react";

const colors = {
  info: "text-info bg-info-light border-info-light-active",
  success: "text-success bg-success-light border-success-light-active",
  warning: "text-warning bg-warning-light border-warning-light-active",
  danger: "text-danger bg-danger-light border-danger-light-active",
  gray: "text-gray bg-gray-light border-gray-light-active",
};

const icons = {
  info: <Info width={20} height={20} />,
  success: <CircleCheck width={20} height={20} />,
  warning: <TriangleAlert width={20} height={20} />,
  danger: <CircleX width={20} height={20} />,
  gray: <Info width={20} height={20} />,
};

interface Props {
  color?: "info" | "success" | "warning" | "danger" | "gray";
  title?: string;
  description: ReactNode;
  onClose?: VoidFunction;
  className?: string;
}

const Alert = (props: Props) => {
  const { color = "gray", title, description, onClose, className = "" } = props;

  return (
    <div className={clsx("p-3 border rounded-xl flex gap-2", colors[color], className)}>
      {icons[color]}

      <div className="flex flex-col gap-1 flex-1">
        {title && <p className="text-label2 text-prose-primary">{title}</p>}
        <p className="text-paragraph4 text-prose-secondary">{description}</p>
      </div>

      {onClose && <X className="cursor-pointer" onClick={onClose} />}
    </div>
  );
};

export default memo(Alert);
