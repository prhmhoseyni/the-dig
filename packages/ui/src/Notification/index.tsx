import clsx from "clsx";
import { Info, X } from "lucide-react";
import { memo, type ReactNode } from "react";

interface Props {
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  onClose?: VoidFunction;
  className?: string;
}

const Notification = (props: Props) => {
  const { title, description, actions, onClose, className = "" } = props;

  return (
    <div
      className={clsx(
        "bg-background-primary border border-gray-light-hover shadow-3xl p-4 rounded-xl flex flex-row justify-between items-start gap-3 md:items-center",
        className,
      )}
    >
      <Info stroke="var(--color-background-primary)" fill="var(--color-brand)" width={24} height={24} />

      <div className="flex flex-row flex-wrap flex-1 items-center gap-3">
        <p className="text-subtitle3 text-prose-primary">{title}</p>

        <div className="flex-1 min-w-fit flex flex-row flex-wrap gap-3 justify-between items-center">
          <p className="text-paragraph4 text-prose-secondary">{description}</p>

          {actions}
        </div>
      </div>

      {onClose && <X className="cursor-pointer mr-2" width={20} height={20} onClick={onClose} />}
    </div>
  );
};

export default memo(Notification);
