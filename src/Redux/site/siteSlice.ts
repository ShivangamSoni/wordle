import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SiteState {
    mode: "dark" | "light";
}

const initialState: SiteState = {
    mode: "dark",
};

export const siteSlice = createSlice({
    name: "site",
    initialState,
    reducers: {
        toggleMode: (state) => {
            const { mode } = state;
            if (mode === "dark") {
                state.mode = "light";
            } else {
                state.mode = "dark";
            }
        },
    },
});

export const { toggleMode } = siteSlice.actions;

export const selectMode = (state: RootState) => state.site.mode;

export default siteSlice.reducer;
