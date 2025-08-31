import { ComponentProps, useEffect, useRef } from "react";
import clsx from "clsx";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, getDefaultClassNames } from "react-day-picker";
import { DayPicker } from "react-day-picker/persian";
import IconButton from "../IconButton";

function CalendarDayButton({ className, day, modifiers, color, ...props }: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <IconButton
      ref={ref}
      size="xs"
      color="gray"
      variant="tinted"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={clsx(
        "bg-transparent data-[selected-single=true]:bg-brand data-[selected-single=true]:text-prose-inverse data-[range-middle=true]:bg-brand-light data-[range-middle=true]:text-prose-brand data-[range-start=true]:bg-brand data-[range-start=true]:text-prose-inverse data-[range-end=true]:bg-brand data-[range-end=true]:text-prose-inverse group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export default function Calendar(props: ComponentProps<typeof DayPicker>) {
  const { className, classNames, components, captionLayout = "label", ...rest } = props;

  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      className={clsx(
        "bg-background-secondary group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      classNames={{
        root: clsx("w-fit", defaultClassNames.root),
        months: clsx("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: clsx("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: clsx("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
        month_caption: clsx(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: clsx(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: clsx(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root,
        ),
        dropdown: clsx("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: clsx(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: clsx("flex", defaultClassNames.weekdays),
        weekday: clsx(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday,
        ),
        week: clsx("flex w-full mt-2", defaultClassNames.week),
        week_number_header: clsx("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: clsx("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number),
        day: clsx(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day,
        ),
        range_start: clsx("rounded-l-md bg-accent", defaultClassNames.range_start),
        range_middle: clsx("rounded-none", defaultClassNames.range_middle),
        range_end: clsx("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: clsx("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
        outside: clsx("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
        disabled: clsx("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: clsx("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={clsx(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <IconButton size="xs" color="gray" variant="tinted" className="bg-transparent">
                <ChevronRightIcon className={clsx("size-4", className)} {...props} />
              </IconButton>
            );
          }

          if (orientation === "right") {
            return (
              <IconButton size="xs" color="gray" variant="tinted" className="bg-transparent">
                <ChevronLeftIcon className={clsx("size-4", className)} {...props} />
              </IconButton>
            );
          }

          return <ChevronDownIcon className={clsx("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
            </td>
          );
        },
        ...components,
      }}
      {...rest}
    />
  );
}
