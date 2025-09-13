"use client";

import clsx from "clsx";
import {
	Children,
	cloneElement,
	type HTMLProps,
	isValidElement,
	memo,
	type MemoExoticComponent,
	type PropsWithChildren,
	type ReactNode,
} from "react";

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: navigation item ::::
 */
interface NavigationItemProps extends HTMLProps<HTMLDivElement> {
	active?: boolean;
	onClick?: () => void;
	className?: string;
}

function NavigationItem(props: NavigationItemProps) {
	const { active, className, children, ...rest } = props;

	return (
		<div
			className={clsx(
				"flex-1 flex flex-col items-center gap-2 text-subtitle6 cursor-pointer p-2.5 px-4 hover:bg-gray-100",
				active ? "!text-prose-primary" : "text-prose-secondary",
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: navigation base ::::
 */

// Define the types for the navigation component props
interface BaseNavigationProps extends PropsWithChildren {
	value: number;
	onChange: (newValue: number) => void;
}

function BaseNavigation(props: BaseNavigationProps) {
	return (
		<div className="fixed inset-x-0 bottom-0 z-[999] flex items-center pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] px-2">
			{Children.map(props.children, (child, index) => {
				if (isValidElement<NavigationItemProps>(child) && child.type === NavigationItem) {
					const active = index === props.value;
					return cloneElement(child, {
						active,
						onClick: () => props.onChange(index),
					});
				}

				return child;
			})}
		</div>
	);
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: navigation ::::
 */
interface ComposeProps {
	Item: typeof NavigationItem;
}

const Navigation = memo(BaseNavigation) as MemoExoticComponent<
	(props: BaseNavigationProps) => ReactNode
> &
	ComposeProps;
Navigation.Item = NavigationItem;

export default Navigation;
