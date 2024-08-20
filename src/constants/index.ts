import { ReactNode } from "react";
import {
    ExploreIcon,
    FollowingIcon,
    HomeIcon,
    ReelIcon,
} from "../app/components/Icons";

interface INavbar {
    id: number;
    title: string;
    path: string;
    icon?: ReactNode;
}

export interface IUser {
    id: string;
    username?: string;
    user_link: string;
    name: string;
    imageUrl: string;
    bio?: string;
    liked?: number;
    followers?: number;
    following?: number;
    isPrivate?: boolean;
}

export interface IComment {
    id: number;
    user: IUser;
    comment: string;
    commentReplies?: IComment[];
}

export interface ISubject {
    id: number;
    name: string;
    imageBg: string;
}

export interface ILanguage {
    label: string;
    value: string;
}

export const NAV_DATA: INavbar[] = [
    {
        id: 1,
        title: "Nav.ForYou",
        path: "",
        icon: HomeIcon,
    },
    {
        id: 2,
        title: "Nav.Explore",
        path: "/explore",
        icon: ExploreIcon,
    },
    {
        id: 3,
        title: "Nav.Reels",
        path: "/reels",
        icon: ReelIcon,
    },
    {
        id: 4,
        title: "Nav.Following",
        path: "/following",
        icon: FollowingIcon,
    },
];

export const SETTINGS_NAV_DATA: INavbar[] = [
    {
        id: 1,
        title: "Manage account",
        path: "#manage_account",
    },
    {
        id: 2,
        title: "Privacy",
        path: "#privacy",
    },
    {
        id: 3,
        title: "Appearance",
        path: "#appearance",
    },
    {
        id: 4,
        title: "Notifications",
        path: "#notifications",
    },
    {
        id: 5,
        title: "Display",
        path: "#display",
    },
];

export const COMMENT_DATA: IComment[] = [
    {
        id: 1,
        user: {
            id: "05082004-s34-420-m1lky-2310",
            name: "M1lky",
            imageUrl:
                "https://i.pinimg.com/564x/59/1e/83/591e83db2a94f397ad6debc179424f80.jpg",
            user_link: "/@m1lky2310",
        },
        comment: "Amazinggg 🤩",
        commentReplies: [
            {
                id: 1,
                user: {
                    id: "05082004-s34-420-kaynle-456",
                    name: "Kayn Le",
                    imageUrl:
                        "https://i.pinimg.com/564x/68/99/6b/68996b1571ad7f4bbed92429f512139e.jpg",
                    user_link: "/@kayn2310",
                },
                comment: "Thank you so much! 🥰",
            },
        ],
    },
    {
        id: 2,
        user: {
            id: "05082004-s34-420-kaynle-456",
            name: "Kayn Le",
            imageUrl:
                "https://i.pinimg.com/564x/68/99/6b/68996b1571ad7f4bbed92429f512139e.jpg",
            user_link: "/@kayn2310",
        },
        comment: "Good jobb 🤩",
        commentReplies: [
            {
                id: 1,
                user: {
                    id: "05082004-s34-420-vuhai-123",
                    name: "Vu Hai",
                    imageUrl:
                        "https://i.pinimg.com/236x/2d/fe/0a/2dfe0aabb26955660e5ad7f7013df5d4.jpg",
                    user_link: "/@vuhai2310",
                },
                comment: "Hihi 🥰",
            },
        ],
    },
];

export const SUBJECTS_DATA: ISubject[] = [
    {
        id: 1,
        name: "Cats",
        imageBg:
            "https://i.pinimg.com/736x/d6/44/5a/d6445a5f9743f29a349393a570951173.jpg",
    },
    {
        id: 2,
        name: "Dogs",
        imageBg:
            "https://i.pinimg.com/736x/12/b1/51/12b1516f9d906976090b5350a814547e.jpg",
    },
    {
        id: 3,
        name: "Natural",
        imageBg:
            "https://i.pinimg.com/736x/85/46/37/85463742146f09766895868f8b387972.jpg",
    },
    {
        id: 4,
        name: "Galaxy",
        imageBg:
            "https://i.pinimg.com/736x/06/5c/17/065c1779218801a54a54724643944991.jpg",
    },
    {
        id: 5,
        name: "Fashion",
        imageBg:
            "https://i.pinimg.com/736x/53/4f/54/534f5475198529826919832008025253.jpg",
    },
];

