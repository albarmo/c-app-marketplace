import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Time = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_10156_37137)">
        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill={CHECK_COLOR}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 5.5C12.5523 5.5 13 5.94772 13 6.5V11.5L16.6 14.2C17.0418 14.5314 17.1314 15.1582 16.8 15.6C16.4686 16.0418 15.8418 16.1314 15.4 15.8L11 12.5V6.5C11 5.94772 11.4477 5.5 12 5.5Z" fill={CHECK_COLOR}/>
        </g>
            <defs>
                <clipPath id="clip0_10156_37137">
                    <rect width="24" height="24" fill={CHECK_COLOR}/>
                </clipPath>
            </defs>
        </svg>
    )
}