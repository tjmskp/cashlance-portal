
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ReferralStatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeText?: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function ReferralStatsCard({
  title,
  value,
  change,
  changeText,
  icon: Icon,
  iconColor = "text-cashlance-400"
}: ReferralStatsCardProps) {
  return (
    <Card className="hover-scale">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {(change || changeText) && (
          <p className="text-sm text-muted-foreground mt-1">
            {change && <span className="text-green-600 dark:text-green-400 font-medium">{change}</span>}
            {' '}{changeText}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
