import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return createPortal(
        <div className="fixed z-10 inset-0 backdrop-blur-lg flex items-center justify-center gap-4">
            <div className="w-11/12 max-w-screen-sm bg-slate-900 dark:bg-white text-white dark:text-black p-8 shadow-lg rounded-lg">
                {children}
            </div>
        </div>,
        document.getElementById("modal") as HTMLDivElement,
    );
}