export const LANGUAGES_DATA: ILanguage[] = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Chinese", value: "zh" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Vietnamese", value: "vn" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Italian", value: "it" },
    { label: "Dutch", value: "nl" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
    { label: "Turkish", value: "tr" },
];

export const FAKE_PROFILE_DATA: IUser = {
    id: "05082004-s34-420-m1lky-2310",
    username: "m1lky420",
    user_link: "@m1lky420",
    name: "M1LKY",
    imageUrl:
        "https://i.pinimg.com/564x/59/1e/83/591e83db2a94f397ad6debc179424f80.jpg",
    bio: "",
    liked: 231,
    followers: 508,
    following: 420,
    isPrivate: false,
};

export const USER_DATA: IUser[] = [
    {
        id: "05082004-s34-420-m1lky-2310",
        username: "m1lky420",
        user_link: "@m1lky420",
        name: "M1LKY",
        imageUrl:
            "https://i.pinimg.com/564x/59/1e/83/591e83db2a94f397ad6debc179424f80.jpg",
        bio: "",
        liked: 231,
        followers: 508,
        following: 420,
        isPrivate: false,
    },
    {
        id: "05082004-s34-420-vuhai-123",
        username: "vuhai2310",
        user_link: "@vuhai2310",
        name: "Vu Hai",
        imageUrl:
            "https://i.pinimg.com/236x/2d/fe/0a/2dfe0aabb26955660e5ad7f7013df5d4.jpg",
        bio: "",
        liked: 265,
        followers: 108,
        following: 320,
    },
    {
        id: "05082004-s34-420-kaynle-456",
        username: "KaynLe123",
        user_link: "@kaynle123",
        name: "Kayn Le",
        imageUrl:
            "https://i.pinimg.com/564x/68/99/6b/68996b1571ad7f4bbed92429f512139e.jpg",
        bio: "",
        liked: 931,
        followers: 808,
        following: 220,
        isPrivate: true,
    },
    {
        id: "05082004-s34-420-johndoe-789",
        username: "johndoe",
        user_link: "@johndoe",
        name: "John Doe",
        imageUrl:
           "https://i.pinimg.com/736x/9f/0d/93/9f0d937d4f80160b70de729d7ea4ab4f.jpg",
        bio: "",
        liked: 150,
        followers: 300,
        following: 400,
    },
    {
        id: "05082004-s34-420-janedoe-101",
        username: "janedoe",
        user_link: "@janedoe",
        name: "Jane Doe",
        imageUrl:
            "https://i.pinimg.com/564x/51/b2/33/51b233d639a5dee3eae90eef68546a0a.jpg",
        bio: "",
        liked: 500,
        followers: 750,
        following: 650,
    },
];

export const FOLLOWING_DATA = [{
    id: "1",
    userId: "05082004-s34-420-m1lky-2310",
    following_users: [
        "05082004-s34-420-vuhai-123",
        "05082004-s34-420-kaynle-456",
        "05082004-s34-420-johndoe-789",
    ],
},
{
    id: "2",
    userId: "05082004-s34-420-vuhai-123",
    following_users: [
        "05082004-s34-420-m1lky-2310",
        "05082004-s34-420-kaynle-456",
        "05082004-s34-420-janedoe-101",
    ],
},
{
    id: "3",
    userId: "05082004-s34-420-kaynle-456",
    following_users: [
        "05082004-s34-420-m1lky-2310",
        "05082004-s34-420-vuhai-123",
        "05082004-s34-420-johndoe-789",
    ],
}];

export const FOLLOWER_DATA = [{
    id: "1",
    userId: "05082004-s34-420-m1lky-2310",
    followers: [
        "05082004-s34-420-kaynle-456",
        "05082004-s34-420-janedoe-101",
    ],
},
{
    id: "2",
    userId: "05082004-s34-420-vuhai-123",
    followers: [
        "05082004-s34-420-m1lky-2310",
        "05082004-s34-420-kaynle-456",
    ],
},
{
    id: "3",
    userId: "05082004-s34-420-kaynle-456",
    followers: [
        "05082004-s34-420-vuhai-123",
        "05082004-s34-420-m1lky-2310",
    ],
},
{
    id: "4",
    userId: "05082004-s34-420-johndoe-789",
    followers: [
        "05082004-s34-420-janedoe-101",
    ],
},
{
    id: "5",
    userId: "05082004-s34-420-janedoe-101",
    followers: [
        "05082004-s34-420-johndoe-789",
    ],
}];


