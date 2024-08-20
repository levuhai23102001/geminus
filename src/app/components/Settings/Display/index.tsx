"use client";

import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import { toast } from "sonner";

type Props = {};
const initialItems = [
    {
        id: "recents",
        label: "Recents",
        checked: true,
    },
    {
        id: "home",
        label: "Home",
        checked: true,
    },
    {
        id: "applications",
        label: "Applications",
        checked: true,
    },
    {
        id: "desktop",
        label: "Desktop",
        checked: false,
    },
    {
        id: "downloads",
        label: "Downloads",
        checked: false,
    },
    {
        id: "documents",
        label: "Documents",
        checked: false,
    },
];
export const Display = (props: Props) => {
    const [items, setItems] = useState(initialItems);

    const handleChecked = (id: string, checked: boolean) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked } : item
            )
        );
    };

    const handleSetDisplay = () => {
        const selectedItems = items.filter((item) => item.checked);

        toast("Display has been updated", {
            description: (
                <pre className="w-full bg-neutral-950-950 p-4">
                    <code className="text-black dark:text-white">
                        {JSON.stringify(selectedItems, null, 2)}
                    </code>
                </pre>
            ),
        });
    };

    return (
        <div id="display" className="h-fit">
            <div>
                <h3 className="mb-2 text-2xl text-black dark:text-white font-medium">
                    Display
                </h3>
                <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                    Turn items on or off to control what's displayed in the app.
                </p>
            </div>
            <div className="h-[1px] w-full bg-[#27272a] my-6"></div>
            <div>
                <div className="mb-4">
                    <h3 className="mb-1 text-base text-black dark:text-white font-medium">
                        Sidebar
                    </h3>
                    <p className="text-sm text-[#272727] dark:text-[#a1a1aa]">
                        Select the items you want to display in the sidebar.
                    </p>
                </div>
                <div className="mb-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-2 mb-2"
                        >
                            <Checkbox
                                checked={item.checked}
                                onCheckedChange={(checked: boolean) =>
                                    handleChecked(item.id, checked)
                                }
                            />
                            <span className="text-sm text-black dark:text-white font-medium">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div
                    className="bg-[#8556fe] text-white font-semibold py-2 px-5 w-fit h-10 rounded-md cursor-pointer"
                    onClick={handleSetDisplay}
                >
                    Save
                </div>
            </div>
        </div>
    );
};
