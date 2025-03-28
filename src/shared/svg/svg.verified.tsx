import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Verified = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} d="M11.5 6L10.28 4.605L10.45 2.76L8.645 2.35L7.7 0.75L6 1.48L4.3 0.75L3.355 2.345L1.55 2.75L1.72 4.6L0.5 6L1.72 7.395L1.55 9.245L3.355 9.655L4.3 11.25L6 10.515L7.7 11.245L8.645 9.65L10.45 9.24L10.28 7.395L11.5 6ZM4.69 8.005L3.5 6.805C3.305 6.61 3.305 6.295 3.5 6.1L3.535 6.065C3.73 5.87 4.05 5.87 4.245 6.065L5.05 6.875L7.625 4.295C7.82 4.1 8.14 4.1 8.335 4.295L8.37 4.33C8.565 4.525 8.565 4.84 8.37 5.035L5.41 8.005C5.205 8.2 4.89 8.2 4.69 8.005Z" />
        </svg>
    )
}