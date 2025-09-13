import clsx from "clsx";
import {
	Children,
	cloneElement,
	isValidElement,
	type PropsWithChildren,
	type ReactElement,
} from "react";

/**
 * :::: types :::
 */
export type SegmentControlSize = "sm" | "md" | "lg";

/**
 * @name SegmentControl component
 */
export interface SegmentControlProps extends PropsWithChildren {
	value?: string;
	onChange?: (value: string) => void;
	size?: SegmentControlSize;
}

export default function SegmentControl(props: SegmentControlProps) {
	const { value, onChange, size = "md", children } = props;

	return (
		<div className="w-fit inline-flex items-center gap-1 rounded-lg bg-gray-200 p-1">
			{Children.map(children, (child) => {
				if (isValidElement(child) && child.type === SegmentControl.Item) {
					return cloneElement(child as ReactElement<SegmentControlItemProps>, {
						selectedValue: value,
						onChange: onChange,
						size: size,
					});
				}

				return child;
			})}
		</div>
	);
}

/**
 * @name SegmentControlItem component
 */
export interface SegmentControlItemProps extends PropsWithChildren {
	value: string;
	onChange?: (value: string) => void;
	selectedValue?: string;
	size?: SegmentControlSize;
}

SegmentControl.Item = function SegmentControlItem(props: SegmentControlItemProps) {
	const { value, onChange, selectedValue, size = "md", children } = props;

	const sizes = {
		sm: "text-subtitle5 px-3 h-7",
		md: "text-subtitle5 px-3 h-8",
		lg: "text-subtitle3 px-5 h-10",
	};

	return (
		<label
			className={clsx(
				"cursor-pointer flex items-center gap-2 rounded transition-all ease-in-out hover:bg-background-secondary",
				sizes[size ?? "md"],
				selectedValue === value
					? "text-prose-primary bg-background-secondary"
					: "text-prose-secondary bg-transparent",
			)}
		>
			<input
				type="radio"
				name="segment"
				value={value}
				checked={selectedValue === value}
				onChange={() => onChange?.(value)}
				className="sr-only"
			/>

			{children}
		</label>
	);
};

/**
 * @name SegmentControlDivider component
 */
SegmentControl.Divider = function SegmentControlDivider() {
	return <div className="w-px h-6 bg-gray-400" />;
};
