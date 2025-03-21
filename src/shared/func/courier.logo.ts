export const getCourierLogo = (code: string): string => {
    const logos: Record<string, string> = {
        JNE: "/images/shipping/jne-logo.svg",
        PosIndonesia: "/images/shipping/pos-logo.svg",
        AmbilSendiri: "/images/shipping/self-pickup.svg"
    };
    return logos[code] || "/images/shipping/default-logo.svg";
};