import clsx from "clsx";
import type React from "react";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

type MenuItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function MenuItem(props: MenuItemProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 p-2 cursor-pointer text-label2 text-prose-primary hover:bg-gray-200 transition-colors duration-150 rounded-lg",
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
// src/components/Menu.tsx

// ... (The helper functions like getPortalRoot can remain the same)
const getPortalRoot = () => {
  // ... same as before
  const portalId = "the-dig-portal";
  let element = document.getElementById(portalId);
  if (!element) {
    element = document.createElement("div");
    element.id = portalId;
    document.body.appendChild(element);
  }
  return element;
};

interface MenuProps {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Define the main Menu component type with the attached Item
type MenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>;
};

const Menu: MenuComponent = ({ anchor, open, onClose, children }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalNode(getPortalRoot());
  }, []);

  // ... (All other useEffect hooks for positioning and click-outside remain the same)
  useEffect(() => {
    if (!open || !anchor) {
      setPosition(null);
      return;
    }
    const updatePosition = () => {
      const anchorRect = anchor.getBoundingClientRect();
      setPosition({
        top: anchorRect.bottom + window.scrollY,
        left: anchorRect.left + window.scrollX,
      });
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, anchor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchor &&
        !anchor.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose, anchor]);

  if (!open || !position || !portalNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      ref={menuRef}
      className="absolute bg-white rounded-lg shadow-lg py-1 z-50 min-w-[200px]"
      style={{ top: position.top, left: position.left }}
      role="menu"
      onClick={(e) => {
        console.log("Menu clicked");
        e.stopPropagation();
      }}
    >
      {children}
    </div>,
    portalNode,
  );
};

// Attach MenuItem as a static property of Menu
Menu.Item = MenuItem;

export default Menu;
