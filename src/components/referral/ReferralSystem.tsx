
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Share2, Users, DollarSign, Award, TrendingUp } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export function ReferralSystem() {
  const [copied, setCopied] = useState(false);
  
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://cashlancing.com/ref/johndoe");
    setCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const referrals = [
    { id: 1, username: "user123", date: "2023-06-15", earnings: "$5.25", status: "active" },
    { id: 2, username: "jane_doe", date: "2023-06-12", earnings: "$3.75", status: "active" },
    { id: 3, username: "mike_smith", date: "2023-06-01", earnings: "$2.50", status: "active" }
  ];

  const earnings = [
    { id: 1, username: "user123", date: "2023-06-15", amount: "$0.75", task: "Survey completion" },
    { id: 2, username: "jane_doe", date: "2023-06-14", amount: "$0.50", task: "App installation" },
    { id: 3, username: "user123", date: "2023-06-12", amount: "$1.25", task: "Survey completion" },
    { id: 4, username: "mike_smith", date: "2023-06-10", amount: "$0.25", task: "Video watched" }
  ];

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
            <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
            <p className="text-muted-foreground">
              Invite friends and earn 5% of their earnings forever
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={itemVariants}>
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Total Referrals</CardTitle>
              <Users className="h-5 w-5 text-cashlance-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="text-green-600 dark:text-green-400 font-medium">+1</span> this month
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-5 w-5 text-cashlance-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$12.75</div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="text-green-600 dark:text-green-400 font-medium">+$2.50</span> this month
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Commission Rate</CardTitle>
              <Award className="h-5 w-5 text-cashlance-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5%</div>
              <p className="text-sm text-muted-foreground mt-1">
                Lifetime earnings
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="hover-scale">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Monthly Trend</CardTitle>
              <TrendingUp className="h-5 w-5 text-cashlance-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">+32%</div>
              <p className="text-sm text-muted-foreground mt-1">
                Compared to last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value="https://cashlancing.com/ref/johndoe"
                    readOnly
                    className="w-full pr-4 py-3 rounded-md border bg-background pl-4"
                  />
                </div>
                <Button onClick={copyToClipboard} className="cashlance-button">
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" /> Share on Twitter
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" /> Share on Facebook
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" /> Share via Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="referrals">
          <TabsList className="mb-8">
            <TabsTrigger value="referrals">Your Referrals</TabsTrigger>
            <TabsTrigger value="earnings">Earnings History</TabsTrigger>
            <TabsTrigger value="bonuses">Referral Bonuses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="referrals" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-secondary/50">
                          <th className="text-left p-3 font-medium">Username</th>
                          <th className="text-left p-3 font-medium">Date Joined</th>
                          <th className="text-left p-3 font-medium">Total Earnings</th>
                          <th className="text-left p-3 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {referrals.map((referral) => (
                          <tr key={referral.id} className="border-b">
                            <td className="p-3">{referral.username}</td>
                            <td className="p-3">{referral.date}</td>
                            <td className="p-3">{referral.earnings}</td>
                            <td className="p-3">
                              <Badge variant="outline" className="bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
                                {referral.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="earnings" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-secondary/50">
                          <th className="text-left p-3 font-medium">Username</th>
                          <th className="text-left p-3 font-medium">Date</th>
                          <th className="text-left p-3 font-medium">Amount</th>
                          <th className="text-left p-3 font-medium">Task</th>
                        </tr>
                      </thead>
                      <tbody>
                        {earnings.map((earning) => (
                          <tr key={earning.id} className="border-b">
                            <td className="p-3">{earning.username}</td>
                            <td className="p-3">{earning.date}</td>
                            <td className="p-3 text-green-600 dark:text-green-400">{earning.amount}</td>
                            <td className="p-3">{earning.task}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bonuses" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Referral Tiers</h3>
                    <p className="text-muted-foreground mb-4">
                      Unlock higher commission rates by referring more users
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg bg-background">
                        <div>
                          <div className="font-medium">Standard</div>
                          <div className="text-sm text-muted-foreground">1-9 active referrals</div>
                        </div>
                        <Badge>5% Commission</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg bg-background">
                        <div>
                          <div className="font-medium">Silver</div>
                          <div className="text-sm text-muted-foreground">10-49 active referrals</div>
                        </div>
                        <Badge>7% Commission</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg bg-background">
                        <div>
                          <div className="font-medium">Gold</div>
                          <div className="text-sm text-muted-foreground">50+ active referrals</div>
                        </div>
                        <Badge>10% Commission</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Special Bonuses</h3>
                    <p className="text-muted-foreground mb-4">
                      Earn extra rewards with these special referral bonuses
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg bg-background">
                        <div>
                          <div className="font-medium">First 5 Referrals</div>
                          <div className="text-sm text-muted-foreground">Get a bonus for your first 5 referrals</div>
                        </div>
                        <Badge>$5 Bonus</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg bg-background">
                        <div>
                          <div className="font-medium">Monthly Contest</div>
                          <div className="text-sm text-muted-foreground">Top referrer each month wins</div>
                        </div>
                        <Badge>$50 Bonus</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
