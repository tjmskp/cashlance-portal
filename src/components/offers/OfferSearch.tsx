
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface OfferSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  categories: string[];
  itemVariants: any;
}

export function OfferSearch({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  itemVariants
}: OfferSearchProps) {
  return (
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
  );
}
