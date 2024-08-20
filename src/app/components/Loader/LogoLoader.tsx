import React from "react";
import { LogoIcon } from "../Icons";

type Props = {};

export const LogoLoader = (props: Props) => {
    return (
        <div className="flex space-x-2 justify-center items-center bg-transparent h-screen">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="animate-bounce [animation-delay:-0.3s]">
                    <LogoIcon width={63} height={60} />
                </div>
                <span className="ml-2 font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
                    Geminus
                </span>
            </div>
        </div>
    );
};
