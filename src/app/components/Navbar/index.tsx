import Image from "next/image";
import React from "react";
import { SearchBox } from "../SearchBox";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { BiMessageAltMinus } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { LogoIcon } from "../Icons";
import { ProfileOptions } from "../ProfileOptions";
import { IntlLink } from "../IntlLink";
import { useTranslations } from "next-intl";

type Props = {};

export const Navbar = (props: Props) => {
    const i18n = useTranslations();

    return (
        <div className="w-full fixed z-[9999] dark:bg-black bg-white top-0 left-0 border-b-[#0000002b] dark:border-b-[#ffffff3b] border-b border-solid">
            <div className="w-[95%] h-[60px] m-auto flex items-center justify-between">
                <div>
                    <IntlLink
                        href={"/"}
                        className={`text-[25px] font-Poppins font-[600] text-black dark:text-white whitespace-nowrap flex items-center`}
                    >
                        <LogoIcon />
                        <span className="ml-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
                            Geminus
                        </span>
                    </IntlLink>
                </div>
                <SearchBox />
                <div className="relative flex items-center gap-4">
                    <ThemeSwitcher />
                    <IntlLink
                        href={"/upload"}
                        className="h-[38px] flex items-center justify-center rounded-[2px] bg-gray-100 dark:bg-[#ffffff23] hover:bg-[#a0a0a02b] hover:dark:bg-[#aaaaaa23] py-0 px-4"
                    >
                        <HiPlus className="w-[18px] h-[18px] mr-2" />
                        <span className="text-black dark:text-white font-semibold text-base">
                            {i18n("Nav.Upload")}
                        </span>
                    </IntlLink>
                    <IntlLink href={"/messages"} className="ml-4">
                        <RiSendPlaneFill className="w-[26px] h-[26px] text-black dark:text-white" />
                    </IntlLink>
                    <IntlLink href={"/inbox"} className="ml-4">
                        <BiMessageAltMinus className="w-[26px] h-[26px] text-black dark:text-white" />
                    </IntlLink>
                    <ProfileOptions />
                </div>
            </div>
        </div>
    );
};
