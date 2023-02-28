import {
    selectGuessNumber,
    selectPlaying,
    selectSelectedWord,
} from "../Redux/wordle/wordleSlice";
import { useAppSelector } from "../hooks/Redux";

interface GuessTileProps {
    children: string;
    cellIndex: number;
    rowIndex: number;
}

export default function GuessTile({
    children,
    cellIndex,
    rowIndex,
}: GuessTileProps) {
    const playing = useAppSelector(selectPlaying);
    const currentGuessIndex = useAppSelector(selectGuessNumber);
    const selectedWord = useAppSelector(selectSelectedWord);

    const rowDone = rowIndex < currentGuessIndex;
    const included =
        children.toLocaleLowerCase() !== "" &&
        selectedWord.includes(children.toLowerCase());
    const positionCorrect =
        selectedWord[cellIndex].toLowerCase() === children.toLowerCase();

    let style = "";
    if ((!playing && rowIndex <= currentGuessIndex) || (rowDone && included)) {
        style = "active ";
        if (positionCorrect) {
            style += "bg-emerald-400";
        } else if (included) {
            style += "bg-amber-400";
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
