"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

export const Appearance = (props: Props) => {
    const { theme, setTheme } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        setSelectedTheme(theme);
    }, [theme]);

    const handleSetTheme = () => {
        if (selectedTheme) {
            setTheme(selectedTheme);
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setSelectedTheme(newTheme);
    };

    return (
        <div id="appearance" className="h-fit">
            <div>
                <h3 className="mb-2 text-2xl text-black dark:text-white font-medium">
                    Appearance
                </h3>
                <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                    Customize the appearance of the app. Automatically switch
                    between day and night themes.
                </p>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <div>
                    <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                        Theme
                    </h3>
                    <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                        Select the theme for the dashboard.
                    </p>
                </div>
                <div className="grid max-w-md grid-cols-2 gap-8 pt-2 mt-2">
                    <div>
                        <div
                            className={`items-center rounded-md border-2 ${
                                selectedTheme === "light"
                                    ? "border-[#000000] dark:border-[#ffffff]"
                                    : "border-[#c9c9c9] dark:border-[#27272a]"
                            } p-1`}
                            onClick={() => handleThemeChange("light")}
                        >
                            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-[#ecedef]"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]"></div>
                                </div>
                            </div>
                        </div>
                        <span className="block w-full p-2 text-sm text-black dark:text-white text-center font-normal">
                            Light
                        </span>
                    </div>
                    <div>
                        <div
                            className={`items-center rounded-md border-2 ${
                                selectedTheme === "dark"
                                    ? "border-[#000000] dark:border-[#ffffff]"
                                    : "border-[#c9c9c9] dark:border-[#27272a]"
                            } p-1`}
                            onClick={() => handleThemeChange("dark")}
                        >
                            <div className="space-y-2 rounded-sm bg-neutral-900 p-2">
                                <div className="space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                    <div className="h-2 w-[80px] rounded-lg bg-neutral-400"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400"></div>
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-neutral-400"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400"></div>
                                </div>
                                <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                    <div className="h-4 w-4 rounded-full bg-neutral-400"></div>
                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400"></div>
                                </div>
                            </div>
                        </div>
                        <span className="block w-full p-2 text-sm text-black dark:text-white text-center font-normal">
                            Dark
                        </span>
                    </div>
                </div>
                <div
                    className="bg-[#8556fe] text-white font-semibold py-2 px-5 w-fit h-10 rounded-md cursor-pointer"
                    onClick={handleSetTheme}
                >
                    Save
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
        </div>
    );
};
