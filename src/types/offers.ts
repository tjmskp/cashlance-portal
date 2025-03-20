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

export type Offer = OfferWall | VendorGame;
