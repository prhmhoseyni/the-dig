import clsx from "clsx";
import type { PanInfo } from "motion";
import { AnimatePresence, motion } from "motion/react";
import { type MemoExoticComponent, memo, type PropsWithChildren, type ReactNode, useEffect, useRef, useState } from "react";

/**
 * @name DialogHeader component
 */
export interface DialogHeaderProps extends PropsWithChildren {
  className?: string;
}

function DialogHeader(props: DialogHeaderProps) {
  return (
    <div className={clsx("bg-background-secondary md:rounded-t-2xl p-5 border-b border-gray-300 relative", props.className)}>
      {props.children}
    </div>
  );
}

/**
 * @name DialogBody component
 */
export interface DialogBodyProps extends PropsWithChildren {
  className?: string;
}

function DialogBody(props: DialogBodyProps) {
  return (
    <div className={clsx("bg-background-secondary p-5 max-h-80 w-full overflow-auto", props.className)}>{props.children}</div>
  );
}

/**
 * @name DialogFooter component
 */
export interface DialogFooterProps extends PropsWithChildren {
  className?: string;
}

function DialogFooter(props: DialogFooterProps) {
  return <div className={clsx("bg-background-secondary md:rounded-b-2xl px-5 py-4", props.className)}>{props.children}</div>;
}

/**
 * @name BaseDialog component
 */
export interface BaseDialogProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

function BaseDialog(props: BaseDialogProps) {
  const rightKnobRef = useRef<HTMLDivElement>(null);
  const leftKnobRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (rightKnobRef.current && leftKnobRef.current) {
      if (info.velocity.y > 0) {
        rightKnobRef.current.style.transform = "rotate(12deg)";
        leftKnobRef.current.style.transform = "rotate(-12deg)";
      } else if (info.velocity.y < 0) {
        rightKnobRef.current.style.transform = "rotate(-12deg)";
        leftKnobRef.current.style.transform = "rotate(12deg)";
      }
    }
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (rightKnobRef.current && leftKnobRef.current) {
      rightKnobRef.current.style.transform = "rotate(0)";
      leftKnobRef.current.style.transform = "rotate(0)";
    }

    if (info.offset.y > 100) {
      props.onClose();
    }
  };

  return (
    <AnimatePresence>
      {props.open && (
        <div className="fixed inset-0 w-dvw h-dvh flex justify-center items-center z-50">
          <motion.div
            className={clsx(
              "w-full h-full inset-0 bg-black-48 z-[60] flex flex-col justify-end md:flex-row md:items-center md:justify-center",
            )}
            onClick={props.onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.dialog
            open={props.open}
            className={clsx(
              "border-0 outline-none fixed bottom-0 md:bottom-auto md:p-0 bg-transparent z-[999] mx-auto max-h-dvh md:shadow-2xl rounded-2xl md:max-w-[36rem] w-full",
            )}
            drag={isMobile && "y"}
            dragConstraints={{ top: 0 }}
            dragSnapToOrigin
            dragElastic={0.01}
            onDragEnd={onDragEnd}
            onDrag={onDrag}
            initial={isMobile ? { y: "100%" } : { opacity: 0 }}
            animate={isMobile ? { y: 0 } : { opacity: 1 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0 }}
            transition={{ ease: "easeOut" }}
          >
            <div className="flex flex-col justify-center items-center md:hidden py-4 px-4 bg-background-primary rounded-t-2xl">
              <div className="flex items-center justify-center w-full">
                <div
                  ref={leftKnobRef}
                  className="bg-gray-400 w-4 h-1 rounded -m-[1px] right-knob"
                  style={{
                    transition: "transform ease-in-out 0.1s",
                  }}
                />
                <div
                  ref={rightKnobRef}
                  className="bg-gray-400 w-4 h-1 rounded -m-[1px] left-knob"
                  style={{
                    transition: "transform ease-in-out 0.1s",
                  }}
                />
              </div>
            </div>

            {props.children}
          </motion.dialog>
        </div>
      )}
    </AnimatePresence>
  );
}

/**
 * @name Dialog component
 */
interface ComposeProps {
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
}

const Dialog = memo(BaseDialog) as MemoExoticComponent<(props: BaseDialogProps) => ReactNode> & ComposeProps;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

export default Dialog;
