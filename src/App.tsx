import { useState } from "react";
import GuessGrid from "./components/GuessGrid";

export default function App() {
    const [guesses, setGuesses] = useState(
        Array.from({ length: 6 }, (_) => Array.from({ length: 5 }, (_) => "")),
    );
    return (
        <main className="flex flex-col items-center justify-between p-4 min-h-screen">
            <div className="grid grid-cols-1 gap-4">
                <GuessGrid guesses={guesses} />
            </div>
            <div className="space-x-4 space-y-4">
                <h1>Keyboard</h1>
            </div>
        </main>
    );
}
