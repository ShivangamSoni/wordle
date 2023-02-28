import { createPortal } from "react-dom";

import { useAppDispatch, useAppSelector } from "../hooks/Redux";
import {
    popNotification,
    selectFirstNotification,
} from "../Redux/notification/notificationSlice";

import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Notification() {
    const dispatch = useAppDispatch();
    const notification = useAppSelector(selectFirstNotification);

    function closeNotification() {
        dispatch(popNotification());
    }

    if (!notification) {
        return null;
    }

    const { message, type } = notification;

    return createPortal(
        <div
            className={`fixed z-10 top-2 left-1/2 -translate-x-1/2 shadow-xl py-6 px-2 w-11/12 max-w-screen-sm rounded-lg text-white font-bold ${
                type === "error" ? "bg-rose-700" : "bg-emerald-700"
            }`}
        >
            <p className="text-lg">{message}</p>
            <button
                className="w-5 h-5 absolute top-0 right-0"
                aria-label="Close Notification"
                title="Close Notification"
                onClick={closeNotification}
            >
                <XMarkIcon />
            </button>
        </div>,
        document.getElementById("notification") as HTMLDivElement,
    );
}
