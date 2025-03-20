export type OfferWall = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: string;
};

export type VendorGame = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: string;
  gameUrl: string;
  rules: string;
  vendor: string;
  paypalEmail: string;
  paymentRules: string;
};

export type GameInfo = {
  id: string;
  name: string;
  gameUrl: string;
  rules: string;
  reward: string;
};

export type OfferwallProvider = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: "Offerwall";
  url: string;
  provider: string;
};

export type SurveyNetwork = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: "Surveys";
  url: string;
  provider: string;
  completionTime: string;
};

export type AffiliateNetwork = {
  id: string;
  name: string;
  description: string;
  image: string;
  averageReward: string;
  category: "Affiliate";
  url: string;
  provider: string;
  conversionRate: string;
};

export type Offer = OfferWall | VendorGame | OfferwallProvider | SurveyNetwork | AffiliateNetwork;
