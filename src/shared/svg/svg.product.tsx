import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Product = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6V4ZM19 8H4C3.44772 8 3 8.44772 3 9V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9C21 8.44771 20.5523 8 20 8H19ZM16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13Z" />
        </svg>
    )
}