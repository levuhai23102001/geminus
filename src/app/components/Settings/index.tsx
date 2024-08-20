"use client";

import { SETTINGS_NAV_DATA } from "@/constants";
import React, { useEffect, useState } from "react";
import { Appearance } from "./Appearance";
import { Display } from "./Display";
import { ManageAccount } from "./ManageAccount";
import { Notifications } from "./Notifications";
import { Privacy } from "./Privacy";
import "./settings.css";

type Props = {};

export const SettingFC = (props: Props) => {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            if (!window.location.hash) {
                setActiveHash(SETTINGS_NAV_DATA[0].path);
            } else {
                setActiveHash(window.location.hash);
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const handleClickToTop = (
        event: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveHash(`#${targetId}`);
        }
    };

    return (
        <div className="flex max-w-[80%] max-h-[calc(100vh-60px)] gap-10 p-5 mx-auto">
            <div className="w-[28%] h-full">
                <div className="flex flex-col">
                    {SETTINGS_NAV_DATA.map((item) => (
                        <a
                            key={item.id}
                            href={item.path}
                            onClick={(event) =>
                                handleClickToTop(event, item.path.split("#")[1])
                            }
                            className={`relative flex justify-start items-center py-2 px-4 rounded-md text-base font-medium whitespace-nowrap text-black dark:text-white ${
                                activeHash === `${item.path}`
                                    ? "dark:bg-[#ffffff20] bg-gray-100"
                                    : "hover:underline"
                            }`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-[72%] max-h-full overflow-auto setting-content">
                <ManageAccount />
                <Privacy />
                <Appearance />
                <Notifications />
                <Display />
            </div>
        </div>
    );
};
