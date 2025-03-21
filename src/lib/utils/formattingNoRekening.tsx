export const formatNoRekening = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ").trim()
}