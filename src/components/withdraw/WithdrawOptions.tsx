
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { withdrawalOptions } from "@/lib/constants";
import { Clock, DollarSign, Filter, Search } from "lucide-react";

export function WithdrawOptions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<string>("all");
  
  const filteredOptions = withdrawalOptions.filter(option => {
    const matchesSearch = option.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          option.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedTab === "all" || option.category.toLowerCase() === selectedTab;
                            
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
            <h1 className="text-3xl font-bold tracking-tight">Withdraw</h1>
            <p className="text-muted-foreground">
              Cash out your earnings through various payment methods
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-secondary/50 p-6 rounded-xl border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Available Balance</h2>
            <div className="text-3xl font-bold">$24.50</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button className="cashlance-button w-full sm:w-auto">
              <DollarSign className="mr-2 h-4 w-4" /> Withdraw Now
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">Earning History</Button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search withdrawal options..."
            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="all" onValueChange={setSelectedTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Options</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="gift card">Gift Cards</TabsTrigger>
            <TabsTrigger value="cash">Cash</TabsTrigger>
          </TabsList>
          
          <TabsContent value={selectedTab} className="mt-0">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredOptions.map((option, index) => (
                <motion.div 
                  key={option.id}
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
                        <CardTitle>{option.name}</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          {option.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Minimum</div>
                          <div className="font-medium">{option.minAmount}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Processing</div>
                          <div className="font-medium flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {option.processingTime}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Withdraw</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
