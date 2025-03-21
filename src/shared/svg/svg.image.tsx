import type { I_SVGProps } from "./constant"
// import { checkColor } from "./function"

export const SVG_Image = ({ className = '', color }: I_SVGProps) => {
    // const CHECK_COLOR = checkColor(color)
    return (
        <svg width="75" height="75" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="64" height="64" rx="4" fill="#F0F0F0"/>
            <rect x="1" y="1" width="64" height="64" rx="4" stroke="#9EBBD7" strokeLinecap="round" strokeDasharray="7 7"/>
            <path d="M36 29H36.01" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M38 25H28C26.3431 25 25 26.3431 25 28V38C25 39.6569 26.3431 41 28 41H38C39.6569 41 41 39.6569 41 38V28C41 26.3431 39.6569 25 38 25Z" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 36L29 32C29.4561 31.5611 29.9734 31.3301 30.5 31.3301C31.0266 31.3301 31.5439 31.5611 32 32L37 37" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35 35L36 34C36.4561 33.5611 36.9734 33.3301 37.5 33.3301C38.0266 33.3301 38.5439 33.5611 39 34L41 36" stroke="#0D569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}