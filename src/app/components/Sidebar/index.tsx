"use client";

import { useAppSelector } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FOLLOWING_DATA, IUser, NAV_DATA, USER_DATA } from "../../../constants";
import { IntlLink } from "../IntlLink";

type SidebarProps = {};

export const Sidebar = (SidebarProps: SidebarProps) => {
    const profile = useAppSelector((state) => state.auth.me);
    const pathname = usePathname();
    const locale = useLocale();
    const i18n = useTranslations();
    const [followingList, setFollowingList] = useState<IUser[]>([]);

    useEffect(() => {
        getFollowings();
    }, []);

    const getFollowings = () => {
        const foundUser = FOLLOWING_DATA.find(
            (user) => user.userId === profile.id
        );
        const followingIds = foundUser?.following_users;

        const followingUsers = USER_DATA.filter((user) =>
            followingIds?.includes(user.id)
        );
        setFollowingList(followingUsers);
    };

    return (
        <div className="fixed w-60 h-full flex flex-col items-stretch mr-2 py-5 z-[999]">
            <div className="mb-2 p-0">
                <div className="flex flex-col gap-2">
                    {NAV_DATA.map((nav, index) => (
                        <IntlLink
                            key={index}
                            href={nav.path}
                            className={`relative flex justify-start items-center p-2 rounded-md text-2xl whitespace-nowrap hover:bg-[#ffffff20] ${
                                pathname === `/${locale}${nav.path}`
                                    ? "text-[#a376ff]"
                                    : "text-black dark:text-white"
                            }`}
                        >
                            {nav.icon}
                            <span className="text-lg font-bold ml-2">
                                {i18n(nav.title)}
                            </span>
                        </IntlLink>
                    ))}
                    <IntlLink
                        href={`/profile/${profile.user_link}`}
                        className="relative flex justify-start items-center p-2 rounded-md text-2xl whitespace-nowrap hover:bg-[#ffffff20]"
                    >
                        <Image
                            src={profile.imageUrl}
                            alt="user-profile"
                            width={24}
                            height={24}
                            className="size-6 object-cover rounded-full"
                        />
                        <span
                            className={`text-lg font-bold ml-2 ${
                                pathname ===
                                `/${locale}/profile/${profile.user_link}`
                                    ? "text-[#a376ff]"
                                    : "text-black dark:text-white"
                            }`}
                        >
                            {i18n("Nav.Profile")}
                        </span>
                    </IntlLink>
                </div>
            </div>
            <span className="w-full h-[1px] bg-[#0000002b] dark:bg-[#ffffff1f]"></span>
            <div className="my-2 p-0">
                <h2 className="mb-1 font-semibold text-sm text-[#000000de] dark:text-[#ffffffbf]">
                    {i18n("Nav.FollowingAccounts")}
                </h2>
                <div className="flex flex-col">
                    {followingList.map((user, index) => (
                        <FollowingAccount key={index} user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FollowingAccount = ({ user }: any) => {
    return (
        <div className="relative rounded-md hover:bg-[#ffffff20]">
            <IntlLink
                href={`/profile/${user.user_link}`}
                className="relative flex justify-start items-center p-2"
            >
                <Image
                    src={user.imageUrl}
                    alt="user-profile"
                    width={32}
                    height={32}
                    className="size-8 object-cover rounded-full"
                />
                <div className="flex flex-col ml-2">
                    <span className="text-sm font-bold text-[#000000c9] dark:text-[#ffffffe6] max-w-[145px] -mt-[2px]">
                        {user.name}
                    </span>
                    <span className="text-xs font-medium text-[#000000bf] dark:text-[#ffffffbf] max-w-[145px]">
                        {user.user_link}
                    </span>
                </div>
            </IntlLink>
        </div>
    );
};
