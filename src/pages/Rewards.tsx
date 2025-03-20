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
import { Reward, RewardType, RewardFilters } from '@/types/reward';
import { Coins, Gift, Wallet } from 'lucide-react';

// Mock data - replace with API call in production
const mockRewards: Reward[] = [
  {
    id: 1,
    title: "Amazon Gift Card",
    description: "Redeem your points for an Amazon gift card.",
    type: "gift_card",
    points: 1000,
    value: 10,
    currency: "USD",
    provider: "Amazon",
    isAvailable: true,
    image: "https://placehold.co/200x100",
  },
  {
    id: 2,
    title: "Bitcoin",
    description: "Get paid in Bitcoin.",
    type: "crypto",
    points: 2000,
    value: 20,
    currency: "USD",
    provider: "Binance",
    isAvailable: true,
    image: "https://placehold.co/200x100",
  },
  {
    id: 3,
    title: "PayPal Cash",
    description: "Withdraw your earnings to PayPal.",
    type: "paypal",
    points: 1500,
    value: 15,
    currency: "USD",
    provider: "PayPal",
    isAvailable: true,
    image: "https://placehold.co/200x100",
  },
];

const rewardTypes: RewardType[] = ['gift_card', 'crypto', 'paypal', 'other'];

export default function Rewards() {
  const [filters, setFilters] = useState<RewardFilters>({
    type: undefined,
    minValue: undefined,
    maxPoints: undefined,
    showUnavailable: false,
    sortBy: 'value',
    sortOrder: 'desc',
  });

  const filteredRewards = mockRewards.filter(reward => {
    if (filters.type && reward.type !== filters.type) return false;
    if (filters.minValue && reward.value < filters.minValue) return false;
    if (filters.maxPoints && reward.points > filters.maxPoints) return false;
    if (!filters.showUnavailable && !reward.isAvailable) return false;
    return true;
  });

  const sortedRewards = [...filteredRewards].sort((a, b) => {
    switch (filters.sortBy) {
      case 'value':
        return filters.sortOrder === 'desc' ? b.value - a.value : a.value - b.value;
      case 'points':
        return filters.sortOrder === 'desc' ? b.points - a.points : a.points - b.points;
      case 'newest':
      default:
        return filters.sortOrder === 'desc' 
          ? b.id - a.id
          : a.id - b.id;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Available Rewards</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Coins className="h-5 w-5" />
            <span className="font-semibold">1,500 points</span>
          </div>
          <Button variant="outline" className="gap-2">
            <Gift className="h-4 w-4" />
            My Rewards
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <Label>Reward Type</Label>
          <Select
            value={filters.type}
            onValueChange={(value: RewardType) => 
              setFilters(prev => ({ ...prev, type: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {rewardTypes.map(type => (
                <SelectItem key={type} value={type}>
                  {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Min Value</Label>
          <Input
            type="number"
            placeholder="0"
            value={filters.minValue || ''}
            onChange={(e) => 
              setFilters(prev => ({ 
                ...prev, 
                minValue: e.target.value ? parseInt(e.target.value) : undefined 
              }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Max Points</Label>
          <Input
            type="number"
            placeholder="∞"
            value={filters.maxPoints || ''}
            onChange={(e) => 
              setFilters(prev => ({ 
                ...prev, 
                maxPoints: e.target.value ? parseInt(e.target.value) : undefined 
              }))
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value: 'value' | 'points' | 'newest') => 
              setFilters(prev => ({ ...prev, sortBy: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="value">Value</SelectItem>
              <SelectItem value="points">Points</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Reward List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedRewards.map((reward) => (
          <Card key={reward.id}>
            <CardHeader>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <img
                  src={reward.image}
                  alt={reward.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>{reward.title}</CardTitle>
              <CardDescription>{reward.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Coins className="h-4 w-4" />
                  {reward.points} points
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Wallet className="h-4 w-4" />
                  {reward.value} {reward.currency}
                </div>
              </div>
              <Button className="mt-4 w-full" asChild>
                <a href="#">Redeem</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 