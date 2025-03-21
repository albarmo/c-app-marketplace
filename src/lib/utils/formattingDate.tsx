
export const formatFullDate = (strDate: string): string => {
    const date = new Date(strDate)
    
    const formatter = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
    })

    return formatter.format(date) // Wednesday, 12 Feb 2025
}

export const formatDateToMmYyyy = (input: string): string => {
    const [year, month] = input.split("-"); // Split "2025-01" into ["2025", "01"]
    const date = new Date(Number(year), Number(month) - 1); // Month is 0-based in JS
    
    return date.toLocaleString("en-US", { month: "short", year: "numeric" }); // Jan 2025
}