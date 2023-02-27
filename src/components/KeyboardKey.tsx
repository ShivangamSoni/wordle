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
            className="bg-slate-800 text-white text-3xl font-bold p-6 w-6 h-6 flex items-center justify-center"
            {...props}
        >
            {children}
        </button>
    );
}
