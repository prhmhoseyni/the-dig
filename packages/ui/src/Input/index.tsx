import clsx from "clsx";
import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

/**
 * :::: types :::
 */
export type InputVariant = "primary" | "secondary";

/**
 * @name Input component
 */
export interface InputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	variant?: InputVariant;
	hasError?: boolean;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
}

export default function Input(props: InputProps) {
	const {
		variant = "primary",
		hasError = false,
		startAdornment,
		endAdornment,
		className = "",
		...rest
	} = props;

	return (
		<div className="w-full relative">
			<input
				className={clsx(
					"w-full min-h-12 text-label2 text-prose-primary border border-gray-400 outline-0 px-3 rounded-lg placeholder:text-prose-hint transition-all ease-in-out duration-300",
					"disabled:cursor-not-allowed disabled:opacity-40",
					"focus:border-brand focus:shadow-focus-brand",
					{ "bg-background-secondary": variant === "primary" },
					{ "bg-background-primary": variant === "secondary" },
					{
						"!border-danger focus:!border-danger focus:!shadow-focus-danger": hasError,
					},
					{ "!ps-9": startAdornment },
					{ "!pe-9": endAdornment },
					className,
				)}
				{...rest}
			/>

			{startAdornment && (
				<div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">
					{startAdornment}
				</div>
			)}

			{endAdornment && (
				<div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center">
					{endAdornment}
				</div>
			)}
		</div>
	);
}
