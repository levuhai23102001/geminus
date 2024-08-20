import React from "react";
import { IoSearchOutline } from "react-icons/io5";

type Props = {};

export const SearchBox = (props: Props) => {
    return (
        <div className="relative min-w-[200px] w-[516px] px-[8px]">
            <div className="relative flex items-center m-0 px-[16px] py-[12px] rounded-[92px] bg-gray-100 dark:bg-[#2f2f2f] overflow-hidden">
                <input
                    type="text"
                    className="w-full text-[16px] font-[400] border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                    placeholder="Search"
                />
                <span className="w-[1px] h-[28px] bg-[#ffffff1f] my-[-3px]"></span>
                <button className="cursor-pointer ml-0 -mr-4 -my-3 pl-3 pr-4 py-[13px] border-0 outline-none bg-transparent text-[#767676] hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-[#4e4e4e]">
                    <IoSearchOutline className="w-[22px] h-[22px]" />
                </button>
            </div>
        </div>
    );
};
