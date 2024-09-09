import { styles } from "@/styles/style";
import { yupResolver } from "@hookform/resolvers/yup";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { COMMENT_DATA, IComment } from "../../../constants";
import {
    ArrowOutIcon,
    EmojiIcon,
    FillHeartIcon,
    HeartIcon,
    LogoIcon,
    SendIcon,
    ShareIcon,
    ThreeDotHorizontal,
} from "../Icons";
import { Portal } from "../Portal";

type PhotoDetailsProps = {
    photo: any;
};

interface IFormData {
    comment: string;
}

export const PhotoDetails = ({ photo }: PhotoDetailsProps) => {
    const { theme } = useTheme();
    const [showSendButton, setShowSendButton] = useState<boolean>(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState<{
        [key: number]: boolean;
    }>({});
    const [emojiPickerPosition, setEmojiPickerPosition] = useState<{
        [key: number]: { top: number; left: number };
    }>({});
    const [showReplyBox, setShowReplyBox] = useState<{
        [key: number]: boolean;
    }>({});
    const [favorite, setFavorite] = useState<boolean>(false);
    const [commentList, setCommentList] = useState<IComment[]>(COMMENT_DATA);
    const replyBoxRefs = useRef<(HTMLDivElement | null)[]>([]);

    const validationSchema = Yup.object().shape({
        comment: Yup.string().trim().required("Comment is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        watch,
    } = useForm<IFormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: { comment: "" },
    });

    const formValues = watch();

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        const params = {
            id: Math.floor(Math.random() * 100000),
            user: {
                id: "05082004-s34-420-m1lky-2310",
                name: "M1lky",
                imageUrl:
                    "https://i.pinimg.com/564x/59/1e/83/591e83db2a94f397ad6debc179424f80.jpg",
                user_link: "/@m1lky2310",
            },
            comment: data.comment,
        };
        console.log(data);

        setCommentList([...commentList, params]);
        reset({ comment: "" });
        setShowSendButton(false);
        setShowEmojiPicker({});
    };

    const handleChange = (
        key: any,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setValue(key, value);
        setShowSendButton(value !== "");
    };

    const handleEmojiClick = (
        emojiObject: EmojiClickData,
        commentIndex?: number
    ) => {
        const newComment = (formValues.comment || "") + emojiObject.emoji;
        setValue("comment", newComment);
        setShowSendButton(newComment !== "");

        if (commentIndex !== undefined) {
            const updatedCommentList = [...commentList];
            updatedCommentList[commentIndex] = {
                ...updatedCommentList[commentIndex],
                comment:
                    (updatedCommentList[commentIndex].comment || "") +
                    emojiObject.emoji,
            };
            setCommentList(updatedCommentList);
        }
    };

    const handleFavorite = () => {
        setFavorite(!favorite);
    };

    const handleShowReplyBox = (index: number) => {
        setShowReplyBox((prev) => {
            const newShowReplyBox = Object.keys(prev).reduce(
                (acc, key: any) => {
                    acc[key] = false;
                    return acc;
                },
                {} as { [key: number]: boolean }
            );
            return {
                ...newShowReplyBox,
                [index]: !prev[index],
            };
        });
    };

    const handleShowEmojiPicker = (index: number) => {
        if (replyBoxRefs.current[index]) {
            const { top, left, height } =
                replyBoxRefs.current[index]!.getBoundingClientRect();
            const emojiPickerHeight = 500;
            setEmojiPickerPosition((prev) => ({
                ...prev,
                [index]: {
                    top: top + height + window.scrollY - emojiPickerHeight,
                    left: left + window.scrollX + 45,
                },
            }));
            setShowEmojiPicker((prev) => {
                const newShowEmojiPicker = Object.keys(prev).reduce(
                    (acc, key: any) => {
                        acc[key] = false;
                        return acc;
                    },
                    {} as { [key: number]: boolean }
                );
                return {
                    ...newShowEmojiPicker,
                    [index]: !prev[index],
                };
            });
        } else {
            setShowEmojiPicker((prev) => {
                const newShowEmojiPicker = Object.keys(prev).reduce(
                    (acc, key: any) => {
                        acc[key] = false;
                        return acc;
                    },
                    {} as { [key: number]: boolean }
                );
                return {
                    ...newShowEmojiPicker,
                    [index]: !prev[index],
                };
            });
        }
    };

    const totalComments = commentList.length;
    const totalReplyComments = commentList.reduce((total, comment) => {
        return total + (comment.commentReplies?.length || 0);
    }, 0);
    const totalCommentsAndReplies = totalComments + totalReplyComments;

    console.log(commentList);

    return (
        <div
            className={`w-[70%] min-h-[300px] flex bg-white dark:bg-black rounded-[32px] cursor-auto ${styles.shadow}`}
        >
            <div className="relative w-[50%] h-full group rounded-l-[32px] overflow-hidden">
                <Image
                    src={photo?.urls?.regular}
                    alt={photo?.alt_description}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 hidden items-center justify-center gap-1 w-fit h-fit bg-[#ffffffe0] text-black font-semibold py-2 px-4 rounded-3xl group-hover:flex cursor-pointer">
                    {ArrowOutIcon}
                    <a
                        href={photo?.urls?.full}
                        target="_blank"
                        className="whitespace-nowrap"
                    >
                        View Photo
                    </a>
                </div>
            </div>
            <div className="p-5 relative w-[50%] h-full flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 text-[26px]">
                        <div className="rounded-full hover:bg-[#e9e9e9] hover:dark:bg-[#353535e9] p-2 text-black dark:text-white cursor-pointer">
                            {ShareIcon}
                        </div>
                        <div className="rounded-full hover:bg-[#e9e9e9] hover:dark:bg-[#353535e9] p-2 text-black dark:text-white cursor-pointer">
                            {ThreeDotHorizontal}
                        </div>
                    </div>
                    <button className="bg-[#7b39ff] text-white font-semibold py-2 px-5 w-fit h-fit rounded-3xl">
                        Save
                    </button>
                </div>
                <div className="mt-5">
                    <h2 className="font-bold text-[28px] text-black dark:text-white">
                        {photo?.alt_description}
                    </h2>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex">
                        <Link
                            href={"/"}
                            className="relative flex justify-start items-center p-2 rounded-md"
                        >
                            <Image
                                src={photo?.user?.profile_image?.medium}
                                alt="user-profile"
                                width={44}
                                height={44}
                                className="size-11 object-cover rounded-full"
                            />
                            <div className="flex flex-col ml-2">
                                <span className="text-base font-bold text-[#000000c9] dark:text-[#ffffffe6] -mt-[2px]">
                                    {photo?.user?.username}
                                </span>
                                <span className="text-sm font-medium text-[#000000bf] dark:text-[#ffffffbf] ">
                                    69,6k followers
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-transparent text-black dark:text-white border-[1px] border-solid border-[#000] dark:border-[#fff] hover:bg-gray-100 dark:hover:bg-[#ffffff23] font-semibold py-2 px-5 w-fit h-fit rounded-3xl cursor-pointer">
                        Follow
                    </div>
                </div>
                <div className="mt-5 flex-1 border-b-[#0000002b] dark:border-b-[#ffffff3b] border-b border-solid">
                    <h2 className="mb-1 font-semibold text-lg text-[#000000de] dark:text-[#ffffffbf]">
                        Comments
                    </h2>
                    <div className="mt-4 mb-2 max-h-[350px] overflow-auto">
                        {commentList.length === 0 && (
                            <h3 className="text-sm text-[#8f8f8f] ">
                                No comments yet! Add a comment to start the
                                conversation.
                            </h3>
                        )}
                        {commentList && commentList.length > 0 && (
                            <div className="flex flex-col gap-2">
                                {commentList.map((comment, i) => (
                                    <div
                                        className="flex justify-start py-1 px-3"
                                        key={i}
                                    >
                                        <Image
                                            src={comment?.user?.imageUrl}
                                            alt="user-profile"
                                            width={32}
                                            height={32}
                                            className="size-8 object-cover rounded-full"
                                        />
                                        <div className="relative flex flex-col flex-1 ml-2">
                                            <div>
                                                <span className="text-base font-bold text-[#000000f1] dark:text-[#ffffffe6] whitespace-nowrap">
                                                    {comment?.user?.name}
                                                </span>
                                                <span className="text-base text-[#000000] dark:text-[#ffffff] ml-2">
                                                    {comment?.comment}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <span className="text-xs text-[#8f8f8f]">
                                                    10 hours ago
                                                </span>
                                                <div
                                                    className="text-xs text-[#8f8f8f] hover:text-white cursor-pointer"
                                                    onClick={() =>
                                                        handleShowReplyBox(i)
                                                    }
                                                >
                                                    Reply
                                                </div>
                                            </div>
                                            {comment?.commentReplies?.map(
                                                (reply: any, index: number) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-start py-1 px-3 mt-2"
                                                    >
                                                        <Image
                                                            src={
                                                                reply?.user
                                                                    ?.imageUrl
                                                            }
                                                            alt="user-profile"
                                                            width={28}
                                                            height={28}
                                                            className="size-7 object-cover rounded-full"
                                                        />
                                                        <div className="flex flex-col flex-1 ml-2">
                                                            <div>
                                                                <span className="text-base font-bold text-[#000000f1] dark:text-[#ffffffe6] whitespace-nowrap">
                                                                    {
                                                                        reply
                                                                            ?.user
                                                                            ?.name
                                                                    }
                                                                </span>
                                                                <span className="text-base text-[#000000] dark:text-[#ffffff] ml-2">
                                                                    {
                                                                        reply?.comment
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-5">
                                                                <span className="text-xs text-[#8f8f8f]">
                                                                    10 hours ago
                                                                </span>
                                                                <div
                                                                    className="text-xs text-[#8f8f8f] hover:text-white cursor-pointer"
                                                                    onClick={() =>
                                                                        handleShowReplyBox(
                                                                            i
                                                                        )
                                                                    }
                                                                >
                                                                    Reply
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                            {showReplyBox[i] && (
                                                <div
                                                    className="relative w-full pl-3 py-2"
                                                    ref={(el) => {
                                                        replyBoxRefs.current[
                                                            i
                                                        ] = el;
                                                    }}
                                                >
                                                    <form
                                                        onSubmit={handleSubmit(
                                                            onSubmit
                                                        )}
                                                        className={`flex items-center m-0 px-4 py-3 rounded-[92px] bg-gray-100 dark:bg-[#2f2f2f] overflow-hidden ${
                                                            errors.comment
                                                                ? "border-[#7b39ff] border-solid border-[1px]"
                                                                : "border-none"
                                                        }`}
                                                    >
                                                        <input
                                                            type="text"
                                                            {...register(
                                                                "comment"
                                                            )}
                                                            className="w-full mr-4 text-base font-normal border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                                            placeholder="Add to reply..."
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                handleChange(
                                                                    "comment",
                                                                    event
                                                                );
                                                            }}
                                                        />

                                                        <button
                                                            type="button"
                                                            tabIndex={-1}
                                                            className="cursor-pointer size-6 border-0 outline-none bg-transparent"
                                                            onClick={() =>
                                                                handleShowEmojiPicker(
                                                                    i
                                                                )
                                                            }
                                                        >
                                                            <Image
                                                                src={EmojiIcon}
                                                                alt=""
                                                                width={100}
                                                                height={100}
                                                                className="size-6 object-cover"
                                                            />
                                                        </button>
                                                        {showEmojiPicker[i] && (
                                                            <Portal>
                                                                <div
                                                                    className="absolute"
                                                                    style={{
                                                                        top: `${emojiPickerPosition[i]?.top}px`,
                                                                        left: `${emojiPickerPosition[i]?.left}px`,
                                                                        zIndex: 9999,
                                                                    }}
                                                                >
                                                                    <EmojiPicker
                                                                        onEmojiClick={(
                                                                            emojiObject
                                                                        ) =>
                                                                            handleEmojiClick(
                                                                                emojiObject,
                                                                                i
                                                                            )
                                                                        }
                                                                        skinTonesDisabled
                                                                        theme={
                                                                            theme ===
                                                                            "dark"
                                                                                ? Theme.DARK
                                                                                : Theme.LIGHT
                                                                        }
                                                                    />
                                                                </div>
                                                            </Portal>
                                                        )}
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full py-5 px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-xl text-black dark:text-white">
                            {totalCommentsAndReplies} comments
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                <LogoIcon width={35} height={32} />
                                <span className="font-semibold text-base text-black dark:text-white">
                                    {photo?.likes}
                                </span>
                            </div>
                            <div
                                className="rounded-full bg-[#f3f4f6] dark:bg-white p-2 text-black cursor-pointer"
                                onClick={handleFavorite}
                            >
                                {favorite ? (
                                    <FillHeartIcon color="#7b39ff" />
                                ) : (
                                    HeartIcon
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-start items-center mt-5 rounded-md">
                        <Image
                            src="https://i.pinimg.com/564x/59/1e/83/591e83db2a94f397ad6debc179424f80.jpg"
                            alt="user-profile"
                            width={44}
                            height={44}
                            className="size-11 object-cover rounded-full"
                        />
                        <div className="relative w-full pl-2">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className={`relative flex items-center m-0 px-4 py-3 rounded-[92px] bg-gray-100 dark:bg-[#2f2f2f] overflow-hidden ${
                                    errors.comment
                                        ? "border-[#7b39ff] border-solid border-[1px]"
                                        : "border-none"
                                }`}
                            >
                                <input
                                    type="text"
                                    {...register("comment")}
                                    className="w-full mr-4 text-base font-normal border-none bg-transparent outline-none p-0 text-black dark:text-white placeholder-[#cacaca]"
                                    placeholder="Add to comment..."
                                    onChange={(event) => {
                                        handleChange("comment", event);
                                    }}
                                />
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        tabIndex={-1}
                                        className="cursor-pointer size-6 border-0 outline-none bg-transparent"
                                        onClick={() =>
                                            handleShowEmojiPicker(-1)
                                        }
                                    >
                                        <Image
                                            src={EmojiIcon}
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="size-6 object-cover"
                                        />
                                    </button>
                                    {showSendButton && (
                                        <button type="submit">
                                            <SendIcon
                                                color="#8f57ff"
                                                size={24}
                                            />
                                        </button>
                                    )}
                                </div>
                            </form>
                            {showEmojiPicker[-1] && (
                                <EmojiPicker
                                    onEmojiClick={(emojiObject) =>
                                        handleEmojiClick(emojiObject)
                                    }
                                    className="!absolute bottom-14 -right-32 z-[99]"
                                    skinTonesDisabled
                                    theme={
                                        theme === "dark"
                                            ? Theme.DARK
                                            : Theme.LIGHT
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
