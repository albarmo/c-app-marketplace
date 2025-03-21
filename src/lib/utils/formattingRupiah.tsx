export const formatToRupiah = (value: string): string => {
    const numberValue = Number(value.replace(/\D/g, "")); // Remove non-numeric characters
    return numberValue
        ? `Rp ${numberValue.toLocaleString("id-ID")}`
        : ""; // Format as Rp1.000.000
}