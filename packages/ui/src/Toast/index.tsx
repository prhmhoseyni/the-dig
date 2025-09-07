import clsx from "clsx";
import { Info } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  onClose?: VoidFunction;
  className?: string;
}

export default function Toast(props: Props) {
  const { title, description, actions, className = "" } = props;

  return (
    <div
      className={clsx(
        "flex flex-row justify-between items-start gap-3",
        className,
      )}
    >
      <Info
        stroke="var(--color-background-primary)"
        fill="var(--color-info)"
        width={24}
        height={24}
      />

      <div className="flex flex-row flex-wrap flex-1 items-center gap-3">
        <p className="text-subtitle3 text-prose-primary">{title}</p>

        <div className="flex-1 min-w-fit flex flex-row flex-wrap gap-3 justify-between items-center">
          <p className="text-paragraph4 text-prose-secondary">{description}</p>

          {actions}
        </div>
      </div>
    </div>
  );
}
