import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import React from "react";

type Props = {};

export const Notifications = (props: Props) => {
    return (
        <div id="notifications" className="h-fit">
            <div>
                <h3 className="mb-2 text-2xl text-black dark:text-white font-medium">
                    Notifications
                </h3>
                <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                    Stay informed by managing your notification preferences.
                    Choose how and when you want to receive alerts and updates.
                </p>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                    Desktop notifications
                </h3>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h3 className="mb-1 text-sm text-black dark:text-white font-medium">
                            Allow in browser
                        </h3>
                        <p className="text-xs text-[#272727] dark:text-[#a1a1aa]">
                            Stay on top of notifications for likes, comments,
                            the latest videos, photos, and more on desktop. You
                            can turn them off anytime.
                        </p>
                    </div>
                    <Switch />
                </div>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="pb-4 pt-0">
                        <div>
                            <h3 className="mb-1 text-base text-left text-black dark:text-white font-medium">
                                Desktop notifications
                            </h3>
                            <p className="text-xs text-[#272727] dark:text-[#a1a1aa]">
                                Likes, comments, new followers, mentions and
                                tags
                            </p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                                    Likes
                                </h3>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                                    Comments
                                </h3>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                                    New followers
                                </h3>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                                    Mentions and tags
                                </h3>
                            </div>
                            <Switch />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
        </div>
    );
};
