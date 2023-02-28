import { selectGuesses } from "../Redux/wordle/wordleSlice";
import { useAppSelector } from "../hooks/Redux";

import GuessTile from "./GuessTile";

export default function GuessGrid() {
    const guesses = useAppSelector(selectGuesses);

    return (
        <div className="grid grid-cols-1 gap-1 md:gap-2 lg:gap-4">
            {guesses.map((word, row) => {
                const wordStr = word.join("");

                return (
                    <div
                        key={`${row}-${wordStr}`}
                        aria-label={wordStr}
                        className="flex gap-1 md:gap-2 lg:gap-4"
                    >
                        {word.map((char, cell) => (
                            <GuessTile
                                key={`${row}-${cell}-${char}`}
                                cellIndex={cell}
                                rowIndex={row}
                            >
                                {char}
                            </GuessTile>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
