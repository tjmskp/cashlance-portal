
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offerWalls } from "@/lib/constants";
import { vendorGames } from "@/data/vendorGames";
import { offerwallProviders } from "@/data/offerwallProviders";
import { surveyNetworks } from "@/data/surveyNetworks";
import { affiliateNetworks } from "@/data/affiliateNetworks";
import { GamePlayer } from "./GamePlayer";
import { OfferSearch } from "./OfferSearch";
import { FeaturedOffer } from "./FeaturedOffer";
import { OfferCard } from "./OfferCard";
import { VendorGame, GameInfo, Offer } from "@/types/offers";

const allOffers = [...offerWalls, ...vendorGames, ...offerwallProviders, ...surveyNetworks, ...affiliateNetworks];

export function OfferWalls() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<VendorGame | null>(null);
  const [isGamePlayerOpen, setIsGamePlayerOpen] = useState(false);
  
  const categories = ["All", "Surveys", "Apps", "Games", "Tasks", "Trials", "Offerwall", "Affiliate"];
  
  const filteredOffers = allOffers.filter(offer => {
    const matchesSearch = offer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || selectedCategory === "All" || 
                            offer.category === selectedCategory;
                            
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handlePlayGame = (game: VendorGame) => {
    setSelectedGame(game);
    setIsGamePlayerOpen(true);
  };

  const handleCloseGamePlayer = () => {
    setIsGamePlayerOpen(false);
    setSelectedGame(null);
  };

  const handleOpenExternalOffer = (offer: Offer) => {
    if ('url' in offer) {
      window.open(offer.url, '_blank');
    }
  };

  const mapSelectedGameToGameInfo = (): GameInfo | null => {
    if (!selectedGame) return null;
    
    return {
      id: selectedGame.id,
      name: selectedGame.name,
      gameUrl: selectedGame.gameUrl,
      rules: selectedGame.rules,
      reward: selectedGame.averageReward
    };
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Offer Walls</h1>
            <p className="text-muted-foreground">
              Complete tasks, surveys, and offers to earn rewards
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/vendor-submit">
                <UserPlus className="mr-2 h-4 w-4" />
                Submit Your App
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <OfferSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        itemVariants={itemVariants}
      />

      <FeaturedOffer itemVariants={itemVariants} />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredOffers.map((offer, index) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            itemVariants={itemVariants}
            index={index}
            handlePlayGame={handlePlayGame}
            handleOpenExternalOffer={handleOpenExternalOffer}
          />
        ))}
      </div>

      {selectedGame && (
        <GamePlayer
          isOpen={isGamePlayerOpen}
          onClose={handleCloseGamePlayer}
          game={mapSelectedGameToGameInfo() as GameInfo}
        />
      )}
    </motion.div>
  );
}
