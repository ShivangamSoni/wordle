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

    let style = "bg-slate-800";
    if ((!playing && rowIndex <= currentGuessIndex) || (rowDone && included)) {
        if (positionCorrect) {
            style = "bg-emerald-400";
        } else if (included) {
            style = "bg-amber-300";
        }
    }

    return (
        <span
            className={`text-white font-bold uppercase p-4 w-4 h-4 flex items-center justify-center ${style}`}
        >
            {children}
        </span>
    );
}
