"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IntlLink } from "../IntlLink";
import { Settings } from "lucide-react";
import { RiShareForwardLine } from "react-icons/ri";
import { ProfileTabs } from "./ProfileTabs";
import { EditProfile } from "./EditProfile";
import { FOLLOWING_DATA } from "@/constants";
import { DialogFollowers } from "./DialogFollowers";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getProfile } from "@/lib/features/User/userSlice";
import { loadMe } from "@/lib/features/Auth/authSlice";
import { LuLock } from "react-icons/lu";

type Props = {};

export const Profile = (props: Props) => {
    const { user_link } = useParams();
    const decodedUserLink = decodeURIComponent(user_link as string);
    const authProfile = useAppSelector((state) => state.auth.me);
    const profile = useAppSelector((state) => state.user.profile);
    const dispatch = useAppDispatch();
    const [isFollowing, setIsFollowing] = useState<boolean>(false);

    useEffect(() => {
        if (decodedUserLink !== authProfile.user_link) {
            dispatch(getProfile(decodedUserLink));
        } else {
            dispatch(loadMe());
        }
    }, [dispatch, decodedUserLink, authProfile]);

    useEffect(() => {
        if (profile) {
            const followingIds = FOLLOWING_DATA.find(
                (data) => data.userId === authProfile.id
            )?.following_users;
            if (followingIds && followingIds.includes(profile.id)) {
                setIsFollowing(true);
            } else {
                setIsFollowing(false);
            }
        } else {
            console.error("Profile not found");
        }
    }, [profile, authProfile]);

    const handleFollowOrUnfollow = () => {
        const profileId = profile.id;
        const followingIds = FOLLOWING_DATA.find(
            (data) => data.userId === authProfile.id
        )?.following_users;
        if (followingIds) {
            if (followingIds.includes(profileId)) {
                followingIds.splice(followingIds.indexOf(profileId), 1);
                setIsFollowing(true);
            } else {
                followingIds.push(profileId);
                setIsFollowing(false);
            }
        }
    };

    const displayedProfile =
        decodedUserLink === authProfile.user_link ? authProfile : profile;

    return (
        <div>
            <div className="flex items-center gap-7 mb-6">
                <Image
                    src={displayedProfile.imageUrl}
                    alt="profile-image"
                    width={208}
                    height={208}
                    className="size-52 object-cover rounded-full"
                />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <div className="text-black dark:text-white font-bold text-2xl whitespace-nowrap">
                            {displayedProfile.name}
                        </div>
                        <div className="text-black dark:text-[#e2e2e2] font-semibold text-lg">
                            {displayedProfile.username}
                        </div>
                        {displayedProfile.isPrivate && (
                            <div className="h-8 flex items-center justify-center rounded-md bg-gray-100 dark:bg-[#ffffff23] py-0 px-2">
                                <LuLock />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        {displayedProfile.user_link ===
                            authProfile.user_link && (
                            <EditProfile profile={authProfile} />
                        )}
                        {displayedProfile.user_link !==
                            authProfile.user_link && (
                            <div
                                className="bg-[#8556fe] text-white font-semibold py-2 px-5 w-fit h-10 rounded-md cursor-pointer"
                                onClick={handleFollowOrUnfollow}
                            >
                                {isFollowing ? "Unfollow" : "Follow"}
                            </div>
                        )}
                        {displayedProfile.user_link ===
                            authProfile.user_link && (
                            <IntlLink
                                href={"/settings"}
                                className="h-10 flex items-center justify-center rounded-md bg-gray-100 dark:bg-[#ffffff23] hover:bg-[#a0a0a02b] hover:dark:bg-[#aaaaaa23] py-0 px-3"
                            >
                                <Settings className="size-5" />
                            </IntlLink>
                        )}
                        <div className="h-10 flex items-center justify-center rounded-md bg-gray-100 dark:bg-[#ffffff23] hover:bg-[#a0a0a02b] hover:dark:bg-[#aaaaaa23] py-0 px-3 cursor-pointer">
                            <RiShareForwardLine className="size-5" />
                        </div>
                    </div>
                    <DialogFollowers
                        profile={displayedProfile}
                        auth={authProfile}
                    />
                    <div className="text-left text-black dark:text-white font-normal text-base whitespace-pre-line">
                        {displayedProfile.bio === ""
                            ? "No bio yet!"
                            : displayedProfile.bio}
                    </div>
                </div>
            </div>
            <div>
                {profile.isPrivate && !isFollowing ? (
                    <div className="mt-10">
                        <h2 className="text-center text-black dark:text-white text-base">
                            Đây là tài khoản riêng tư. Hãy theo dõi người dùng
                            để xem được những video, photo từ họ.
                        </h2>
                    </div>
                ) : (
                    <ProfileTabs />
                )}
            </div>
        </div>
    );
};
