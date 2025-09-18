import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "../Button";

function InfoIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
			<title>svg title</title>
			<path
				d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
				fill="#1991FF"
				fillOpacity="0.05"
			/>
			<path
				d="M6 28C6 15.8497 15.8497 6 28 6C40.1503 6 50 15.8497 50 28C50 40.1503 40.1503 50 28 50C15.8497 50 6 40.1503 6 28Z"
				fill="#1991FF"
				fillOpacity="0.08"
			/>
			<path
				d="M28.01 32V28M28.01 24H28M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
				stroke="#1991FF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SuccessIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
			<title>svg title</title>
			<path
				d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
				fill="#43A824"
				fillOpacity="0.05"
			/>
			<path
				d="M6 28C6 15.8497 15.8497 6 28 6C40.1503 6 50 15.8497 50 28C50 40.1503 40.1503 50 28 50C15.8497 50 6 40.1503 6 28Z"
				fill="#43A824"
				fillOpacity="0.08"
			/>
			<path
				d="M38 27.08V28C37.9988 30.1564 37.3005 32.2547 36.0093 33.9818C34.7182 35.709 32.9033 36.9725 30.8354 37.5839C28.7674 38.1953 26.5573 38.1219 24.5345 37.3746C22.5117 36.6273 20.7847 35.2461 19.611 33.4371C18.4373 31.628 17.8798 29.4881 18.0217 27.3363C18.1636 25.1846 18.9972 23.1363 20.3983 21.4971C21.7994 19.8578 23.6928 18.7154 25.7962 18.2401C27.8996 17.7649 30.1003 17.9823 32.07 18.86M38 20L28 30.01L25 27.01"
				stroke="#43A824"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function DangerIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
			<title>svg title</title>
			<path
				d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
				fill="#F1380E"
				fillOpacity="0.05"
			/>
			<path
				d="M6 28C6 15.8497 15.8497 6 28 6C40.1503 6 50 15.8497 50 28C50 40.1503 40.1503 50 28 50C15.8497 50 6 40.1503 6 28Z"
				fill="#F1380E"
				fillOpacity="0.08"
			/>
			<path
				d="M28 24V28M28 32H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
				stroke="#F1380E"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function WarningIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
			<title>svg title</title>
			<path
				d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
				fill="#FF9500"
				fillOpacity="0.05"
			/>
			<path
				d="M6 28C6 15.8497 15.8497 6 28 6C40.1503 6 50 15.8497 50 28C50 40.1503 40.1503 50 28 50C15.8497 50 6 40.1503 6 28Z"
				fill="#FF9500"
				fillOpacity="0.08"
			/>
			<path
				d="M27.9998 24V28M27.9998 32H28.0098M26.2898 18.86L17.8198 33C17.6451 33.3024 17.5527 33.6453 17.5518 33.9945C17.5508 34.3437 17.6413 34.6871 17.8142 34.9905C17.9871 35.2939 18.2365 35.5467 18.5375 35.7238C18.8385 35.9009 19.1806 35.9961 19.5298 36H36.4698C36.819 35.9961 37.1611 35.9009 37.4621 35.7238C37.7631 35.5467 38.0124 35.2939 38.1854 34.9905C38.3583 34.6871 38.4488 34.3437 38.4478 33.9945C38.4468 33.6453 38.3544 33.3024 38.1798 33L29.7098 18.86C29.5315 18.5661 29.2805 18.3231 28.981 18.1544C28.6814 17.9858 28.3435 17.8972 27.9998 17.8972C27.656 17.8972 27.3181 17.9858 27.0186 18.1544C26.7191 18.3231 26.468 18.5661 26.2898 18.86Z"
				stroke="#FF9500"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const icons = {
	info: <InfoIcon />,
	success: <SuccessIcon />,
	danger: <DangerIcon />,
	warning: <WarningIcon />,
};

export type ModalType = "info" | "success" | "danger" | "warning";

export interface ModalProps {
	open: boolean;
	type: ModalType;
	title: string;
	description?: string;
	onAdmit: () => Promise<void>;
	onDeny: () => void;
}

export default function Modal(props: ModalProps) {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AnimatePresence>
			{props.open && (
				<div className="fixed inset-0 w-dvw h-dvh flex justify-center items-center z-50">
					<motion.div
						className={clsx(
							"w-full h-full inset-0 bg-black-48 z-[60] flex flex-col justify-end md:flex-row md:items-center md:justify-center",
						)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>

					<motion.dialog
						open={props.open}
						className={clsx(
							"border-0 fixed bottom-4 md:bottom-auto bg-background-primary p-4 z-[70] mx-auto max-h-dvh md:shadow-2xl rounded-2xl md:max-w-[36rem] w-[calc(100%-2rem)]",
						)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: "easeOut" }}
					>
						<div className="flex items-center justify-center">{icons[props.type]}</div>

						<div className="flex flex-col items-center justify-center text-center gap-2 py-4">
							<p className="text-subtitle2 text-prose-primary">{props.title}</p>
							<p className="text-paragraph3 text-prose-secondary">{props.description}</p>
						</div>

						<div className="w-full flex justify-center items-center gap-2">
							<Button
								color="gray"
								variant="tinted"
								className="flex-1 w-full"
								onClick={props.onDeny}
								disabled={isLoading}
							>
								انصراف
							</Button>

							<Button
								color={props.type}
								variant="contained"
								className="flex-1 w-full"
								onClick={async () => {
									setIsLoading(true);
									await props.onAdmit();
									setIsLoading(false);
								}}
								isLoading={isLoading}
							>
								تایید
							</Button>
						</div>
					</motion.dialog>
				</div>
			)}
		</AnimatePresence>
	);
}
