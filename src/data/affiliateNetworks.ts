
import { AffiliateNetwork } from "@/types/offers";

export const affiliateNetworks: AffiliateNetwork[] = [
  {
    id: "an1",
    name: "Impact Partnership",
    description: "Join top-tier offers through Impact's affiliate network",
    image: "/placeholder.svg",
    averageReward: "$5.50",
    category: "Affiliate",
    url: "https://impact.com",
    provider: "Impact",
    conversionRate: "3.2%"
  },
  {
    id: "an2",
    name: "CJ Affiliate Program",
    description: "Earn through CJ's extensive affiliate marketplace",
    image: "/placeholder.svg",
    averageReward: "$6.25",
    category: "Affiliate",
    url: "https://cj.com",
    provider: "Commission Junction",
    conversionRate: "3.8%"
  },
  {
    id: "an3",
    name: "Awin Global Network",
    description: "Access global affiliate programs through Awin",
    image: "/placeholder.svg",
    averageReward: "$4.75",
    category: "Affiliate",
    url: "https://awin.com",
    provider: "Awin",
    conversionRate: "2.9%"
  }
];
