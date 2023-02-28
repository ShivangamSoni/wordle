export const EXAMPLES: {
    id: number;
    word: {
        value: string;
        included?: boolean;
        positionCorrect?: boolean;
    }[];
    description: string;
}[] = [
    {
        id: 1,
        word: [
            {
                value: "w",
                included: true,
                positionCorrect: true,
            },
            {
                value: "e",
            },
            {
                value: "a",
            },
            {
                value: "r",
            },
            {
                value: "y",
            },
        ],
        description: "W is in word and in the correct spot.",
    },
    {
        id: 2,
        word: [
            {
                value: "p",
            },
            {
                value: "i",
                included: true,
            },
            {
                value: "l",
            },
            {
                value: "l",
            },
            {
                value: "s",
            },
        ],
        description: "I is in word but in the wrong spot.",
    },
];
