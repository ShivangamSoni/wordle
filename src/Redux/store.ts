import { configureStore } from "@reduxjs/toolkit";
import wordleReducer from "./wordle/wordleSlice";
import notificationReducer from "./notification/notificationSlice";

export const store = configureStore({
    reducer: {
        wordle: wordleReducer,
        notification: notificationReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
