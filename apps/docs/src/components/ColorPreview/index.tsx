import clsx from "clsx";
import type { PropsWithChildren } from "react";

export default function ColorPreview(props: PropsWithChildren<{ className: string }>) {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className={clsx("rounded-full w-20 h-20", props.className)} />
			<span className="text-caption2 font-bold">{props.children}</span>
		</div>
	);
}
