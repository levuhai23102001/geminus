import React from "react";

type Props = {};

export const DotLoader = (props: Props) => {
    return (
        <div className="flex space-x-2 justify-center items-center bg-transparent h-32 mt-4">
            <span className="sr-only">Loading...</span>
            <div className="h-4 w-4 bg-[#6C31E3] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-[#6C31E3] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-[#6C31E3] rounded-full animate-bounce"></div>
        </div>
    );
};
