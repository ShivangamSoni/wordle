import React from "react";
import ReactDOM from "react-dom/client";

// Sttae
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
