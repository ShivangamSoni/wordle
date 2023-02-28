import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NotificationShape {
    message: string;
    type: "error" | "success";
}

const initialState: NotificationShape[] = [];

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        pushNotification: (state, action: PayloadAction<NotificationShape>) => {
            const notification = action.payload;
            const found = state.find(
                ({ type, message }) =>
                    type === notification.type &&
                    message === notification.message,
            );
            if (!found) {
                // Push Unique Notifications Only
                state.push(notification);
            }
        },
        popNotification: (state) => {
            state.pop();
        },
        clearNotification: (state) => {
            return initialState;
        },
    },
});

export const { pushNotification, popNotification, clearNotification } =
    notificationSlice.actions;

export const selectFirstNotification = (state: RootState) =>
    state.notification[0];

export default notificationSlice.reducer;
