import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Incoming = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={CHECK_COLOR} d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V3.5C0 3.25 0.0416667 3.025 0.125 2.825C0.208333 2.625 0.316667 2.43333 0.45 2.25L1.85 0.55C1.98333 0.366667 2.15 0.229167 2.35 0.1375C2.55 0.0458333 2.76667 0 3 0H15C15.2333 0 15.45 0.0458333 15.65 0.1375C15.85 0.229167 16.0167 0.366667 16.15 0.55L17.55 2.25C17.6833 2.43333 17.7917 2.625 17.875 2.825C17.9583 3.025 18 3.25 18 3.5V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2.4 3H15.6L14.75 2H3.25L2.4 3ZM9 14.575C9.13333 14.575 9.25833 14.5542 9.375 14.5125C9.49167 14.4708 9.6 14.4 9.7 14.3L12.3 11.7C12.4833 11.5167 12.575 11.2833 12.575 11C12.575 10.7167 12.4833 10.4833 12.3 10.3C12.1167 10.1167 11.8833 10.025 11.6 10.025C11.3167 10.025 11.0833 10.1167 10.9 10.3L10 11.2V8C10 7.71667 9.90417 7.47917 9.7125 7.2875C9.52083 7.09583 9.28333 7 9 7C8.71667 7 8.47917 7.09583 8.2875 7.2875C8.09583 7.47917 8 7.71667 8 8V11.2L7.1 10.3C6.91667 10.1167 6.68333 10.025 6.4 10.025C6.11667 10.025 5.88333 10.1167 5.7 10.3C5.51667 10.4833 5.425 10.7167 5.425 11C5.425 11.2833 5.51667 11.5167 5.7 11.7L8.3 14.3C8.4 14.4 8.50833 14.4708 8.625 14.5125C8.74167 14.5542 8.86667 14.575 9 14.575Z" />
        </svg>
    )
}