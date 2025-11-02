import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

/**
 * :::: types :::
 */
export type TextFieldVariant = "primary" | "secondary";

/**
 * @name TextField component
 */
export interface TextFieldProps
	extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size"> {
	variant?: TextFieldVariant;
	hasError?: boolean;
	startAdornment?: ReactNode;
	endAdornment?: ReactNode;
	size?: "xs" | "sm" | "md" | "lg";
	inputWrapperProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const sizeClasses: Record<string, string> = {
	xs: "min-h-8 text-sm px-2",
	sm: "min-h-10 text-sm px-3",
	md: "min-h-12 text-base px-3",
	lg: "min-h-14 text-lg px-4",
};
export default function TextField(props: TextFieldProps) {
	const {
		variant = "primary",
		hasError = false,
		startAdornment,
		endAdornment,
		className = "",
		size = "md",
		inputWrapperProps,
		...rest
	} = props;
	const { className: wrapperClassName, ...restWrapper } = inputWrapperProps ?? {};

	return (
		<div className={clsx("w-full relative", wrapperClassName)} {...restWrapper}>
			<input
				className={clsx(
					"w-full text-label2 text-prose-primary border border-gray-400 outline-0 px-3 rounded-lg placeholder:text-prose-hint transition-all ease-in-out duration-300",
					"disabled:cursor-not-allowed disabled:opacity-40",
					"focus:border-brand focus:shadow-focus-brand",
					{ "bg-background-secondary": variant === "primary" },
					{ "bg-background-primary": variant === "secondary" },
					{ "!border-danger focus:!border-danger focus:!shadow-focus-danger": hasError },
					{ "!ps-9": startAdornment },
					{ "!pe-9": endAdornment },
					sizeClasses[size],
					className,
				)}
				{...rest}
			/>

			{startAdornment && <div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">{startAdornment}</div>}

			{endAdornment && <div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center">{endAdornment}</div>}
		</div>
	);
}
