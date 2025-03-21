export const thousandSeparator = (input: string): string => {
    const rawValue = input.replace(/\./g, "")
    return rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}