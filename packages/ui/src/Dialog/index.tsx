import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dialog(props: PropsWithChildren<Props>) {
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
              "fixed flex flex-col justify-center text-center gap-5 bottom-4 md:bottom-auto bg-background-primary p-4 z-[70] mx-auto max-h-dvh md:shadow-2xl rounded-2xl md:max-w-[36rem] w-[calc(100%-2rem)]",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut" }}
          >
            {props.children}
          </motion.dialog>
        </div>
      )}
    </AnimatePresence>
  );
}
