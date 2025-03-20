
import { SurveyNetwork } from "@/types/offers";

export const surveyNetworks: SurveyNetwork[] = [
  {
    id: "sn1",
    name: "Theorem Reach Surveys",
    description: "Participate in high-quality market research studies",
    image: "/placeholder.svg",
    averageReward: "$4.25",
    category: "Surveys",
    url: "https://theoremreach.com",
    provider: "Theorem Reach",
    completionTime: "15-20 minutes"
  },
  {
    id: "sn2",
    name: "Pollfish Survey Panel",
    description: "Share your opinions and get rewarded with Pollfish",
    image: "/placeholder.svg",
    averageReward: "$3.50",
    category: "Surveys",
    url: "https://pollfish.com",
    provider: "Pollfish",
    completionTime: "10-15 minutes"
  },
  {
    id: "sn3",
    name: "CPX Research",
    description: "Complete surveys and earn rewards with CPX Research",
    image: "/placeholder.svg",
    averageReward: "$3.75",
    category: "Surveys",
    url: "https://cpx-research.com",
    provider: "CPX Research",
    completionTime: "12-18 minutes"
  }
];
