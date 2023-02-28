import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function KeyboardKey({
    children,
    className,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) {
    return (
        <button
            // Prevent Keyboard Trigger Because Keyboard Events are Already active
            onKeyDown={(e) => e.preventDefault()}
            className="bg-black dark:bg-white text-white dark:text-black font-bold p-1.5 flex items-center justify-center cursor-pointer sm:p-3 sm:text-xl md:p-5 md:text-2xl"
            {...props}
        >
            {children}
        </button>
    );
}
