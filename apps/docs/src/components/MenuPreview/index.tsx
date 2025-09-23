"use client";

import Button from "@repo/ui/Button";
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
				<Menu.Item onClick={() => console.log("Item 1 clicked")}>گزینه اول</Menu.Item>
				<Menu.Item onClick={() => console.log("Item 2 clicked")}>گزینه دوم</Menu.Item>
				<Menu.Item onClick={() => console.log("Item 3 clicked")}>گزینه سوم</Menu.Item>
			</Menu>
		</div>
	);
}
