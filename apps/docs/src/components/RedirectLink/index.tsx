import { ExternalLink } from "lucide-react";
import type { PropsWithChildren } from "react";

export default function RedirectLink(props: PropsWithChildren<{ href: string }>) {
	return (
		<a href={props.href} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-prose-link text-label1">
			{props.children}
			<ExternalLink size={15} />
		</a>
	);
}
