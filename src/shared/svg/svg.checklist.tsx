import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Checklist = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)

    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_578_10089)">
                <path d="M8.64656 16.5539L9.00012 16.9074L9.35367 16.5539L19.2537 6.65387C19.4484 6.45913 19.7518 6.45913 19.9466 6.65387C20.1413 6.8486 20.1413 7.15202 19.9466 7.34676L9.34673 17.9366L9.34656 17.9368C9.15183 18.1315 8.83841 18.1315 8.64367 17.9368L4.45367 13.7468C4.25893 13.552 4.25893 13.2486 4.45367 13.0539C4.64841 12.8591 4.95183 12.8591 5.14656 13.0539L8.64656 16.5539Z" stroke={CHECK_COLOR}/>
            </g>
            <defs>
                <clipPath id="clip0_578_10089">
                    <rect width="24" height="24" fill={CHECK_COLOR}/>
                </clipPath>
            </defs>
        </svg>
    )
}