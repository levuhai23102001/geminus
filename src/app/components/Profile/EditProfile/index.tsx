"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { updateProfile } from "@/lib/features/Auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "sonner";
import * as Yup from "yup";

type Props = {};

interface IFormData {
    imageUrl?: string;
    username: string;
    user_link?: string;
    name: string;
    bio?: string;
}

export const EditProfile = ({ profile }: any) => {
    const router = useRouter();
    const locale = useLocale();
    const [image, setImage] = useState(profile.imageUrl);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isChanged, setIsChanged] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        username: Yup.string().trim().required("Username is required"),
        name: Yup.string().trim().required("Name is required"),
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
        defaultValues: {
            username: profile.username,
            name: profile.name,
            bio: profile.bio,
            imageUrl: profile.imageUrl,
        },
    });

    const formValues = watch();

    useEffect(() => {
        reset({
            username: profile.username,
            name: profile.name,
            bio: profile.bio,
            imageUrl: profile.imageUrl,
        });
    }, [profile, reset]);

    useEffect(() => {
        const hasChanged =
            formValues.username !== profile.username ||
            formValues.name !== profile.name ||
            formValues.bio !== profile.bio ||
            formValues.imageUrl !== profile.imageUrl;
        setIsChanged(hasChanged);
    }, [formValues, profile]);

    const handleChange = (key: any, event: any) => {
        const { value } = event.target;
        setValue(key, value);
    };

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        const params = {
            ...data,
            user_link: `@${data.username}`,
        };
        setIsLoading(true);
        setTimeout(() => {
            dispatch(updateProfile(params));
            setIsOpen(false);
            setIsChanged(false);
            setIsLoading(false);
            toast("Update Profile", {
                description: "Update profile successfully!",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            });
            router.push(`/${locale}/profile/${params.user_link}`);
        }, 3000);
    };

    const handleProfilePhotoChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setValue("imageUrl", imageUrl);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="bg-[#8556fe] text-white font-semibold py-2 px-5 w-fit h-10 rounded-md cursor-pointer">
                    Edit profile
                </div>
            </DialogTrigger>
            {isOpen && (
                <form>
                    <DialogContent className="max-w-[625px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                Edit profile
                            </DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save
                                when you`re done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="h-[1px] w-full bg-[#27272a] my-1"></div>
                        <div className="flex">
                            <h3 className="w-full max-w-[120px] mb-1 text-base text-black dark:text-white font-medium">
                                Profile photo
                            </h3>
                            <div className="relative flex items-center justify-center w-full max-w-[360px]">
                                <Image
                                    src={formValues.imageUrl || image}
                                    alt="profile-image"
                                    width={96}
                                    height={96}
                                    className="size-24 object-cover rounded-full"
                                />
                                <input
                                    id="profile-photo"
                                    type="file"
                                    className="absolute size-24 opacity-0 cursor-pointer"
                                    accept="image/*"
                                    onChange={handleProfilePhotoChange}
                                />
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#707072] my-1"></div>
                        <div className="flex">
                            <h3 className="w-full max-w-[120px] mb-1 text-base text-black dark:text-white font-medium">
                                Username
                            </h3>
                            <div className="w-full max-w-[360px]">
                                <input
                                    {...register("username")}
                                    type="text"
                                    placeholder="Username"
                                    className="w-full text-base font-normal border-none bg-gray-100 dark:bg-[#ffffff23] outline-none py-2 px-3 rounded-md text-black dark:text-white placeholder-[#cacaca]"
                                    onChange={(event) =>
                                        handleChange("username", event)
                                    }
                                    value={formValues.username}
                                />
                                <p className="mt-4 text-xs text-[#000000bd] dark:text-[#ffffffbd]">
                                    {`www.geminus.com/@${formValues.username}`}
                                </p>
                                <p className="mt-2 text-xs text-[#000000bd] dark:text-[#ffffffbd]">
                                    Usernames can only contain letters, numbers,
                                    underscores, and periods. Changing your
                                    username will also change your profile link.
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#707072] my-1"></div>
                        <div className="flex">
                            <h3 className="w-full max-w-[120px] mb-1 text-base text-black dark:text-white font-medium">
                                Name
                            </h3>
                            <div className="w-full max-w-[360px]">
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Name"
                                    className="w-full text-base font-normal border-none bg-gray-100 dark:bg-[#ffffff23] outline-none py-2 px-3 rounded-md text-black dark:text-white placeholder-[#cacaca]"
                                    onChange={(event) =>
                                        handleChange("name", event)
                                    }
                                    value={formValues.name}
                                />
                                <p className="mt-2 text-xs text-[#000000bd] dark:text-[#ffffffbd]">
                                    Your nickname can only be changed once every
                                    7 days.
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#707072] my-1"></div>
                        <div className="flex">
                            <h3 className="w-full max-w-[120px] mb-1 text-base text-black dark:text-white font-medium">
                                Bio
                            </h3>
                            <div className="w-full max-w-[360px]">
                                <textarea
                                    {...register("bio")}
                                    placeholder="Bio"
                                    maxLength={80}
                                    rows={3}
                                    className="w-full text-base font-normal border-none resize-none bg-gray-100 dark:bg-[#ffffff23] outline-none py-2 px-3 rounded-md text-black dark:text-white placeholder-[#cacaca]"
                                    onChange={(event) =>
                                        handleChange("bio", event)
                                    }
                                    value={formValues.bio}
                                />
                                <p className="mt-2 text-xs text-[#000000bd] dark:text-[#ffffffbd]">
                                    {`${formValues.bio?.length}/80`}
                                </p>
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-[#707072] my-1"></div>
                        <DialogFooter>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#8556fe] mr-2 text-sm text-white font-semibold py-1 px-4 w-fit rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                                className={`${
                                    errors.username || errors.name || !isChanged
                                        ? "dark:bg-[#ffffff23] bg-gray-100 text-black dark:text-white cursor-default"
                                        : "bg-[#8556fe] text-white cursor-pointer"
                                } text-sm font-semibold py-1 px-4 w-fit rounded-md`}
                                disabled={
                                    !!errors.username ||
                                    !!errors.name ||
                                    !isChanged
                                }
                            >
                                {isLoading ? (
                                    <LuLoader2 className="animate-spin" />
                                ) : (
                                    "Save"
                                )}
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            )}
        </Dialog>
    );
};
