
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, DollarSign, Award, TrendingUp } from "lucide-react";
import { ReferralStatsCard } from "./ReferralStatsCard";
import { ReferralLinkCard } from "./ReferralLinkCard";
import { ReferralsTable } from "./ReferralsTable";
import { EarningsTable } from "./EarningsTable";
import { ReferralBonuses } from "./ReferralBonuses";

export function ReferralSystem() {
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
          <ReferralStatsCard
            title="Total Referrals"
            value="3"
            change="+1"
            changeText="this month"
            icon={Users}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <ReferralStatsCard
            title="Total Earnings"
            value="$12.75"
            change="+$2.50"
            changeText="this month"
            icon={DollarSign}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <ReferralStatsCard
            title="Commission Rate"
            value="5%"
            changeText="Lifetime earnings"
            icon={Award}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <ReferralStatsCard
            title="Monthly Trend"
            value="+32%"
            changeText="Compared to last month"
            icon={TrendingUp}
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <ReferralLinkCard />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="referrals">
          <TabsList className="mb-8">
            <TabsTrigger value="referrals">Your Referrals</TabsTrigger>
            <TabsTrigger value="earnings">Earnings History</TabsTrigger>
            <TabsTrigger value="bonuses">Referral Bonuses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="referrals" className="mt-0">
            <ReferralsTable referrals={referrals} />
          </TabsContent>
          
          <TabsContent value="earnings" className="mt-0">
            <EarningsTable earnings={earnings} />
          </TabsContent>
          
          <TabsContent value="bonuses" className="mt-0">
            <ReferralBonuses />
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
