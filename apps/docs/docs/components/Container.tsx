import clsx from "clsx";
import type { PropsWithChildren } from "react";

export default function Container(props: PropsWithChildren<{ col?: boolean }>) {
  return (
    <div
      dir="rtl"
      className={clsx(
        "vazirmatn my-8 p-4 flex items-center justify-center gap-4 border-2 border-gray-400 border-dashed min-h-40 rounded-lg",
        { "flex-col": props.col },
      )}
    >
      {props.children}
    </div>
  );
}
