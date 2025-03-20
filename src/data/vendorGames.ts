
import { VendorGame } from "@/types/offers";

export const vendorGames: VendorGame[] = [
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
