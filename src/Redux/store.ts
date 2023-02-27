import { configureStore } from "@reduxjs/toolkit";
import wordleReducer from "./wordle/wordleSlice";

export const store = configureStore({
    reducer: {
        wordle: wordleReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
