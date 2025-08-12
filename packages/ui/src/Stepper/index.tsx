"use client";

import clsx from "clsx";
import { Check } from "lucide-react";
import { memo, type ReactNode } from "react";

interface Props {
  steps: Array<{ title: string; description?: ReactNode }>;
  vertical?: boolean;
  step: number;
  onChange?: (step: number) => void;
}

const Stepper = (props: Props) => {
  const { steps, step, vertical, onChange } = props;

  return (
    <div className={clsx("flex", vertical ? "flex-col" : "flex-row")}>
      {steps.map((item, index) => (
        <div
          key={item.title}
          className={clsx(
            "relative flex gap-2",
            vertical ? "flex-row pb-8 gap-3 justify-start items-start" : "flex-col justify-center items-center px-3 sm:px-4",
            onChange && "cursor-pointer",
          )}
          onClick={() => onChange && onChange(index)}
        >
          <div
            className={clsx(
              "w-6 h-6 flex justify-center items-center rounded-full z-10 outline-4 outline-background-primary",
              index === step
                ? "border-2 border-brand bg-background-primary"
                : index < step
                  ? "bg-brand text-prose-inverse"
                  : "bg-gray-400",
            )}
          >
            {index < step && <Check className="p-1.5" strokeWidth={4} />}
          </div>

          {index < steps.length - 1 &&
            (vertical ? (
              <div
                className={clsx(
                  "h-full border absolute top-0 right-[11px]",
                  index < step ? "border-brand" : "border-gray-400",
                )}
              />
            ) : (
              <div
                className={clsx(
                  "w-full border absolute top-3 right-1/2",
                  index < step ? "border-brand" : "border-gray-400",
                )}
              />
            ))}

          <div className={clsx("flex flex-col gap-1", vertical ? "text-start" : "text-center")}>
            <p className="text-subtitle4 text-prose-primary">{item.title}</p>
            <p className="text-label4 text-prose-hint">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Stepper);
