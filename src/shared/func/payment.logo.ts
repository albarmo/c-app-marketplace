export const getPaymentLogo = (code: string): string => {
    const logos: Record<string, string> = {
        "Localoka Coin": "/images/coins.svg"
    };
    return logos[code] || "/images/shipping/default-logo.svg";
};