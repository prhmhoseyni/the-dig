"use client";

import Button from "@repo/ui/Button";
import Checkbox from "@repo/ui/Checkbox";
import Menu from "@repo/ui/Menu";
import { useRef, useState } from "react";

export default function MenuPreview() {
	const [menuOpen, setMenuOpen] = useState(false);
	const anchorRef = useRef<HTMLButtonElement>(null);

	const handleOpenMenu = () => setMenuOpen(!menuOpen);
	const handleCloseMenu = () => setMenuOpen(false);

	return (
		<div className="container mx-auto flex justify-center items-center p-4">
			<Button ref={anchorRef} onClick={handleOpenMenu}>
				کلیک کن
			</Button>

			<Menu anchor={anchorRef.current} open={menuOpen} onClose={handleCloseMenu}>
				<Menu.Item dir="rtl" className="vazirmatn">
					<Checkbox />
					گزینه اول
				</Menu.Item>
				<Menu.Item dir="rtl" className="vazirmatn">
					<Checkbox />
					گزینه دوم
				</Menu.Item>
				<Menu.Item dir="rtl" className="vazirmatn">
					<Checkbox />
					گزینه سوم
				</Menu.Item>
			</Menu>
		</div>
	);
}
