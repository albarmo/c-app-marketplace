// Default color is currentColor or global text color

import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"


export const SVG_ChevronRight = ({ className = '', color = '' }: I_SVGProps) => {

    const CHECK_COLOR = checkColor(color)

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_9848_5985)">
                <path d="M9.29006 6.71002C8.90006 7.10002 8.90006 7.73002 9.29006 8.12002L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70002C10.3201 6.32002 9.68006 6.32002 9.29006 6.71002Z" fill={CHECK_COLOR} />
            </g>
            <defs>
                <clipPath id="clip0_9848_5985">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export const SVG_ChevronLeft = ({ className = '', color = '' }: I_SVGProps) => {

    const CHECK_COLOR = checkColor(color)

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_9848_5987)">
                <path d="M14.71 6.70998C14.32 6.31998 13.69 6.31998 13.3 6.70998L8.71001 11.3C8.32001 11.69 8.32001 12.32 8.71001 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.1 16.91 15.1 16.28 14.71 15.89L10.83 12L14.71 8.11998C15.1 7.72998 15.09 7.08998 14.71 6.70998Z" fill={CHECK_COLOR} />
            </g>
            <defs>
                <clipPath id="clip0_9848_5987">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

