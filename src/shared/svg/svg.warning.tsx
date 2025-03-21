export function SVG_Warning({ size, className }: { size?: number, className?: string }) {
    const sizes = size ? size : "16"
    return (
        <svg className={className} width={sizes} height={sizes} viewBox={`0 0 ${sizes} ${sizes}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.3182 7.43305C5.36105 3.81102 6.38248 2 8 2C9.61752 2 10.6389 3.81101 12.6818 7.43304L12.9364 7.88439C14.634 10.8943 15.4828 12.3992 14.7156 13.4996C13.9485 14.6 12.0505 14.6 8.25456 14.6H7.74544C3.94949 14.6 2.05152 14.6 1.28438 13.4996C0.51724 12.3992 1.36604 10.8943 3.06364 7.88439L3.3182 7.43305ZM8 4.975C8.28995 4.975 8.525 5.21005 8.525 5.5V9C8.525 9.28995 8.28995 9.525 8 9.525C7.71005 9.525 7.475 9.28995 7.475 9V5.5C7.475 5.21005 7.71005 4.975 8 4.975ZM8 11.8C8.3866 11.8 8.7 11.4866 8.7 11.1C8.7 10.7134 8.3866 10.4 8 10.4C7.6134 10.4 7.3 10.7134 7.3 11.1C7.3 11.4866 7.6134 11.8 8 11.8Z" fill="#F2C94C" />
        </svg>
    )
}

export function SVG_WarningCircle({ size, className, color = "#E84040" }: { size?: number, className?: string, color?: string }) {
    const sizes = size ? size : "16"
    return (
        <svg className={className} width={sizes} height={sizes} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V5C9.25 4.58579 9.58579 4.25 10 4.25ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15Z" />
        </svg>
    )
}


