
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, TrendingUp, CreditCard } from "lucide-react";

export function Stats() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="hover-scale">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Available Balance</CardTitle>
          <DollarSign className="h-5 w-5 text-cashlance-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$24.50</div>
          <p className="text-sm text-muted-foreground mt-1">
            <TrendingUp className="inline h-3 w-3 mr-1" />
            <span className="text-green-600 dark:text-green-400 font-medium">+$12.40</span> from last week
          </p>
        </CardContent>
      </Card>
      
      <Card className="hover-scale">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Pending Balance</CardTitle>
          <Clock className="h-5 w-5 text-cashlance-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$5.25</div>
          <p className="text-sm text-muted-foreground mt-1">
            Processing 2 tasks
          </p>
        </CardContent>
      </Card>
      
      <Card className="hover-scale">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Total Earned</CardTitle>
          <CreditCard className="h-5 w-5 text-cashlance-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$142.75</div>
          <p className="text-sm text-muted-foreground mt-1">
            Lifetime earnings
          </p>
        </CardContent>
      </Card>
      
      <Card className="hover-scale">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-medium">Tasks Completed</CardTitle>
          <TrendingUp className="h-5 w-5 text-cashlance-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">32</div>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="text-green-600 dark:text-green-400 font-medium">+8</span> from last week
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
