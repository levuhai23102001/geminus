import { HiPlus } from "react-icons/hi";
import { BiMessageAltMinus } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { RiUserReceivedLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { RiShare2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import EmojiIcon from "../../../../public/Emoji.png";
import AiBg from "../../../../public/aiBg.jpg";
import { IoSend as SendIcon } from "react-icons/io5";
import { FaHeart as FillHeartIcon } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";

const PlusIcon = <HiPlus />;
const MessageIcon = <BiMessageAltMinus />;
const InboxIcon = <RiSendPlaneFill />;
const ExploreIcon = <MdOutlineExplore />;
const HomeIcon = <RiHome3Line />;
const FollowingIcon = <RiUserReceivedLine />;
const ReelIcon = <BsCameraVideo />;
const ShareIcon = <RiShare2Line />;
const HeartIcon = <FaRegHeart />;
const ArrowOutIcon = <MdArrowOutward />;
const ThreeDotHorizontal = <HiOutlineDotsHorizontal />;
const UploadIconCircle = <IoArrowUpCircle />;

type LogoProps = {
    width?: number;
    height?: number;
    color?: string;
};

export const LogoIcon = ({ width, height, color }: LogoProps) => (
    <svg
        width={width || 43}
        height={height || 40}
        viewBox="0 0 398 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M325.134 475.437C321.989 498.795 299.129 517.043 276.411 510.743C244.042 501.826 206.564 487.918 172.841 485.326C168.395 484.984 121.156 481.403 121.156 481.403C112.8 480.808 104.957 477.157 99.1213 471.148L10.0634 379.448C0.330684 369.428 -2.30381 354.484 3.41519 341.74C3.41519 341.74 58.4837 220.728 60.529 214.435C62.5743 208.142 70.0803 153.256 74.5283 123.77C75.7073 115.956 79.5653 108.793 85.4413 103.508L190.794 8.74822C205.451 -4.43479 228.203 -2.4812 240.396 13.0074L328.898 125.419C333.905 131.781 336.471 139.688 336.509 147.783C336.61 169.08 338.368 212.805 350.144 240.968C361.6 268.361 382.625 297.946 393.614 312.504C397.83 318.091 398.477 325.646 394.914 331.673C387.159 344.801 371.837 370.009 350.144 402.351C335.189 424.651 328.259 452.218 325.134 475.437Z"
            fill={color || "#6C31E3"}
        />
        <path
            d="M108.718 478.079C150.076 394.115 148.922 333.963 131.324 291.034C115.127 251.53 85.0028 226.613 61.2588 211.149C60.7588 213.383 60.0338 215.564 59.0948 217.658L3.41373 341.74C-2.30527 354.484 0.32922 369.428 10.0619 379.448L99.1198 471.148C101.914 474.024 105.168 476.361 108.718 478.079Z"
            fill="url(#paint0_radial_1_115)"
        />
        <path
            d="M276.422 510.731C299.135 517.031 321.992 498.783 325.136 475.424C327.845 455.314 333.404 431.94 344.561 411.554C318.962 356.452 288.007 327.877 254.072 315.212C218.151 301.805 178.892 306.225 139.114 315.885C148.006 356.353 142.683 409.204 108.764 478.072C112.627 479.942 116.838 481.081 121.19 481.391C121.19 481.391 145.665 483.452 174.773 485.512C203.881 487.572 247.197 502.626 276.422 510.731Z"
            fill="url(#paint1_radial_1_115)"
        />
        <path
            d="M221.269 307.659C232.445 308.826 243.399 311.235 254.06 315.213C288.002 327.879 318.964 356.455 344.567 411.553C346.288 408.408 348.144 405.333 350.144 402.351C371.835 370.009 387.158 344.801 394.913 331.673C398.476 325.646 397.829 318.091 393.612 312.504C382.624 297.946 361.599 268.361 350.144 240.968C338.367 212.805 336.609 169.08 336.509 147.783C336.47 139.688 333.904 131.781 328.897 125.419L240.395 13.0073C239.923 12.4062 239.433 11.8256 238.929 11.2654C245.423 32.5466 244.983 49.6659 240.977 65.2287C237.263 79.6557 230.483 92.7451 223.322 106.571L223.32 106.573C220.918 111.21 218.474 115.93 216.087 120.812C206.585 140.247 198.007 162.241 196.742 191.734C195.475 221.228 201.522 258.22 221.272 307.658L221.269 307.659Z"
            fill="url(#paint2_radial_1_115)"
        />
        <path
            d="M221.257 307.658C201.508 258.221 195.46 221.228 196.726 191.733C197.992 162.238 206.571 140.244 216.074 120.807C218.461 115.924 220.906 111.204 223.309 106.566C230.469 92.7399 237.249 79.6517 240.962 65.226C244.969 49.6597 245.409 32.5357 238.909 11.2456C226.424 -2.61128 204.871 -3.91716 190.79 8.74822L85.437 103.508C79.561 108.793 75.703 115.956 74.524 123.77L61.699 208.786C61.58 209.575 61.433 210.359 61.259 211.138C85.004 226.601 115.133 251.521 131.331 291.03C134.495 298.748 137.127 307.019 139.077 315.888C167.052 309.094 194.772 304.893 221.257 307.658Z"
            fill="url(#paint3_radial_1_115)"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M196.933 189.79C195.663 219.048 199.315 252.61 219.022 301.944L212.834 301.386C195.153 249.904 191.305 223.509 192.592 193.847C193.881 164.17 203.47 141.35 213.026 121.884C215.446 116.954 221.093 107.696 223.509 103.049C230.664 89.2908 235.426 82.0228 239.515 69.4468C245.229 51.8747 243.993 43.5519 243.341 35.2692C247.878 65.2105 230.659 91.2462 217.641 117.763C208.159 137.08 198.201 160.547 196.933 189.79Z"
            fill="url(#paint4_radial_1_115)"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M137.151 293.21C139.488 298.615 141.696 302.979 143.09 309.667L137.926 310.828C135.777 303.019 134.117 297.463 131.143 290.765C113.347 248.78 84.7868 227.184 61.4468 211.344C89.6386 226.511 118.574 250.251 137.151 293.21Z"
            fill="url(#paint5_radial_1_115)"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M143.39 314.949C153.251 360.838 142.25 419.137 109.831 475.807C136.929 419.644 150.065 365.703 139.125 315.864L143.39 314.949Z"
            fill="url(#paint6_radial_1_115)"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M255.285 310.821C308.439 330.713 328.905 374.389 344.203 410.822C325.309 372.671 299.043 330.538 253.378 314.9C218.631 303 189.287 304.411 139.121 315.796L138.003 310.821C191.244 298.691 219.08 297.272 255.285 310.821Z"
            fill="url(#paint7_radial_1_115)"
        />
        <defs>
            <radialGradient
                id="paint0_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(104.27 469.791) rotate(-104.574) scale(232.965 155.247)"
            >
                <stop stop-color="white" stop-opacity="0.4" />
                <stop offset="1" stop-opacity="0.1" />
            </radialGradient>
            <radialGradient
                id="paint1_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(278.11 511.988) rotate(-120.563) scale(189.301 217.356)"
            >
                <stop stop-color="white" stop-opacity="0.3" />
                <stop offset="1" stop-opacity="0.25" />
            </radialGradient>
            <radialGradient
                id="paint2_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(302.825 374) rotate(-82.4846) scale(382.284 282.434)"
            >
                <stop stop-color="white" stop-opacity="0.55" />
                <stop offset="1" stop-color="white" stop-opacity="0.05" />
            </radialGradient>
            <radialGradient
                id="paint3_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(118.23 306.884) rotate(-77.7214) scale(326.45 222.631)"
            >
                <stop stop-color="white" stop-opacity="0.83" />
                <stop offset="1" stop-color="white" stop-opacity="0.4" />
            </radialGradient>
            <radialGradient
                id="paint4_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(252.825 128) rotate(102.236) scale(169.859 114.542)"
            >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" stop-opacity="0.17" />
            </radialGradient>
            <radialGradient
                id="paint5_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(53.8238 220) rotate(45.3237) scale(125.16 266.579)"
            >
                <stop stop-color="white" stop-opacity="0.2" />
                <stop offset="1" stop-color="white" stop-opacity="0.44" />
            </radialGradient>
            <radialGradient
                id="paint6_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(148.316 279.224) rotate(80.2016) scale(146.696 311.515)"
            >
                <stop stop-color="white" stop-opacity="0.25" />
                <stop offset="1" stop-color="white" stop-opacity="0.3" />
            </radialGradient>
            <radialGradient
                id="paint7_radial_1_115"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(342.826 398.999) rotate(-152.297) scale(223.528 703.43)"
            >
                <stop stop-color="white" stop-opacity="0.21" />
                <stop offset="0.46738" stop-color="white" stop-opacity="0.19" />
                <stop offset="1" stop-color="white" stop-opacity="0.29" />
            </radialGradient>
        </defs>
    </svg>
);

export {
    PlusIcon,
    ExploreIcon,
    HomeIcon,
    FollowingIcon,
    ReelIcon,
    MessageIcon,
    InboxIcon,
    ShareIcon,
    HeartIcon,
    ThreeDotHorizontal,
    ArrowOutIcon,
    EmojiIcon,
    SendIcon,
    FillHeartIcon,
    AiBg,
    UploadIconCircle,
};
