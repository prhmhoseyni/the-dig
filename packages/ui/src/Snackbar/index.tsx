"use client";

import type { PropsWithChildren } from "react";

export interface SnackbarProps extends PropsWithChildren {
	showMoreHref?: string;
	onClose?: VoidFunction;
}

export default function Snackbar(props: SnackbarProps) {
	const { showMoreHref, onClose, children } = props;

	return (
		<div className="w-fit flex items-center justify-between bg-black-80 text-prose-inverse text-label3 rounded-full">
			{onClose && (
				<>
					<button
						type="button"
						onClick={onClose}
						className="cursor-pointer text-prose-inverse w-12 h-10 flex items-center justify-center rounded-full"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
							<title>svg title</title>
							<path
								d="M0.999999 1.00001L9.00001 9M8.99995 1L0.99994 8.99999"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<div className="h-8 w-px border border-white-8" />
				</>
			)}

			{showMoreHref && (
				<>
					<a href={showMoreHref} className="flex items-center px-4 text-subtitle5 text-prose-inverse">
						مشاهده بیشتر
					</a>

					<div className="h-8 w-px border border-white-8" />
				</>
			)}

			<div className="flex items-center gap-3 p-3 text-prose-inverse text-label3">{children}</div>
		</div>
	);
}
