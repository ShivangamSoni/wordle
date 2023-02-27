import { ReactNode } from "react";

interface GuessTileProps {
    children: ReactNode;
    cellIndex: number;
}

export default function GuessTile({ children, cellIndex }: GuessTileProps) {
    return (
        <span
            className={`bg-slate-800 text-white font-bold p-4 w-4 h-4 flex items-center justify-center`}
        >
            {children}
        </span>
    );
}
