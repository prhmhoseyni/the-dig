"use client";

import Button from "@repo/ui/Button";
import Menu from "@repo/ui/Menu";
import { useState, useRef } from "react";

export default function MenuPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  const handleMenuItemClick = (item: string) => {
    console.log(`${item} clicked!`);
    // handleCloseMenu();
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-4">
      <Button ref={anchorRef} onClick={handleOpenMenu}>
        Open Menu
      </Button>

      <Menu anchor={anchorRef.current} open={menuOpen} onClose={handleCloseMenu}>
        <Menu.Item onClick={() => handleMenuItemClick("Item 1")}>عنوان ایتم منو</Menu.Item>
        <Menu.Item onClick={() => handleMenuItemClick("Item 2 (Checked)")}>عنوان ایتم منو</Menu.Item>
        <Menu.Item onClick={() => handleMenuItemClick("Item 3 (Selected)")}>عنوان ایتم منو</Menu.Item>
        <Menu.Item onClick={() => handleMenuItemClick("Item 4 (SubMenu)")}>عنوان ایتم منو</Menu.Item>
        <div>123</div>
      </Menu>
    </div>
  );
}
