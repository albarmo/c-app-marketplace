import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_ErrorLocation = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} d="M26 4.33301C17.615 4.33301 10.8333 11.1147 10.8333 19.4997C10.8333 28.5347 20.41 40.993 24.3533 45.738C25.22 46.778 26.8016 46.778 27.6683 45.738C31.59 40.993 41.1666 28.5347 41.1666 19.4997C41.1666 11.1147 34.385 4.33301 26 4.33301ZM26 24.9163C23.01 24.9163 20.5833 22.4897 20.5833 19.4997C20.5833 16.5097 23.01 14.083 26 14.083C28.99 14.083 31.4166 16.5097 31.4166 19.4997C31.4166 22.4897 28.99 24.9163 26 24.9163Z" />
        </svg>
    )
}