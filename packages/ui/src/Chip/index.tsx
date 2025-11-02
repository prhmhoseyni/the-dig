import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

const colors = {
	brand: {
		tinted:
			"border-0 text-prose-brand bg-brand-light hover:bg-brand-light-hover active:bg-brand-light-active active:shadow-focus-brand",
	},

	info: {
		tinted:
			"border-0 text-prose-info bg-info-light hover:bg-info-light-hover active:bg-info-light-active active:shadow-focus-info",
	},

	success: {
		tinted:
			"border-0 text-prose-success bg-success-light hover:bg-success-light-hover active:bg-success-light-active active:shadow-focus-success",
	},

	warning: {
		tinted:
			"border-0 text-prose-warning bg-warning-light hover:bg-warning-light-hover active:bg-warning-light-active active:shadow-focus-warning",
	},

	danger: {
		tinted:
			"border-0 text-prose-danger bg-danger-light hover:bg-danger-light-hover active:bg-danger-light-active active:shadow-focus-danger",
	},

	gray: {
		tinted:
			"border-0 text-prose-gray bg-gray-light hover:bg-gray-light-hover active:bg-gray-light-active active:shadow-focus-gray",
	},
};

/**
 * :::: types :::
 */
export type ChipColor = "brand" | "info" | "success" | "warning" | "danger" | "gray";

/**
 * @name Chip component
 */
export interface ChipProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color?: ChipColor;
	startAdornment?: ReactNode;
}

export default function Chip(props: ChipProps) {
	const { color = "brand", className = "", startAdornment: icon, children, ...rest } = props;

	return (
		<span
			className={clsx(
				"cursor-pointer h-8 ps-3 pe-2 text-subtitle5 inline-flex items-center justify-center gap-1.5 rounded-full min-w-fit transition-all ease-in-out duration-300",
				colors[color].tinted,
				className,
			)}
			{...rest}
		>
			{icon}

			{children}

			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
				<title>x</title>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM13.4997 12.5855C13.4996 12.343 13.4032 12.1104 13.2317 11.939L11.2927 10L13.2317 8.061C13.3165 7.97613 13.3839 7.87536 13.4298 7.76446C13.4757 7.65357 13.4994 7.53471 13.4994 7.41467C13.4994 7.29463 13.4757 7.17578 13.4298 7.06488C13.3839 6.95398 13.3165 6.85321 13.2317 6.76834C13.1468 6.68346 13.046 6.61613 12.9351 6.5702C12.8242 6.52426 12.7054 6.50062 12.5853 6.50062C12.4653 6.50062 12.3464 6.52426 12.2355 6.5702C12.1246 6.61613 12.0239 6.68346 11.939 6.76834L10 8.70734L8.06022 6.76834C7.88677 6.60715 7.65757 6.5195 7.42083 6.52384C7.18408 6.52817 6.95824 6.62415 6.79081 6.79158C6.62337 6.95902 6.52739 7.18486 6.52306 7.4216C6.51872 7.65835 6.60637 7.88755 6.76756 8.061L8.70656 10L6.76756 11.939C6.59605 12.1105 6.4997 12.3432 6.4997 12.5857C6.4997 12.8283 6.59605 13.0609 6.76756 13.2324C6.85227 13.3176 6.95298 13.3852 7.0639 13.4313C7.17482 13.4775 7.29376 13.5012 7.41389 13.5012C7.53402 13.5012 7.65296 13.4775 7.76388 13.4313C7.8748 13.3852 7.97551 13.3176 8.06022 13.2324L10 11.2927L11.939 13.2324C12.1105 13.4039 12.3431 13.5001 12.5856 13.5001C12.8281 13.5 13.0606 13.4036 13.2321 13.2321C13.4035 13.0605 13.4997 12.8279 13.4997 12.5855Z"
					fill={`rgb(var(--dig-${color}))`}
				/>
			</svg>
		</span>
	);
}
