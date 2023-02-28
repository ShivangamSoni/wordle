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
        <div className="fixed z-10 inset-0 backdrop-blur-lg flex items-center justify-center gap-4">
            <div className="space-y-6 bg-white p-8 shadow-lg rounded-lg">
                <div
                    className={`text-center ${
                        won ? "text-emerald-400" : "text-rose-500"
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
            </div>
        </div>,
        document.getElementById("modal") as HTMLDivElement,
    );
}
