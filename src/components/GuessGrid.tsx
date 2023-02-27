import GuessTile from "./GuessTile";

interface GuessGridProps {
    guesses: string[][];
}

export default function GuessGrid({ guesses }: GuessGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4">
            {guesses.map((word, row) => {
                const wordStr = word.join("");
                return (
                    <div
                        key={`${row}-${wordStr}`}
                        aria-label={wordStr}
                        className="flex gap-4"
                    >
                        {word.map((char, cell) => (
                            <GuessTile
                                key={`${row}-${cell}-${char}`}
                                cellIndex={cell}
                            >
                                {char}
                            </GuessTile>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
