import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Menu = ({ className = '', color = '' }: I_SVGProps ) => {

    const CHECK_COLOR = checkColor(color)

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
            <path fill={CHECK_COLOR} d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
    )
}