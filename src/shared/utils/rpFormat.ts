export const rpFormat = (value: number, withSymbol: boolean = true): string => {
    const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

    return withSymbol ? formatted.replace(/\s/g, '') : formatted.replace(/^Rp\s*/, '').trim();
};