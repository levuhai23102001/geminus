import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { IntlLink } from "../../IntlLink";
import Image from "next/image";
import {
    FAKE_PROFILE_DATA,
    FOLLOWER_DATA,
    FOLLOWING_DATA,
    IUser,
    USER_DATA,
} from "@/constants";
import { followUser, unfollowUser } from "@/lib/features/Auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";

type Props = {};

const DIALOG_DATA = [
    {
        id: "following",
        title: "Following",
        description: "People you're following",
    },
    {
        id: "followers",
        title: "Followers",
        description: "People who follow you",
    },
    {
        id: "liked",
        title: "Liked",
        description: "People who like your content",
    },
];

export const DialogFollowers = ({
    profile,
    auth,
    isFollowing,
    setIsFollowing,
}: any) => {
    const [followingList, setFollowingList] = useState<IUser[]>([]);
    const [followerList, setFollowerList] = useState<IUser[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        getFollowings();
        getFollowers();
    }, [profile.id]);

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

    const getFollowers = () => {
        const foundUser = FOLLOWER_DATA.find(
            (user) => user.userId === profile.id
        );
        const followerIds = foundUser?.followers;
        const followers = USER_DATA.filter((user) =>
            followerIds?.includes(user.id)
        );
        setFollowerList(followers);
    };

    const checkIsFollowing = (userId: string) => {
        const foundUser = FOLLOWING_DATA.find(
            (user) => user.userId === profile.id
        );
        const followingIds = foundUser?.following_users;
        return followingIds?.includes(userId);
    };

    const handleFollowOrUnfollow = (profileId: any) => {
        const isExistFollowing =
            FOLLOWING_DATA[0].following_users.includes(profileId);
        if (isExistFollowing) {
            dispatch(unfollowUser(profileId));
            setIsFollowing(false);
        } else {
            dispatch(followUser(profileId));
            setIsFollowing(true);
        }
    };

    return (
        <div className="flex items-center gap-3">
            {DIALOG_DATA.map((item) => (
                <Dialog key={item.id}>
                    <DialogTrigger asChild key={item.id}>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <span className="text-black dark:text-white font-bold text-lg whitespace-nowrap">
                                {item.id === "following"
                                    ? profile.following
                                    : item.id === "followers"
                                    ? profile.followers
                                    : profile.liked}
                            </span>
                            <span className="text-black dark:text-[#e2e2e2] font-semibold text-base whitespace-nowrap">
                                {item.title}
                            </span>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                {item.title}
                            </DialogTitle>
                            <DialogDescription>
                                {item.description}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="h-[1px] w-full bg-[#27272a] my-1"></div>
                        <div className="flex flex-col">
                            {item.id === "following" &&
                                followingList.map((following) => (
                                    <div
                                        className="relative rounded-md flex justify-between items-center"
                                        key={following.id}
                                    >
                                        <IntlLink
                                            href={`/profile/${following.user_link}`}
                                            className="relative flex justify-start items-center p-2"
                                        >
                                            <Image
                                                src={following.imageUrl}
                                                alt="user-profile"
                                                width={36}
                                                height={36}
                                                className="size-9 object-cover rounded-full"
                                            />
                                            <div className="flex flex-col ml-2">
                                                <span className="text-base font-bold text-[#000000c9] dark:text-[#ffffffe6] max-w-[145px] -mt-[2px]">
                                                    {following.name}
                                                </span>
                                                <span className="text-sm font-medium text-[#000000bf] dark:text-[#ffffffbf] max-w-[145px]">
                                                    {following.user_link}
                                                </span>
                                            </div>
                                        </IntlLink>
                                        {following.id !== auth.id && (
                                            <div
                                                className="bg-[#8556fe] text-white text-xs font-semibold p-2 w-fit h-fit rounded-md cursor-pointer"
                                                onClick={() =>
                                                    handleFollowOrUnfollow(
                                                        following.id
                                                    )
                                                }
                                            >
                                                {checkIsFollowing(following.id)
                                                    ? "Unfollow"
                                                    : "Follow"}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            {item.id === "followers" &&
                                followerList.map((follower) => (
                                    <div
                                        className="relative rounded-md flex justify-between items-center"
                                        key={follower.id}
                                    >
                                        <IntlLink
                                            href={`/profile/${follower.user_link}`}
                                            className="relative flex justify-start items-center p-2"
                                        >
                                            <Image
                                                src={follower.imageUrl}
                                                alt="user-profile"
                                                width={36}
                                                height={36}
                                                className="size-9 object-cover rounded-full"
                                            />
                                            <div className="flex flex-col ml-2">
                                                <span className="text-base font-bold text-[#000000c9] dark:text-[#ffffffe6] max-w-[145px] -mt-[2px]">
                                                    {follower.name}
                                                </span>
                                                <span className="text-sm font-medium text-[#000000bf] dark:text-[#ffffffbf] max-w-[145px]">
                                                    {follower.user_link}
                                                </span>
                                            </div>
                                        </IntlLink>
                                        {follower.id !== auth.id && (
                                            <div
                                                className="bg-[#8556fe] text-white text-xs font-semibold p-2 w-fit h-fit rounded-md cursor-pointer"
                                                onClick={() =>
                                                    handleFollowOrUnfollow(
                                                        follower.id
                                                    )
                                                }
                                            >
                                                {checkIsFollowing(follower.id)
                                                    ? "Unfollow"
                                                    : "Follow"}
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
};
