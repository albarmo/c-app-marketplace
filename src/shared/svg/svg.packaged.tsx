import type { I_SVGProps } from "./constant"
import { checkColor } from "./function"

export const SVG_Packaged = ({ className = '', color }: I_SVGProps) => {
    const CHECK_COLOR = checkColor(color)

    return (
        <svg className={className} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.029 1.54059C9.32605 1.37563 9.66022 1.28906 10 1.28906C10.3398 1.28906 10.674 1.37563 10.971 1.54059L18.486 5.71459C18.6418 5.80123 18.7716 5.92795 18.862 6.08161C18.9524 6.23528 19 6.41032 19 6.58859V14.8236C18.9999 15.1802 18.9045 15.5304 18.7235 15.8377C18.5426 16.1451 18.2828 16.3984 17.971 16.5716L10.971 20.4616C10.674 20.6266 10.3398 20.7131 10 20.7131C9.66022 20.7131 9.32605 20.6266 9.029 20.4616L2.029 16.5716C1.71736 16.3985 1.45763 16.1453 1.27671 15.8381C1.0958 15.531 1.00026 15.1811 1 14.8246V6.58859C0.999993 6.41032 1.04764 6.23528 1.13802 6.08161C1.22839 5.92795 1.3582 5.80123 1.514 5.71459L9.03 1.54059H9.029Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 6L10 11L1 6ZM10 11L19 6L10 11ZM10 11V20.5V11Z" fill={CHECK_COLOR}/>
            <path d="M1 6L10 11M10 11L19 6M10 11V20.5" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M5.5 8.5L14.5 3.5M4 11.328L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}