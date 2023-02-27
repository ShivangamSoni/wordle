import { useState } from "react";

import GuessGrid from "./components/GuessGrid";
import Keyboard from "./components/Keyboard";

export default function App() {
    const [guesses, setGuesses] = useState(
        Array.from({ length: 6 }, (_) => Array.from({ length: 5 }, (_) => "")),
    );
    return (
        <main className="flex flex-col items-center justify-between p-4 min-h-screen">
            <GuessGrid guesses={guesses} />
            <Keyboard />
        </main>
    );
}
