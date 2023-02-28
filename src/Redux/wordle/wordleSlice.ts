import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getRandomWord } from "../../data/words";

interface WordleState {
    state: "playing" | "paused" | "won" | "lost";
    selected: string;
    guesses: string[][];
    current: {
        guess: number;
        character: number;
    };
}

const initialState: WordleState = {
    state: "paused",
    selected: getRandomWord().toLowerCase(),
    guesses: Array.from({ length: 6 }, (_) =>
        Array.from({ length: 5 }, (_) => ""),
    ),
    current: {
        guess: 0,
        character: 0,
    },
};

export const wordleSlice = createSlice({
    name: "wordle",
    initialState,
    reducers: {
        startGame: (state) => {
            return {
                ...initialState,
                selected: getRandomWord().toLowerCase(),
                state: "playing",
            };
        },
        endGame: (state, action: PayloadAction<boolean>) => {
            state.state = action.payload ? "won" : "lost";
        },
        pauseGame: (state) => {
            state.state = "paused";
        },
        resumeGame: (state) => {
            state.state = "playing";
        },
        typeCharacter: (state, action: PayloadAction<string>) => {
            const char = action.payload.toLowerCase();
            const { guess, character } = state.current;

            if (character === 5) {
                return state;
            }

            state.guesses[guess][character] = char;

            let newChar = character + 1;
            newChar = newChar >= 5 ? 5 : newChar;
            state.current.character = newChar;
        },
        deleteCharacter: (state) => {
            const { guess, character } = state.current;
            if (character === 0 && state.guesses[guess][character] === "") {
                return state;
            }

            let newChar = character - 1;
            state.guesses[guess][newChar] = "";
            state.current.character = newChar;
        },
        nextGuess: (state) => {
            state.current.guess++;
            state.current.character = 0;
        },
    },
});

export const {
    startGame,
    endGame,
    pauseGame,
    resumeGame,
    typeCharacter,
    deleteCharacter,
    nextGuess,
} = wordleSlice.actions;

export const selectGameState = (state: RootState) => state.wordle.state;
export const selectGuesses = (state: RootState) => state.wordle.guesses;
export const selectSelectedWord = (state: RootState) => state.wordle.selected;
export const selectCurrentGuess = (state: RootState) => {
    const {
        guesses,
        current: { guess },
    } = state.wordle;
    return guesses[guess].join("");
};
export const selectGuessNumber = (state: RootState) =>
    state.wordle.current.guess;

export default wordleSlice.reducer;
