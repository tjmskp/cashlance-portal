
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Star, Clock } from "lucide-react";
import { Offer, VendorGame } from "@/types/offers";

interface OfferCardProps {
  offer: Offer;
  itemVariants: any;
  index: number;
  handlePlayGame: (game: VendorGame) => void;
}

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
          <p className="text-muted-foreground mb-4">{offer.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <Star className="h-4 w-4 text-muted mr-1" />
              <span className="text-sm text-muted-foreground">(4.0)</span>
            </div>
            <div className="text-sm flex items-center">
              <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">~10 min</span>
            </div>
          </div>
          
          {isVendorGame ? (
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Reward</div>
                <div className="text-xl font-bold">{offer.averageReward}</div>
              </div>
              <Button onClick={() => handlePlayGame(offer as VendorGame)}>Play Now</Button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Average reward</div>
                <div className="text-xl font-bold">{offer.averageReward}</div>
              </div>
              <Button>View Offers</Button>
            </div>
          )}
          
          {'vendor' in offer && (
            <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
              Provided by: {offer.vendor}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
