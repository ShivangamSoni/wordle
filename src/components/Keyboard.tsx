import { useEffect } from "react";

import {
    PaperAirplaneIcon as EnterIcon,
    BackspaceIcon,
} from "@heroicons/react/24/outline";

import KeyboardKey from "./KeyboardKey";

interface KeyBoardProps {
    onCharacterClick: (char: string) => void;
    onEnterClick: () => void;
    onBackspaceClick: () => void;
}

export default function Keyboard({
    onCharacterClick,
    onEnterClick,
    onBackspaceClick,
}: KeyBoardProps) {
    useEffect(() => {
        function handler(e: KeyboardEvent) {
            const { altKey, ctrlKey, metaKey, key } = e;
            const withKey = altKey || ctrlKey || metaKey;

            if (!withKey && key.length === 1 && key.match(/^[a-zA-z]{1,1}$/)) {
                onCharacterClick(key);
            } else if (key === "Enter") {
                onEnterClick();
            } else if (key === "Backspace") {
                onBackspaceClick();
            }
        }

        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onCharacterClick, onEnterClick, onBackspaceClick]);

    return (
        <div className="grid grid-cols-1 grid-rows-3 gap-1 md:gap-2 lg:gap-4">
            {KEYBOARD_KEYS.map((row, idx) => (
                <div
                    key={idx}
                    className={`flex items-center justify-center gap-1 md:gap-2 lg:gap-4`}
                >
                    {row.map(({ id, value }) => {
                        let char = String.fromCharCode(value);

                        if (value === 10) {
                            return (
                                <KeyboardKey
                                    aria-label="Enter"
                                    title="Enter"
                                    key={id}
                                    onClick={onEnterClick}
                                >
                                    <span className="pointer-events-none">
                                        <EnterIcon className="w-6 h-6" />
                                    </span>
                                </KeyboardKey>
                            );
                        } else if (value === 8) {
                            return (
                                <KeyboardKey
                                    aria-label="Backspace"
                                    title="Backspace"
                                    key={id}
                                    onClick={onBackspaceClick}
                                >
                                    <span className="pointer-events-none">
                                        <BackspaceIcon className="w-6 h-6" />
                                    </span>
                                </KeyboardKey>
                            );
                        }

                        return (
                            <KeyboardKey
                                aria-label={char}
                                title={char}
                                key={id}
                                onClick={() => onCharacterClick(char)}
                            >
                                {char}
                            </KeyboardKey>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

const KEYBOARD_KEYS = [
    [
        {
            id: 81,
            value: 81,
        },
        {
            id: 87,
            value: 87,
        },
        {
            id: 69,
            value: 69,
        },
        {
            id: 82,
            value: 82,
        },
        {
            id: 84,
            value: 84,
        },
        {
            id: 89,
            value: 89,
        },
        {
            id: 85,
            value: 85,
        },
        {
            id: 73,
            value: 73,
        },
        {
            id: 79,
            value: 79,
        },
        {
            id: 80,
            value: 80,
        },
    ],
    [
        {
            id: 65,
            value: 65,
        },
        {
            id: 83,
            value: 83,
        },
        {
            id: 68,
            value: 68,
        },
        {
            id: 70,
            value: 70,
        },
        {
            id: 71,
            value: 71,
        },
        {
            id: 72,
            value: 72,
        },
        {
            id: 74,
            value: 74,
        },
        {
            id: 75,
            value: 75,
        },
        {
            id: 76,
            value: 76,
        },
    ],
    [
        {
            id: 8,
            value: 8,
        },
        {
            id: 90,
            value: 90,
        },
        {
            id: 88,
            value: 88,
        },
        {
            id: 67,
            value: 67,
        },
        {
            id: 86,
            value: 86,
        },
        {
            id: 66,
            value: 66,
        },
        {
            id: 78,
            value: 78,
        },
        {
            id: 77,
            value: 77,
        },
        {
            id: 10,
            value: 10,
        },
    ],
];
