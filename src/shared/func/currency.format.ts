import { ENV } from "@/configs/environment";

const currencySetting = ENV.CURRENCY;

const CURRENCY_CONFIG = {
  IDR: {
    localeId: "id-ID",
    currency: "IDR",
  },
  USD: {
    localeId: "en-US",
    currency: "USD",
  },
};

export function currency(num: string | number): string {
  const localeConfig = CURRENCY_CONFIG[currencySetting as Currency];
  return new Intl.NumberFormat(localeConfig.localeId, {
    style: "currency",
    currency: localeConfig.currency,
    maximumFractionDigits: 0,
  }).format(+num || 0);
}
