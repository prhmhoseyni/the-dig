import clsx from "clsx";
import {
	Children,
	cloneElement,
	isValidElement,
	type PropsWithChildren,
	type ReactNode,
	useId,
} from "react";

const online = {
	lg: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			className="absolute inset-x-0 bottom-0"
		>
			<title>online</title>
			<circle
				cx="7"
				cy="7"
				r="6"
				fill="#43A824"
				stroke="rgb(var(--dig-background-secondary))"
				strokeWidth="2"
			/>
		</svg>
	),
	md: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			className="absolute inset-x-0 bottom-0"
		>
			<title>online</title>
			<circle
				cx="6"
				cy="6"
				r="5"
				fill="#43A824"
				stroke="rgb(var(--dig-background-secondary))"
				strokeWidth="2"
			/>
		</svg>
	),
	sm: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			fill="none"
			className="absolute inset-x-0 bottom-0"
		>
			<title>online</title>
			<circle
				cx="5"
				cy="5"
				r="4"
				fill="#43A824"
				stroke="rgb(var(--dig-background-secondary))"
				strokeWidth="2"
			/>
		</svg>
	),
	xs: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="9"
			height="9"
			viewBox="0 0 9 9"
			fill="none"
			className="absolute inset-x-0 bottom-0"
		>
			<title>online</title>
			<circle
				cx="4.5"
				cy="4.5"
				r="3.5"
				fill="#43A824"
				stroke="rgb(var(--dig-background-secondary))"
				strokeWidth="2"
			/>
		</svg>
	),
};

const sizes = {
	lg: "min-w-16 w-16 min-h-16 h-16 text-subtitle1",
	md: "min-w-11 w-11 min-h-11 h-11 text-subtitle2",
	sm: "min-w-8 w-8 min-h-8 h-8 text-subtitle5",
	xs: "min-w-6 w-6 min-h-6 h-6 text-subtitle5",
};

/**
 * :::: types ::::
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg";
export type AvatarStatus = "online" | "offline";

/**
 * @name Avatar component
 */
export interface AvatarProps extends PropsWithChildren {
	src?: string;
	alt: string;
	size?: AvatarSize;
	className?: string;
	status?: AvatarStatus;
}

export function Avatar(props: AvatarProps) {
	const { src, alt, size = "md", className = "", status = "offline", children } = props;

	const commonClasses = clsx(
		"relative rounded-full inline-flex items-center justify-center bg-gray-400 border-2 border-background-primary",
		sizes[size],
		className,
	);

	if (src) {
		return (
			<div className={commonClasses}>
				<img src={src} alt={alt} className="w-full h-full rounded-full object-cover" />
				{status === "online" ? online[size] : null}
			</div>
		);
	}

	return (
		<div className={commonClasses}>
			{children}
			{status === "online" ? online[size] : null}
		</div>
	);
}

/**
 * @name AvatarGroup component
 */
export interface AvatarGroupProps {
	children: ReactNode;
	max: number;
	size?: AvatarSize;
}

export function AvatarGroup(props: AvatarGroupProps) {
	const { children, max, size = "md" } = props;

	const uuid = useId();
	const avatars = Children.toArray(children);
	const numAvatars = avatars.length;
	const showCount = numAvatars > max;
	const visibleAvatars = showCount ? avatars.slice(0, max - 1) : avatars;
	const remainingCount = numAvatars - (max - 1);

	return (
		<div className="flex items-center -space-x-4">
			{visibleAvatars.map((child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child, {
						key: `avatar-group-${uuid}-${index}`,
						size,
					} as Record<string, unknown>);
				}
				return child;
			})}
			{showCount && <Avatar size={size} alt="count">{`+${remainingCount}`}</Avatar>}
		</div>
	);
}
