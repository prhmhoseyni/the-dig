import type { PropsWithChildren } from "react";

export default function Container(props: PropsWithChildren) {
  return (
    <div
      dir="rtl"
      className="vazirmatn my-8 flex items-center gap-4 border-2 border-gray-400 border-dashed justify-center min-h-40 rounded-lg"
    >
      {props.children}
    </div>
  );
}
