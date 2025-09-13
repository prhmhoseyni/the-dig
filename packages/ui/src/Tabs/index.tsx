"use client";

import clsx from "clsx";
import {
	Children,
	cloneElement,
	type HTMLProps,
	isValidElement,
	type MemoExoticComponent,
	memo,
	type PropsWithChildren,
	type ReactNode,
} from "react";

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: tabs item ::::
 */
interface TabItemProps extends HTMLProps<HTMLDivElement> {
	active?: boolean;
	onClick?: () => void;
	className?: string;
}

function TabsItem(props: TabItemProps) {
	const { active, className, children, ...rest } = props;

	return (
		<div
			className={clsx(
				"inline-flex items-center gap-x-2 text-subtitle3 text-prose-secondary cursor-pointer p-2.5 px-4 border-b border-gray-300 hover:bg-gray-100",
				{ "!border-brand !text-brand": Boolean(active) },
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
 * :::: tabs base ::::
 */

// Define the types for the Tabs component props
interface BaseTabsProps extends PropsWithChildren {
	value: number;
	onChange: (newValue: number) => void;
}

function BaseTabs(props: BaseTabsProps) {
	return (
		<div className="flex items-center">
			{Children.map(props.children, (child, index) => {
				if (isValidElement<TabItemProps>(child) && child.type === TabsItem) {
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
 * :::: tabs ::::
 */
interface ComposeProps {
	Item: typeof TabsItem;
}

const Tabs = memo(BaseTabs) as MemoExoticComponent<(props: BaseTabsProps) => ReactNode> &
	ComposeProps;
Tabs.Item = TabsItem;

export default Tabs;
