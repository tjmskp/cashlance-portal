import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";
import { VendorGame, Offer } from "@/types/offers";

type OfferCardProps = {
  offer: Offer;
  itemVariants: Record<string, unknown>; // Changed from any to unknown
  index: number;
  handlePlayGame: (game: VendorGame) => void;
};

export function OfferCard({ offer, itemVariants, index, handlePlayGame }: OfferCardProps) {
  const isVendorGame = 'gameUrl' in offer;

  return (
    <motion.div 
      variants={itemVariants}
      custom={index}
    >
      <Card className="h-full hover-scale overflow-hidden">
        <div className="h-36 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center p-6">
          <div className="h-16 w-16 rounded-full bg-white/90 dark:bg-black/30 flex items-center justify-center">
            <DollarSign className="h-8 w-8 text-cashlance-400" />
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle>{offer.name}</CardTitle>
            <Badge variant="outline" className="ml-2">
              {offer.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p>{offer.description}</p>
          {isVendorGame && (
            <Button onClick={() => handlePlayGame(offer as VendorGame)}>Play Game</Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
