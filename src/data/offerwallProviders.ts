
import { OfferwallProvider } from "@/types/offers";

export const offerwallProviders: OfferwallProvider[] = [
  {
    id: "op1",
    name: "AdGate Rewards",
    description: "Complete tasks and offers to earn with AdGate Rewards",
    image: "/placeholder.svg",
    averageReward: "$3.25",
    category: "Offerwall",
    url: "https://adgaterewards.com",
    provider: "AdGate Media"
  },
  {
    id: "op2",
    name: "OfferToro Tasks",
    description: "Earn rewards by completing offers through OfferToro",
    image: "/placeholder.svg",
    averageReward: "$2.75",
    category: "Offerwall",
    url: "https://offertoro.com",
    provider: "OfferToro"
  },
  {
    id: "op3",
    name: "Ayet Rewards",
    description: "Complete mobile offers and earn with Ayet",
    image: "/placeholder.svg",
    averageReward: "$3.50",
    category: "Offerwall",
    url: "https://ayetstudios.com",
    provider: "Ayet Studios"
  }
];
