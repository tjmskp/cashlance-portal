
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ReferralBonuses() {
  return (
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
  );
}
