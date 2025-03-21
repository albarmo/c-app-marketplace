import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Deliery = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill={CHECK_COLOR} xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fill={CHECK_COLOR} d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fill={CHECK_COLOR} fillRule="evenodd" clipRule="evenodd" d="M1 5C1 4.44772 1.44772 4 2 4H13C13.5523 4 14 4.44772 14 5H18C18.3513 5 18.6768 5.1843 18.8575 5.4855L21.8575 10.4855C21.9507 10.6409 22 10.8188 22 11V17C22 17.5523 21.5523 18 21 18H19C18.4477 18 18 17.5523 18 17C18 16.4477 18.4477 16 19 16H20V12H14V16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H12V6H2C1.44772 6 1 5.55228 1 5ZM14 7V10H19.2338L17.4338 7H14ZM2 9C2 8.44772 2.44772 8 3 8H7C7.55228 8 8 8.44772 8 9C8 9.55228 7.55228 10 7 10H3C2.44772 10 2 9.55228 2 9ZM3 12C3.55228 12 4 12.4477 4 13V16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H3C2.44772 18 2 17.5523 2 17V13C2 12.4477 2.44772 12 3 12Z" />
        </svg>
    )
}