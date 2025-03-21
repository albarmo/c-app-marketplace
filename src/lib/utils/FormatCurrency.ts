export const formatCurrency = (amount?: number) => {
  if (!amount) return "-"; // Handle undefined, null, or 0 values
  return `Rp ${new Intl.NumberFormat("id-ID").format(amount)}`;
};
