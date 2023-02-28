import { useEffect, useState } from "react";

import { XMarkIcon } from "@heroicons/react/20/solid";
import GuessTile from "./GuessTile";

import { EXAMPLES } from "../data/HowToExamples";
import RainbowCharacters from "./RainbowCharacters";

interface HowToPlayModalProps {
    onClose: () => void;
}

export default function HowToPlayModal({ onClose }: HowToPlayModalProps) {
    const [exampleRowDone, setExampleRowDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setExampleRowDone(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            <button
                className="w-5 h-5 absolute -top-6 -right-6"
                aria-label="Close Hot To Play"
                title="Close Hot To Play"
                onClick={onClose}
            >
                <XMarkIcon />
            </button>

            <div className="grid gap-4">
                <div>
                    <h2 className="text-2xl font-extrabold tracking-wide">
                        <RainbowCharacters phrase="How To Play" />
                    </h2>
                    <h3 className="text-lg font-semibold">
                        Guess the Wordle in 6 Tries.
                    </h3>
                </div>

                <ul className="grid gap-2 list-disc list-inside">
                    <li>Each Guess must be a 5-letter Word.</li>
                    <li>
                        The color of the tiles will change to show how close
                        your guess was to the word.
                    </li>
                </ul>

                <div className="grid gap-4">
                    <h4>Examples</h4>

                    {EXAMPLES.map(({ id, word, description }) => (
                        <div key={id} className="grid gap-2">
                            <div className="flex gap-1">
                                {word.map((word, i) => (
                                    <GuessTile
                                        key={`${i}-${word.value}`}
                                        rowDone={exampleRowDone}
                                        included={word.included || false}
                                        positionCorrect={
                                            word.positionCorrect || false
                                        }
                                    >
                                        {word.value}
                                    </GuessTile>
                                ))}
                            </div>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
