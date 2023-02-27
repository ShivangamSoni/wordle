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

import GuessGrid from "./components/GuessGrid";
import Keyboard from "./components/Keyboard";

export default function App() {
    const dispatch = useAppDispatch();
    const guesses = useAppSelector(selectGuesses);
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
            alert("Not Enough Letters");
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
            alert(`"${currentGuess}" is not a Word`);
            return;
        }

        // If Matched then SHow Winner & End Game
        if (currentGuess.toLowerCase() === selectedWord.toLowerCase()) {
            alert(`You Win: The Word was ${selectedWord}`);
            dispatch(endGame());
            return;
        }

        // If guesses Done Show Loser, Show Word & End Game
        if (guessNumber + 1 >= 6) {
            alert(`No More Guesses Left. Word was ${selectedWord}`);
            dispatch(endGame());
            return;
        }

        // Next Guess
        dispatch(nextGuess());
    }

    return (
        <main className="flex flex-col items-center justify-between p-4 min-h-screen">
            <GuessGrid guesses={guesses} />
            <Keyboard
                onCharacterClick={onCharacter}
                onBackspaceClick={onBackspace}
                onEnterClick={onEnter}
            />
        </main>
    );
}
