import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Coins, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Earn Rewards",
    description: "Complete tasks and earn points that can be converted to real rewards.",
    icon: Coins,
  },
  {
    title: "Daily Tasks",
    description: "New tasks available every day to keep you earning.",
    icon: Trophy,
  },
  {
    title: "Community",
    description: "Join thousands of users earning rewards together.",
    icon: Users,
  },
];

const featuredTasks = [
  {
    id: 1,
    title: "Watch Video",
    reward: "50 points",
    time: "2 minutes",
    description: "Watch a short video and answer a simple question.",
  },
  {
    id: 2,
    title: "Survey",
    reward: "100 points",
    time: "5 minutes",
    description: "Complete a short survey about your preferences.",
  },
  {
    id: 3,
    title: "Sign Up",
    reward: "200 points",
    time: "1 minute",
    description: "Create an account on a partner website.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Earn Rewards for Your Time
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Complete simple tasks, earn points, and redeem them for real rewards. Join thousands of users who are already earning.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/tasks">View Tasks</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Featured Tasks Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Tasks</h2>
          <Button variant="ghost" asChild>
            <Link to="/tasks" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredTasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary">{task.reward}</span>
                  <span className="text-muted-foreground">{task.time}</span>
                </div>
                <Button className="mt-4 w-full" asChild>
                  <Link to="/tasks">Start Task</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 