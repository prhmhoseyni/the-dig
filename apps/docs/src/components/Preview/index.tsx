import type { PropsWithChildren } from "react";

export default function Preview(props: PropsWithChildren<{ col?: boolean }>) {
  return (
    <div
      dir="rtl"
      className="vazirmatn my-8 p-4 flex flex-col items-center justify-center gap-4 border-2 border-gray-400 border-dashed min-h-40 rounded-lg"
    >
      {props.children}
    </div>
  );
}
