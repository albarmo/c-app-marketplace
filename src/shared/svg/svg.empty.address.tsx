import type { I_SVGProps } from "./constant";
import { checkColor } from "./function";

export const SVG_ErrorLocationEmpty = ({ className = '', color }: I_SVGProps) => (
    <svg className={className} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_10156_36953)">
            <path d="M26 4.3335C17.615 4.3335 10.8333 11.1152 10.8333 19.5002C10.8333 28.5352 20.41 40.9935 24.3533 45.7385C25.22 46.7785 26.8017 46.7785 27.6683 45.7385C31.59 40.9935 41.1667 28.5352 41.1667 19.5002C41.1667 11.1152 34.385 4.3335 26 4.3335ZM26 24.9168C23.01 24.9168 20.5833 22.4902 20.5833 19.5002C20.5833 16.5102 23.01 14.0835 26 14.0835C28.99 14.0835 31.4167 16.5102 31.4167 19.5002C31.4167 22.4902 28.99 24.9168 26 24.9168Z" fill={checkColor(color)} />
        </g>
        <rect x="44.8008" y="5.83999" width="6.23672" height="49.4156" transform="rotate(45 44.8008 5.83999)" fill={checkColor(color)} stroke="#F0F0F0" strokeWidth="2" />
        <defs>
            <clipPath id="clip0_10156_36953"><rect width="52" height="52" fill="white" /></clipPath>
        </defs>
    </svg>
);