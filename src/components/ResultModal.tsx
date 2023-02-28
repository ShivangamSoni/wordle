import { createPortal } from "react-dom";

import { useAppDispatch, useAppSelector } from "../hooks/Redux";
import {
    selectWon,
    selectSelectedWord,
    startGame,
} from "../Redux/wordle/wordleSlice";

export default function StartScreen() {
    const dispatch = useAppDispatch();
    const won = useAppSelector(selectWon);
    const selectedWord = useAppSelector(selectSelectedWord);

    return createPortal(
        <div className="fixed inset-0 backdrop-blur-lg flex flex-col items-center justify-center gap-4">
            <div
                className={`text-center ${
                    won ? "text-emerald-500" : "text-rose-500"
                }`}
            >
                <h2 className="text-2xl font-bold">
                    {won ? "You Win" : "You Loose"}
                </h2>
                <p>
                    Word was:{" "}
                    <span className="italic font-semibold">
                        "{selectedWord.toUpperCase()}"
                    </span>
                </p>
            </div>
            <button
                className={`text-white text-sm font-bold uppercase py-3 px-6 rounded-full ${
                    won ? "bg-emerald-500" : "bg-rose-500"
                }`}
                onClick={() => dispatch(startGame())}
            >
                Start a New Game
            </button>
        </div>,
        document.getElementById("modal") as HTMLDivElement,
    );
}
