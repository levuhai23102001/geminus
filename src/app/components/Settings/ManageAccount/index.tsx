import React from "react";

type Props = {};

export const ManageAccount = (props: Props) => {
    return (
        <div id="manage_account" className="h-fit">
            <div>
                <h3 className="mb-2 text-2xl text-black dark:text-white font-medium">
                    Manage account
                </h3>
                <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                    Access and manage your account settings here. Customize your
                    profile, update personal information, and configure your
                    preferences.
                </p>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Account control
                </h3>
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm text-black dark:text-white">
                        Delete account
                    </h4>
                    <div className="text-sm text-[#8556fe] font-medium cursor-pointer">
                        Delete
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Account information
                </h3>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h3 className="mb-1 text-sm text-black dark:text-white font-medium">
                            Account control
                        </h3>
                        <p className="text-xs text-[#272727] dark:text-[#a1a1aa]">
                            Your account region is initially set based on the
                            time and place of registration.
                        </p>
                    </div>
                    <div className="text-sm text-[#272727] dark:text-[#a1a1aa] font-medium cursor-pointer">
                        Vietnam
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
        </div>
    );
};
