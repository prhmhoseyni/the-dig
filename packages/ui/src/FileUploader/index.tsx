"use client";

import { type ChangeEvent, type DragEvent, type InputHTMLAttributes, useState } from "react";
import { CloudUpload } from "lucide-react";
import clsx from "clsx";

export interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	onDropFiles?: (files: FileList) => void;
	hasError?: boolean;
}

export default function FileUploader(props: FileUploaderProps) {
	const { id, onDropFiles: onFileDrop, hasError, ...rest } = props;

	const [isDragging, setIsDragging] = useState(false);

	/** :::: file selection via the input handlers :::: */
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && onFileDrop) {
			onFileDrop(e.target.files);
		}
	};

	/** :::: drag and drop handlers :::: */
	const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setIsDragging(false);
	};

	const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setIsDragging(false);
		if (event.dataTransfer.files && onFileDrop) onFileDrop(event.dataTransfer.files);
	};

	return (
		<label
			htmlFor={id}
			className={clsx(
				"flex flex-col items-center justify-center gap-2 text-center p-8 cursor-pointer border-2 border-dashed border-gray-500 rounded-lg transition-all duration-200 hover:shadow-focus-gray hover:bg-gray-100",
				{ "!border-brand !bg-brand-light": isDragging },
				{ "!border-danger": hasError },
				{
					"!bg-gray-200 !opacity-40 !cursor-not-allowed": props.disabled,
				},
			)}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<input id={id} type="file" className="hidden" onChange={handleFileChange} {...rest} />

			<CloudUpload size={24} />

			<p className="text-label4 flex items-center gap-1">
				<span className="text-brand">برای آپلود کلیک کنید،</span>
				<span className="text-prose-primary">یا بکشید و رها کنید.</span>
			</p>
		</label>
	);
}
