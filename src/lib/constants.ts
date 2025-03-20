
export const APP_NAME = "Cashlancing";
export const APP_DESCRIPTION = "Earn money by completing tasks, surveys, and offers online";
export const COPYRIGHT_YEAR = new Date().getFullYear();

export type NavItem = {
  title: string;
  href: string;
  icon?: string;
};

export const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Offer Walls",
    href: "/offers",
  },
  {
    title: "Withdraw",
    href: "/withdraw",
  },
  {
    title: "Referrals",
    href: "/referral",
  },
];

export type OfferWall = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: string;
};

export const offerWalls: OfferWall[] = [
  {
    id: "1",
    name: "AdGate Media",
    description: "Complete surveys and offers to earn rewards",
    image: "/placeholder.svg",
    averageReward: "$1.50",
    category: "Surveys"
  },
  {
    id: "2",
    name: "OfferToro",
    description: "Download apps and play games to earn",
    image: "/placeholder.svg",
    averageReward: "$2.25",
    category: "Apps"
  },
  {
    id: "3",
    name: "Revenue Universe",
    description: "Earn by completing high-paying tasks",
    image: "/placeholder.svg",
    averageReward: "$3.00",
    category: "Tasks"
  },
  {
    id: "4",
    name: "Theorem Reach",
    description: "Participate in market research studies",
    image: "/placeholder.svg",
    averageReward: "$4.50",
    category: "Surveys"
  },
  {
    id: "5",
    name: "Wannads",
    description: "Sign up for trials and services",
    image: "/placeholder.svg",
    averageReward: "$1.75",
    category: "Trials"
  },
  {
    id: "6",
    name: "Ayet Studios",
    description: "Play mobile games and reach goals",
    image: "/placeholder.svg",
    averageReward: "$3.25",
    category: "Games"
  }
];

export type WithdrawalOption = {
  id: string;
  name: string;
  description: string;
  image: string;
  minAmount: string;
  processingTime: string;
  category: "Crypto" | "Gift Card" | "Cash" | "Other";
};

export const withdrawalOptions: WithdrawalOption[] = [
  {
    id: "1",
    name: "PayPal",
    description: "Withdraw directly to your PayPal account",
    image: "/placeholder.svg",
    minAmount: "$5.00",
    processingTime: "24 hours",
    category: "Cash"
  },
  {
    id: "2",
    name: "Bitcoin",
    description: "Withdraw to your Bitcoin wallet",
    image: "/placeholder.svg",
    minAmount: "$10.00",
    processingTime: "48 hours",
    category: "Crypto"
  },
  {
    id: "3",
    name: "Amazon Gift Card",
    description: "Redeem for Amazon shopping",
    image: "/placeholder.svg",
    minAmount: "$1.00",
    processingTime: "Instant",
    category: "Gift Card"
  },
  {
    id: "4",
    name: "Ethereum",
    description: "Withdraw to your Ethereum wallet",
    image: "/placeholder.svg",
    minAmount: "$20.00",
    processingTime: "48 hours",
    category: "Crypto"
  },
  {
    id: "5",
    name: "Steam Gift Card",
    description: "Redeem for games on Steam",
    image: "/placeholder.svg",
    minAmount: "$5.00",
    processingTime: "Instant",
    category: "Gift Card"
  },
  {
    id: "6",
    name: "Visa Gift Card",
    description: "Virtual Visa card for online shopping",
    image: "/placeholder.svg",
    minAmount: "$10.00",
    processingTime: "24 hours",
    category: "Gift Card"
  }
];
