"use client";

import clsx from "clsx";
import { Check } from "lucide-react";
import { memo, type ReactNode } from "react";

interface Props {
  steps: Array<{ title: string; description?: ReactNode }>;
  currentStep: number;
  vertical?: boolean;
  onStepChange?: (step: number) => void;
}

const Stepper = (props: Props) => {
  const { steps, currentStep, vertical, onStepChange } = props;

  return (
    <div className={clsx("flex", vertical ? "flex-col" : "flex-row")}>
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={clsx(
            "relative flex gap-2",
            vertical ? "flex-row pb-8 gap-3 justify-start items-start" : "flex-col justify-center items-center px-3 sm:px-4",
            onStepChange && "cursor-pointer",
          )}
          onClick={() => onStepChange && onStepChange(index)}
        >
          <div
            className={clsx(
              "w-6 h-6 flex justify-center items-center rounded-full z-10 outline-4 outline-background-primary",
              index === currentStep
                ? "border-2 border-brand bg-background-primary"
                : index < currentStep
                  ? "bg-brand text-prose-inverse"
                  : "bg-gray-400",
            )}
          >
            {index < currentStep && <Check className="p-1.5" strokeWidth={4} />}
          </div>

          {index < steps.length - 1 &&
            (vertical ? (
              <div
                className={clsx(
                  "h-full border absolute top-0 right-[11px]",
                  index < currentStep ? "border-brand" : "border-gray-400",
                )}
              />
            ) : (
              <div
                className={clsx(
                  "w-full border absolute top-3 right-1/2",
                  index < currentStep ? "border-brand" : "border-gray-400",
                )}
              />
            ))}

          <div className={clsx("flex flex-col gap-1", vertical ? "text-start" : "text-center")}>
            <p className="text-subtitle4 text-prose-primary">{step.title}</p>
            <p className="text-label4 text-prose-hint">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Stepper);
