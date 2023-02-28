import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getRandomWord } from "../../data/words";

interface WordleState {
    playing: boolean;
    won: boolean;
    selected: string;
    guesses: string[][];
    current: {
        guess: number;
        character: number;
    };
}

const initialState: WordleState = {
    playing: true,
    won: false,
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
                playing: true,
            };
        },
        endGame: (state, action: PayloadAction<boolean>) => {
            state.playing = false;
            state.won = action.payload;
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

export const { startGame, endGame, typeCharacter, deleteCharacter, nextGuess } =
    wordleSlice.actions;

export const selectPlaying = (state: RootState) => state.wordle.playing;
export const selectWon = (state: RootState) => state.wordle.won;
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
