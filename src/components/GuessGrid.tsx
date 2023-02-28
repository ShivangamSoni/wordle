import {
    selectGuessNumber,
    selectGuesses,
    selectGameState,
    selectSelectedWord,
} from "../Redux/wordle/wordleSlice";
import { useAppSelector } from "../hooks/Redux";

import GuessTile from "./GuessTile";

export default function GuessGrid() {
    const guesses = useAppSelector(selectGuesses);
    const gameState = useAppSelector(selectGameState);
    const currentGuessIndex = useAppSelector(selectGuessNumber);
    const selectedWord = useAppSelector(selectSelectedWord);

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
                        {word.map((char, cell) => {
                            const included =
                                char.toLocaleLowerCase() !== "" &&
                                selectedWord.includes(char.toLowerCase());
                            const positionCorrect =
                                selectedWord[cell].toLowerCase() ===
                                char.toLowerCase();

                            const finished =
                                gameState === "won" || gameState === "lost";

                            const rowDone =
                                (finished && row <= currentGuessIndex) ||
                                row < currentGuessIndex;

                            return (
                                <GuessTile
                                    key={`${row}-${cell}-${char}`}
                                    rowDone={rowDone}
                                    included={included}
                                    positionCorrect={positionCorrect}
                                >
                                    {char}
                                </GuessTile>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
