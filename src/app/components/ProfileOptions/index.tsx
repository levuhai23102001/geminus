"use client";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { LANGUAGES_DATA } from "@/constants";
import { useAppSelector } from "@/lib/hooks";
import {
    ArrowLeft,
    Check,
    CreditCard,
    Github,
    HelpCircle,
    Keyboard,
    Languages,
    LifeBuoy,
    LogOut,
    Settings,
    Siren,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IntlLink } from "../IntlLink";

type Props = {};

export const ProfileOptions = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showLanguages, setShowLanguages] = useState<boolean>(false);
    const profile = useAppSelector((state) => state.auth.me);
    const router = useRouter();
    const locale = useLocale();
    const i18n = useTranslations();

    const handleTrigger = () => {
        setIsOpen(false);
    };

    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };

    const handleChangeLanguage = (value: string) => {
        router.push(`/${value}`);
        setIsOpen(false);
    };

    return (
        <Popover
            open={isOpen}
            onOpenChange={() => {
                setIsOpen(!isOpen);
                setShowLanguages(false);
            }}
        >
            <PopoverTrigger asChild>
                <div className="ml-4 cursor-pointer">
                    <Image
                        src={profile.imageUrl}
                        alt="user-profile"
                        width={36}
                        height={36}
                        className="size-9 object-cover rounded-full"
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 mr-4 mt-1 z-[9999] dark:border-[#ffffff52] dark:bg-black dark:text-gray-50">
                <Command className="relative min-w-56">
                    <CommandList
                        className={`max-h-full transition-transform duration-300 ${
                            !showLanguages
                                ? "translate-x-0"
                                : "translate-x-full"
                        }`}
                    >
                        <CommandGroup
                            heading={i18n("ProfileOptions.Heading.MyProfile")}
                        >
                            <IntlLink href={`/profile/${profile.user_link}`}>
                                <CommandItem
                                    className="cursor-pointer"
                                    onSelect={handleTrigger}
                                >
                                    <Image
                                        src={profile.imageUrl}
                                        alt="user-profile"
                                        width={56}
                                        height={56}
                                        className="size-14 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col gap-1 ml-2">
                                        <span className="text-lg font-medium">
                                            {profile.name}
                                        </span>
                                        <span className="text-xs text-[#000000bf] dark:text-[#ffffffbf]">
                                            {profile.user_link}
                                        </span>
                                    </div>
                                    <CommandShortcut>⇧⌘P</CommandShortcut>
                                </CommandItem>
                            </IntlLink>
                            <CommandItem className="cursor-pointer">
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n("ProfileOptions.MyProfile.Billing")}
                                </span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem className="cursor-pointer">
                                <Keyboard className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n(
                                        "ProfileOptions.MyProfile.KeyboardShortcuts"
                                    )}
                                </span>
                                <CommandShortcut>⌘K</CommandShortcut>
                            </CommandItem>
                            <CommandItem
                                className="cursor-pointer"
                                onSelect={toggleLanguages}
                            >
                                <Languages className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n("ProfileOptions.MyProfile.Language")}
                                </span>
                                <CommandShortcut>⌘L</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup
                            heading={i18n(
                                "ProfileOptions.Heading.OtherOptions"
                            )}
                        >
                            <CommandItem
                                className="cursor-pointer"
                                onSelect={handleTrigger}
                            >
                                <Settings className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n(
                                        "ProfileOptions.OtherOptions.Settings"
                                    )}
                                </span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                            <a
                                href={"https://github.com/levuhai23102001"}
                                target="_blank"
                            >
                                <CommandItem
                                    className="cursor-pointer"
                                    onSelect={handleTrigger}
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    <span>
                                        {" "}
                                        {i18n(
                                            "ProfileOptions.OtherOptions.Github"
                                        )}
                                    </span>
                                </CommandItem>
                            </a>
                            <CommandItem
                                className="cursor-pointer"
                                onSelect={handleTrigger}
                            >
                                <HelpCircle className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n(
                                        "ProfileOptions.OtherOptions.FeedbackAndHelp"
                                    )}
                                </span>
                            </CommandItem>
                            <CommandItem
                                className="cursor-pointer"
                                onSelect={handleTrigger}
                            >
                                <LifeBuoy className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n(
                                        "ProfileOptions.OtherOptions.TermsOfService"
                                    )}
                                </span>
                            </CommandItem>
                            <CommandItem
                                className="cursor-pointer"
                                onSelect={handleTrigger}
                            >
                                <Siren className="mr-2 h-4 w-4" />
                                <span>
                                    {i18n(
                                        "ProfileOptions.OtherOptions.PrivacyPolicy"
                                    )}
                                </span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup>
                            <CommandItem className="cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>{i18n("ProfileOptions.Logout")}</span>
                                <CommandShortcut>⇧⌘Q</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                    <CommandList
                        className={`absolute inset-0 max-h-full transition-transform duration-300 ${
                            !showLanguages
                                ? "-translate-x-full"
                                : "translate-x-0"
                        }`}
                    >
                        <CommandGroup>
                            <div className="flex items-center">
                                <CommandItem
                                    className="cursor-pointer"
                                    onSelect={toggleLanguages}
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                </CommandItem>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {i18n("ProfileOptions.MyProfile.Language")}
                                </span>
                            </div>
                        </CommandGroup>
                        <CommandGroup>
                            {LANGUAGES_DATA.map((language) => (
                                <CommandItem
                                    key={language.value}
                                    className="cursor-pointer"
                                    onSelect={() =>
                                        handleChangeLanguage(language.value)
                                    }
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${
                                            language.value === locale
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    />
                                    {language.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
