import { useAppDispatch, useAppSelector } from "./hooks/Redux";
import {
    deleteCharacter,
    endGame,
    nextGuess,
    selectCurrentGuess,
    selectGuesses,
    selectGuessNumber,
    selectSelectedWord,
    typeCharacter,
} from "./Redux/wordle/wordleSlice";
import { pushNotification } from "./Redux/notification/notificationSlice";

import GuessGrid from "./components/GuessGrid";
import Keyboard from "./components/Keyboard";
import Notification from "./components/Notification";

export default function App() {
    const dispatch = useAppDispatch();
    const currentGuess = useAppSelector(selectCurrentGuess);
    const selectedWord = useAppSelector(selectSelectedWord);
    const guessNumber = useAppSelector(selectGuessNumber);

    function onCharacter(char: string) {
        dispatch(typeCharacter(char));
    }

    function onBackspace() {
        dispatch(deleteCharacter());
    }

    async function onEnter() {
        if (currentGuess.length < 5) {
            dispatch(
                pushNotification({
                    message: "Not Enough Letters",
                    type: "error",
                }),
            );
            return;
        }

        // Check if Legit Word
        try {
            const res = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`,
            );
            if (!res.ok) {
                throw Error;
            }
        } catch (e) {
            dispatch(
                pushNotification({
                    message: `"${currentGuess.toUpperCase()}" is not a Word`,
                    type: "error",
                }),
            );
            return;
        }

        // If Matched then Show Winner & End Game
        if (currentGuess.toLowerCase() === selectedWord.toLowerCase()) {
            dispatch(
                pushNotification({
                    message: `You Win: The Word was "${selectedWord.toUpperCase()}"`,
                    type: "success",
                }),
            );
            dispatch(endGame());
            return;
        }

        // If guesses Done Show Loser, Show Word & End Game
        if (guessNumber + 1 >= 6) {
            dispatch(
                pushNotification({
                    message: `No More Guesses Left. Word was "${selectedWord.toUpperCase()}"`,
                    type: "error",
                }),
            );
            dispatch(endGame());
            return;
        }

        // Next Guess
        dispatch(nextGuess());
    }

    return (
        <main className="flex flex-col items-center justify-between p-4 min-h-screen">
            <GuessGrid />
            <Keyboard
                onCharacterClick={onCharacter}
                onBackspaceClick={onBackspace}
                onEnterClick={onEnter}
            />

            <Notification />
        </main>
    );
}
