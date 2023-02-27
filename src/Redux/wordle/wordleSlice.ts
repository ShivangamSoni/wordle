import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WordleState {
    playing: boolean;
    selected: string;
    guesses: string[][];
    current: {
        guess: number;
        character: number;
    };
}

const initialState: WordleState = {
    playing: true,
    selected: "brick",
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
            state = initialState;
        },
        endGame: (state) => {
            state.playing = false;
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
    extraReducers: {},
});

export const { startGame, endGame, typeCharacter, deleteCharacter, nextGuess } =
    wordleSlice.actions;

export const selectPlaying = (state: RootState) => state.wordle.playing;
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
