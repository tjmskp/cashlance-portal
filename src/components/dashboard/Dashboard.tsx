
import { useState } from "react";
import { motion } from "framer-motion";
import { Stats } from "./Stats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Trophy, 
  Star, 
  Users 
} from "lucide-react";

export function Dashboard() {
  const [currentUser] = useState({
    name: "John Doe",
    balance: "$24.50",
    pendingBalance: "$5.25",
    level: 4,
    xp: 450,
    xpRequired: 500,
    referrals: 3,
    referralEarnings: "$12.75",
    tasks: {
      completed: 32,
      available: 124
    },
    latestAchievements: [
      { name: "Fast Earner", description: "Complete 5 offers in a day", date: "Today" },
      { name: "Getting Started", description: "Earn your first $5", date: "Yesterday" }
    ],
    recentEarnings: [
      { name: "Survey completion", amount: "$2.50", time: "2 hours ago" },
      { name: "App installation", amount: "$1.75", time: "5 hours ago" },
      { name: "Video watched", amount: "$0.50", time: "Yesterday" },
      { name: "Quiz completed", amount: "$3.25", time: "Yesterday" }
    ]
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
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {currentUser.name}! Here's your earning overview.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button className="cashlance-button">
              <DollarSign className="mr-2 h-4 w-4" /> Withdraw Funds
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Stats />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Available Tasks</span>
                <Badge variant="outline" className="ml-2">
                  {currentUser.tasks.available} available
                </Badge>
              </CardTitle>
              <CardDescription>
                Complete tasks to earn more rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <div className="font-medium">Survey about Shopping Habits</div>
                      <div className="text-sm text-muted-foreground">10-15 minutes • High match</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="block font-medium text-lg">$2.25</span>
                        <Badge variant="secondary" className="font-normal">
                          <Clock className="mr-1 h-3 w-3" /> 15 min
                        </Badge>
                      </div>
                      <Button size="sm">
                        Start
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/offers">
                      View all tasks <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Earnings</CardTitle>
              <CardDescription>
                Your latest completed tasks and rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentUser.recentEarnings.map((earning, i) => (
                  <div key={i} className="flex items-center justify-between pb-2 border-b last:border-0">
                    <div>
                      <div className="font-medium">{earning.name}</div>
                      <div className="text-sm text-muted-foreground">{earning.time}</div>
                    </div>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      +{earning.amount}
                    </span>
                  </div>
                ))}
                
                <div className="text-center mt-6">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <TrendingUp className="h-4 w-4" /> View earning history
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Your Level & Achievements</CardTitle>
              <CardDescription>
                Track your progress and earn XP
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-cashlance-400" />
                      <span className="font-medium">Level {currentUser.level}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {currentUser.xp}/{currentUser.xpRequired} XP
                    </span>
                  </div>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cashlance-300 to-cashlance-500 rounded-full"
                      style={{ width: `${(currentUser.xp / currentUser.xpRequired) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-500" /> Latest Achievements
                  </h4>
                  
                  {currentUser.latestAchievements.map((achievement, i) => (
                    <div key={i} className="flex items-start justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                      <Badge variant="outline">{achievement.date}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
              <CardDescription>
                Invite friends and earn 5% of their earnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-cashlance-400" />
                    <span className="font-medium">Active Referrals</span>
                  </div>
                  <span className="font-medium">{currentUser.referrals}</span>
                </div>
                
                <div className="flex items-center justify-between pb-2 border-b">
                  <span className="text-muted-foreground">Total Earnings</span>
                  <span className="font-medium">{currentUser.referralEarnings}</span>
                </div>
                
                <div>
                  <div className="mb-3">
                    <label className="text-sm font-medium">Your Referral Link</label>
                    <div className="flex mt-1">
                      <input
                        type="text"
                        value="https://cashlancing.com/ref/johndoe"
                        readOnly
                        className="flex-1 rounded-l-md border border-r-0 bg-background px-3 py-2 text-sm"
                      />
                      <Button className="rounded-l-none">Copy</Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/referral">
                    Referral Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
