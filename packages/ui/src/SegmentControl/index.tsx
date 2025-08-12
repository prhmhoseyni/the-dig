import { Children, cloneElement, isValidElement, type PropsWithChildren, type ReactElement } from "react";
import clsx from "clsx";

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: segment control ::::
 */
interface SegmentControlProps extends PropsWithChildren {
    value?: string;
    onChange?: (value: string) => void;
    size?: "sm" | "md" | "lg";
}

export default function SegmentControl(props: SegmentControlProps) {
    return (
        <div className="w-fit inline-flex items-center gap-1 rounded-lg bg-gray-200 p-1">
            {Children.map(props.children, (child) => {
                if (
                    isValidElement(child) &&
                    child.type === SegmentControl.Item
                ) {
                    return cloneElement(child as ReactElement<SegmentControlItemProps>, {
                        selectedValue: props.value,
                        onChange: props.onChange,
                        size: props.size,
                    });
                }

                return child;
            })}
        </div>
    );
}

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: segment control item ::::
 */
interface SegmentControlItemProps {
    value: string;
    onChange?: (value: string) => void;
    selectedValue?: string;
    size?: "sm" | "md" | "lg";
}

SegmentControl.Item = function SegmentControlItem(props: PropsWithChildren<SegmentControlItemProps>) {
    const sizes = {
        sm: "text-subtitle5 px-3 h-7",
        md: "text-subtitle5 px-3 h-8",
        lg: "text-subtitle3 px-5 h-10",
    }

    return (
        <label
            className={clsx(
                "cursor-pointer flex items-center gap-2 rounded transition-all ease-in-out hover:bg-background-secondary",
                sizes[props.size ?? "md"],
                props.selectedValue === props.value
                    ? "text-prose-primary bg-background-secondary"
                    : "text-prose-secondary bg-transparent"
            )}
        >
            <input
                type="radio"
                name="segment"
                value={props.value}
                checked={props.selectedValue === props.value}
                onChange={() => props.onChange?.(props.value)}
                className="sr-only"
            />

            {props.children}
        </label>
    );
};

/**
 * -----------------------------------------------------------------------------------------------------------------
 * :::: segment control divider ::::
 */
SegmentControl.Divider = function SegmentControlDivider() {
    return (
        <div className="w-px h-6 bg-gray-400" />
    );
};