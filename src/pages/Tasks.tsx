import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Task, TaskCategory, TaskFilters } from '@/types/task';
import { Clock, Coins, Filter } from 'lucide-react';

// Mock data - replace with API call in production
const mockTasks: Task[] = [
  {
    id: 1,
    title: "Watch Video",
    description: "Watch a short video and answer a simple question.",
    category: "video",
    reward: 50,
    estimatedTime: "2 minutes",
    createdAt: new Date(),
    provider: "VideoRewards",
  },
  {
    id: 2,
    title: "Survey",
    description: "Complete a short survey about your preferences.",
    category: "survey",
    reward: 100,
    estimatedTime: "5 minutes",
    createdAt: new Date(),
    provider: "SurveyPro",
  },
  {
    id: 3,
    title: "Sign Up",
    description: "Create an account on a partner website.",
    category: "signup",
    reward: 200,
    estimatedTime: "1 minute",
    createdAt: new Date(),
    provider: "PartnerSignup",
  },
];

const categories: TaskCategory[] = ['survey', 'video', 'signup', 'offer', 'other'];

export default function Tasks() {
  const [filters, setFilters] = useState<TaskFilters>({
    category: undefined,
    minReward: undefined,
    maxTime: undefined,
    showCompleted: false,
    sortBy: 'newest',
    sortOrder: 'desc',
  });

  const filteredTasks = mockTasks.filter(task => {
    if (filters.category && task.category !== filters.category) return false;
    if (filters.minReward && task.reward < filters.minReward) return false;
    if (filters.showCompleted && !task.isCompleted) return false;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    let timeA = 0;
    let timeB = 0;

    switch (filters.sortBy) {
      case 'reward':
        return filters.sortOrder === 'desc' ? b.reward - a.reward : a.reward - b.reward;
      case 'time':
        timeA = parseInt(a.estimatedTime);
        timeB = parseInt(b.estimatedTime);
        return filters.sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
      case 'newest':
      default:
        return filters.sortOrder === 'desc' 
          ? b.createdAt.getTime() - a.createdAt.getTime()
          : a.createdAt.getTime() - b.createdAt.getTime();
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Available Tasks</h1>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Filters */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value: TaskCategory) => 
              setFilters(prev => ({ ...prev, category: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Min Reward</Label>
          <Input
            type="number"
            placeholder="0"
            value={filters.minReward || ''}
            onChange={(e) => 
              setFilters(prev => ({ 
                ...prev, 
                minReward: e.target.value ? parseInt(e.target.value) : undefined 
              }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value: 'reward' | 'time' | 'newest') => 
              setFilters(prev => ({ ...prev, sortBy: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="reward">Reward</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort Order</Label>
          <Select
            value={filters.sortOrder}
            onValueChange={(value: 'asc' | 'desc') => 
              setFilters(prev => ({ ...prev, sortOrder: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Descending</SelectItem>
              <SelectItem value="asc">Ascending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Task List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedTasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Coins className="h-4 w-4" />
                  {task.reward} points
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {task.estimatedTime}
                </div>
              </div>
              <Button className="mt-4 w-full" asChild>
                <a href="#">Start Task</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 