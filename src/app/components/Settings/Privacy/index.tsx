"use client";

import { Switch } from "@/components/ui/switch";
import { FAKE_PROFILE_DATA, IUser } from "@/constants";
import { updateProfile } from "@/lib/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useState } from "react";

type Props = {};

export const Privacy = (props: Props) => {
    const profile = useAppSelector((state) => state.auth.me);
    const dispatch = useAppDispatch();

    const handleChange = (checked: boolean) => {
        dispatch(updateProfile({ isPrivate: checked }));
    };

    return (
        <div id="privacy" className="h-fit">
            <div>
                <h3 className="mb-2 text-2xl text-black dark:text-white font-medium">
                    Privacy
                </h3>
                <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                    Manage your privacy preferences to ensure a secure
                    experience. Keep your information safe and tailored to your
                    needs.
                </p>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Discoverability
                </h3>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h3 className="mb-1 text-sm text-black dark:text-white font-medium">
                            Private account
                        </h3>
                        <p className="text-xs text-[#272727] dark:text-[#a1a1aa]">
                            With a private account, only users you approve can
                            follow you and watch your videos. Your existing
                            followers won’t be affected.
                        </p>
                    </div>
                    <Switch
                        checked={profile.isPrivate}
                        onCheckedChange={(checked) => handleChange(checked)}
                    />
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div className="flex items-center justify-between gap-2">
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Blocked accounts
                </h3>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Data
                </h3>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h3 className="mb-1 text-sm text-black dark:text-white font-medium">
                            Download your data
                        </h3>
                        <p className="text-xs text-[#272727] dark:text-[#a1a1aa]">
                            Get a copy of your Geminus data
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
        </div>
    );
};
