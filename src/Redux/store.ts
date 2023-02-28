import { configureStore } from "@reduxjs/toolkit";

import wordleReducer from "./wordle/wordleSlice";
import notificationReducer from "./notification/notificationSlice";
import siteReducer from "./site/siteSlice";

export const store = configureStore({
    reducer: {
        wordle: wordleReducer,
        notification: notificationReducer,
        site: siteReducer,
    },
    devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
