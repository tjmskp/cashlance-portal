
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PayPalButton } from "../payment/PayPalButton";

interface FeaturedOfferProps {
  itemVariants: any;
}

export function FeaturedOffer({ itemVariants }: FeaturedOfferProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden border-2 border-cashlance-300/50">
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-cashlance-300 text-cashlance-950">Featured</Badge>
          </div>
          <div className="h-40 bg-gradient-to-r from-cashlance-300/20 to-cashlance-500/20 flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-2">Complete Surveys & Earn</h3>
              <p className="text-muted-foreground mb-4">Share your opinion and get paid up to $5 per survey</p>
              <div className="flex gap-2 justify-center">
                <Button className="cashlance-button">Start Earning</Button>
                <PayPalButton 
                  amount="5.00" 
                  description="Deposit funds"
                  onSuccess={(details) => {
                    console.log("Payment successful:", details);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
