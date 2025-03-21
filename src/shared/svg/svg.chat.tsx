import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Chat = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6H19V14C19 14.55 18.55 15 18 15H6V16C6 17.1 6.9 18 8 18H18L22 22V8C22 6.9 21.1 6 20 6ZM17 11V4C17 2.9 16.1 2 15 2H4C2.9 2 2 2.9 2 4V17L6 13H15C16.1 13 17 12.1 17 11Z" fill={CHECK_COLOR} />
        </svg>
    )
}

export const SVG_ChatOutline = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} fillRule="evenodd" clipRule="evenodd" d="M10 3.11628C6.19823 3.11628 3.11628 6.19823 3.11628 10C3.11628 11.1022 3.3749 12.1424 3.83427 13.0646C4.01864 13.4348 4.08963 13.8774 3.97331 14.3122L3.53006 15.9687C3.44866 16.273 3.727 16.5513 4.03125 16.4699L5.68784 16.0267C6.12259 15.9104 6.56521 15.9814 6.93537 16.1657C7.85764 16.6251 8.89782 16.8837 10 16.8837C13.8018 16.8837 16.8837 13.8018 16.8837 10C16.8837 6.19823 13.8018 3.11628 10 3.11628ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72126 18 7.51109 17.6996 6.43769 17.1649C6.27751 17.0851 6.11396 17.0682 5.97637 17.105L4.31978 17.5483C3.18576 17.8517 2.1483 16.8142 2.45172 15.6802L2.89496 14.0236C2.93178 13.886 2.91485 13.7225 2.83507 13.5623C2.30043 12.4889 2 11.2787 2 10ZM10 6.46512C10.3083 6.46512 10.5581 6.715 10.5581 7.02326V12.9767C10.5581 13.285 10.3083 13.5349 10 13.5349C9.69175 13.5349 9.44186 13.285 9.44186 12.9767V7.02326C9.44186 6.715 9.69175 6.46512 10 6.46512ZM7.02326 7.95349C7.33151 7.95349 7.5814 8.20338 7.5814 8.51163V11.4884C7.5814 11.7966 7.33151 12.0465 7.02326 12.0465C6.715 12.0465 6.46512 11.7966 6.46512 11.4884V8.51163C6.46512 8.20338 6.715 7.95349 7.02326 7.95349ZM12.9767 7.95349C13.285 7.95349 13.5349 8.20338 13.5349 8.51163V11.4884C13.5349 11.7966 13.285 12.0465 12.9767 12.0465C12.6685 12.0465 12.4186 11.7966 12.4186 11.4884V8.51163C12.4186 8.20338 12.6685 7.95349 12.9767 7.95349Z" />
        </svg>
    )
}