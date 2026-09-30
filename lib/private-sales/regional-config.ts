export type SalesRegion = "in" | "uk" | "ae";

export type RegionalConfig = {
  region: SalesRegion;
  marketName: string;
  currencyCode: string;
  currencySymbol: string;
  locale: string;
};

export const regionalConfig: Record<SalesRegion, RegionalConfig> = {
  in: {
    region: "in",
    marketName: "India",
    currencyCode: "INR",
    currencySymbol: "₹",
    locale: "en-IN",
  },

  uk: {
    region: "uk",
    marketName: "United Kingdom",
    currencyCode: "GBP",
    currencySymbol: "£",
    locale: "en-GB",
  },

  ae: {
    region: "ae",
    marketName: "United Arab Emirates",
    currencyCode: "AED",
    currencySymbol: "AED",
    locale: "en-AE",
  },
};

export function getRegionalConfig(region: SalesRegion): RegionalConfig {
  return regionalConfig[region];
}