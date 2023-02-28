import { useAppDispatch, useAppSelector } from "../hooks/Redux";
import { selectMode, toggleMode } from "../Redux/site/siteSlice";

const TEXT_COLORS = {
    dark: [
        "text-emerald-400",
        "text-amber-400",
        "text-sky-400",
        "text-rose-400",
        "text-fuchsia-400",
        "text-cyan-400",
    ],
    light: [
        "text-emerald-600",
        "text-amber-600",
        "text-sky-600",
        "text-rose-600",
        "text-fuchsia-600",
        "text-cyan-600",
    ],
};

export default function Header() {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(selectMode);

    const colors = TEXT_COLORS[mode];

    return (
        <div>
            <header className="w-full max-w-screen-lg m-auto flex items-center justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-widest text-black dark:text-white text- ">
                    {"wordle".split("").map((c, i) => (
                        <span
                            className={
                                colors[
                                    Math.floor(Math.random() * colors.length)
                                ]
                            }
                            key={`${i}-${c}`}
                        >
                            {c}
                        </span>
                    ))}
                </h1>

                <ul>
                    <li>
                        <input
                            className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-sky-500 outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-violet-600 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-violet-600 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="checkbox"
                            role="switch"
                            aria-label={`Switch to ${
                                mode === "dark" ? "Light" : "Dark"
                            } Mode`}
                            title={`Switch to ${
                                mode === "dark" ? "Light" : "Dark"
                            } Mode`}
                            checked={mode === "dark"}
                            onChange={() => dispatch(toggleMode())}
                        />
                    </li>
                </ul>
            </header>
        </div>
    );
}
