import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Search = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} fillRule="evenodd" clipRule="evenodd" d="M9.16636 3.33314C5.94476 3.33314 3.33314 5.94476 3.33314 9.16636C3.33314 12.388 5.94476 14.9996 9.16636 14.9996C12.388 14.9996 14.9996 12.388 14.9996 9.16636C14.9996 5.94476 12.388 3.33314 9.16636 3.33314ZM1.6665 9.16636C1.6665 5.0243 5.0243 1.6665 9.16636 1.6665C13.3084 1.6665 16.6662 5.0243 16.6662 9.16636C16.6662 13.3084 13.3084 16.6662 9.16636 16.6662C5.0243 16.6662 1.6665 13.3084 1.6665 9.16636Z" />
            <path fill={CHECK_COLOR} fillRule="evenodd" clipRule="evenodd" d="M13.2857 13.2853C13.6111 12.9599 14.1387 12.9599 14.4642 13.2853L18.0891 16.9103C18.4145 17.2357 18.4145 17.7633 18.0891 18.0888C17.7637 18.4142 17.236 18.4142 16.9106 18.0888L13.2857 14.4638C12.9602 14.1384 12.9602 13.6108 13.2857 13.2853Z" />
        </svg>
    )
}