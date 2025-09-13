"use client";

import Button from "@repo/ui/Button";
import Stepper from "@repo/ui/Stepper";
import { useState } from "react";

export default function StepperPreview() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div
      dir="rtl" 
      className="flex flex-col justify-center items-center gap-10 p-4"
    >
      <Stepper
        steps={[
          { title: "مرحله اول", description: "راهنمای مرحله اول" },
          { title: "مرحله دوم", description: "راهنمای مرحله دوم" },
          { title: "مرحله سوم", description: "راهنمای مرحله سوم" },
          {
            title: "مرحله چهارم",
            description: "راهنمای مرحله چهارم",
          },
        ]}
        step={currentStep}
        onChange={(step) => {
          setCurrentStep(step);
        }}
      />

      <Stepper
        steps={[
          { title: "مرحله اول" },
          { title: "مرحله دوم" },
          { title: "مرحله سوم" },
          { title: "مرحله چهارم" },
        ]}
        step={currentStep}
        onChange={(step) => {
          setCurrentStep(step);
        }}
      />

      <Stepper
        steps={[
          { title: "مرحله اول", description: "راهنمای مرحله اول" },
          { title: "مرحله دوم", description: "راهنمای مرحله دوم" },
          { title: "مرحله سوم", description: "راهنمای مرحله سوم" },
          {
            title: "مرحله چهارم",
            description: "راهنمای مرحله چهارم",
          },
        ]}
        step={currentStep}
        vertical
        onChange={(step) => {
          setCurrentStep(step);
        }}
      />

      <div className="flex gap-4">
        <Button
          onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
        >
          قبلی
        </Button>
        <Button
          onClick={() => currentStep < 4 && setCurrentStep(currentStep + 1)}
        >
          بعدی
        </Button>
      </div>
    </div>
  );
}
