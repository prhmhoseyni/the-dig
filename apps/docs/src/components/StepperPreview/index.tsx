"use client";

import Stepper from "@repo/ui/Stepper";
import { useState } from "react";

export function StepperPreview() {
	const [step, setStep] = useState(2);

	return (
		<Stepper
			step={step}
			onChange={(step) => setStep(step)}
			steps={[
				{ title: "مرحله اول", description: "راهنمای مرحله اول" },
				{ title: "مرحله دوم", description: "راهنمای مرحله دوم" },
				{ title: "مرحله سوم", description: "راهنمای مرحله سوم" },
				{ title: "مرحله چهارم", description: "راهنمای مرحله چهارم" },
			]}
		/>
	);
}

export function StepperPreviewVertical() {
	const [step, setStep] = useState(2);

	return (
		<Stepper
			vertical
			step={step}
			onChange={(step) => setStep(step)}
			steps={[
				{ title: "مرحله اول", description: "راهنمای مرحله اول" },
				{ title: "مرحله دوم", description: "راهنمای مرحله دوم" },
				{ title: "مرحله سوم", description: "راهنمای مرحله سوم" },
				{ title: "مرحله چهارم", description: "راهنمای مرحله چهارم" },
			]}
		/>
	);
}
