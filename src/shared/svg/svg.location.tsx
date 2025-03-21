import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Location = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_10156_37075)">
                <path fill={CHECK_COLOR} d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
            </g>
            <defs>
                <clipPath id="clip0_10156_37075">
                    <rect width="24" height="24" fill={CHECK_COLOR}/>
                </clipPath>
            </defs>
        </svg>
    )
}