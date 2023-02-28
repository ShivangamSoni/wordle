interface GuessTileProps {
    children: string;
    rowDone: boolean;
    included: boolean;
    positionCorrect: boolean;
}

export default function GuessTile({
    children,
    rowDone,
    included,
    positionCorrect,
}: GuessTileProps) {
    let style = "";
    if (rowDone) {
        style = "active ";

        if (positionCorrect) {
            style += "bg-emerald-500 dark:bg-emerald-400";
        } else if (included) {
            style += "bg-amber-500 dark:bg-amber-400";
        } else {
            style += "bg-slate-500 dark:bg-slate-400";
        }
    }

    return (
        <div className="relative p-4 sm:p-5 md:p-6">
            <div className={`absolute inset-0 tileContent ${style}`}>
                <div className="absolute inset-0 bg-black dark:bg-white"></div>
            </div>
            <span className="absolute inset-0 text-white dark:text-black font-bold uppercase flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                {children}
            </span>
        </div>
    );
}
