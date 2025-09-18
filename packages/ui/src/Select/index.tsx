import clsx from "clsx";
import type { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from "react";

/**
 * :::: types :::
 */
export type SelectVariant = "primary" | "secondary";

/**
 * @name Select component
 */
export interface SelectProps
	extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	variant?: SelectVariant;
	hasError?: boolean;
	startAdornment?: ReactNode;
}

export default function Select(props: SelectProps) {
	const {
		variant = "primary",
		hasError = false,
		startAdornment,
		children,
		className = "",
		...rest
	} = props;

	return (
		<div className="w-full relative">
			<select
				className={clsx(
					"appearance-none w-full min-h-12 text-label2 text-prose-primary border border-gray-400 outline-0 px-3 rounded-lg placeholder:text-prose-hint transition-all ease-in-out duration-300",
					"disabled:cursor-not-allowed disabled:opacity-40",
					"focus:border-brand focus:shadow-focus-brand",
					{ "bg-background-secondary": variant === "primary" },
					{ "bg-background-primary": variant === "secondary" },
					{
						"!border-danger focus:!border-danger focus:!shadow-focus-danger": hasError,
					},
					{ "!ps-9": startAdornment },
					className,
				)}
				{...rest}
			>
				{children}
			</select>

			{startAdornment && (
				<div className="absolute top-1/2 -translate-y-1/2 start-3 flex items-center">
					{startAdornment}
				</div>
			)}

			<div className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<title>arrow-bottom</title>
					<path
						d="M16 10L12 14L8 10"
						stroke="rgb(var(--dig-prose-hint))"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
}
