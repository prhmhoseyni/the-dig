"use client";

import {
  memo,
  useEffect,
  useRef,
  useState,
  type MemoExoticComponent,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { type PanInfo } from "motion";
import clsx from "clsx";

/**
 * @name BottomSheetBody component
 */
export interface BottomSheetBodyProps extends PropsWithChildren {
  className?: string;
}

function BottomSheetBody(props: BottomSheetBodyProps) {
  return (
    <div
      className={clsx(
        "bg-background-primary overflow-auto md:rounded-b-2xl pt-[calc(0rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))] px-4 max-h-[calc(100dvh-56px)] md:max-h-[calc(100dvh-56px)] max-md:max-h-[calc(100dvh-74px)]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

/**
 * @name BaseBottomSheet component
 */
export interface BaseBottomSheetProps extends PropsWithChildren {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

function BaseBottomSheet(props: BaseBottomSheetProps) {
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

  const onDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
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

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
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
      {props.isOpen && (
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
            open={props.isOpen}
            className={clsx(
              "fixed bottom-0 md:bottom-auto md:p-0 bg-transparent z-[999] mx-auto max-h-dvh md:shadow-2xl rounded-2xl md:max-w-[36rem] w-full",
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

              <div className="text-subtitle2 text-start w-full pt-4">
                {props.title}
              </div>
            </div>

            <div className="hidden md:flex items-center justify-between gap-2 py-3 px-4 bg-background-primary rounded-t-2xl">
              <div className="text-subtitle2 py-1">{props.title}</div>
            </div>

            {props.children}
          </motion.dialog>
        </div>
      )}
    </AnimatePresence>
  );
}

/**
 * @name BottomSheet component
 */
interface ComposeProps {
  Body: typeof BottomSheetBody;
}

const BottomSheet = memo(BaseBottomSheet) as MemoExoticComponent<
  (props: BaseBottomSheetProps) => ReactNode
> &
  ComposeProps;
BottomSheet.Body = BottomSheetBody;

export default BottomSheet;
