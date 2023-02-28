import { useAppSelector } from "../hooks/Redux";
import { selectMode } from "../Redux/site/siteSlice";

import { TEXT_COLORS } from "../data/TextColors";

interface RainbowCharactersProps {
    phrase: string;
}

export default function RainbowCharacters({ phrase }: RainbowCharactersProps) {
    const mode = useAppSelector(selectMode);
    const colors = TEXT_COLORS[mode];

    return (
        <>
            {phrase.split("").map((c, i) => (
                <span
                    key={`${i}-${c}`}
                    className={
                        colors[Math.floor(Math.random() * colors.length)]
                    }
                >
                    {c}
                </span>
            ))}
        </>
    );
}
