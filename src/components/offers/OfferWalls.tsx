
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  DollarSign, 
  Star,
  Clock,
  Plus,
  UserPlus
} from "lucide-react";
import { offerWalls } from "@/lib/constants";
import { GamePlayer } from "./GamePlayer";
import { PayPalButton } from "../payment/PayPalButton";

// Add vendor submitted games - in a real app, this would come from your database
const vendorGames = [
  {
    id: "v1",
    name: "Puzzle Master",
    description: "Solve challenging puzzles and earn rewards",
    image: "/placeholder.svg",
    averageReward: "$2.75",
    category: "Games",
    gameUrl: "https://example.com/puzzle-game",
    rules: "Complete the first 5 puzzles without using hints to earn your reward.",
    vendor: "GameStudio Inc."
  },
  {
    id: "v2",
    name: "Fantasy RPG Adventure",
    description: "Embark on an epic quest in this fantasy world",
    image: "/placeholder.svg",
    averageReward: "$3.50",
    category: "Games",
    gameUrl: "https://example.com/fantasy-rpg",
    rules: "Create a character, complete the tutorial, and defeat the first boss.",
    vendor: "Epic Games LLC"
  },
  {
    id: "v3",
    name: "Fitness Tracker Pro",
    description: "Track your workouts and earn by staying active",
    image: "/placeholder.svg",
    averageReward: "$1.25",
    category: "Apps",
    gameUrl: "https://example.com/fitness-app",
    rules: "Install the app, create an account, and log 3 workouts.",
    vendor: "HealthTech Solutions"
  }
];

// Combine all offers
const allOffers = [...offerWalls, ...vendorGames];

export function OfferWalls() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<any | null>(null);
  const [isGamePlayerOpen, setIsGamePlayerOpen] = useState(false);
  
  const categories = ["All", "Surveys", "Apps", "Games", "Tasks", "Trials"];
  
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

  const handlePlayGame = (game: any) => {
    setSelectedGame(game);
    setIsGamePlayerOpen(true);
  };

  const handleCloseGamePlayer = () => {
    setIsGamePlayerOpen(false);
    setSelectedGame(null);
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

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search offer walls..."
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={selectedCategory === category || (category === "All" && selectedCategory === null) ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Featured offer */}
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

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredOffers.map((offer, index) => (
          <motion.div 
            key={offer.id}
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
                
                {'gameUrl' in offer ? (
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Reward</div>
                      <div className="text-xl font-bold">{offer.averageReward}</div>
                    </div>
                    <Button onClick={() => handlePlayGame(offer)}>Play Now</Button>
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
                
                {/* Show vendor info if available */}
                {'vendor' in offer && (
                  <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                    Provided by: {offer.vendor}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Game player dialog */}
      {selectedGame && (
        <GamePlayer
          isOpen={isGamePlayerOpen}
          onClose={handleCloseGamePlayer}
          game={selectedGame}
        />
      )}
    </motion.div>
  );
}
