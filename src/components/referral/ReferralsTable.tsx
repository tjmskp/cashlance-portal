
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Referral {
  id: number;
  username: string;
  date: string;
  earnings: string;
  status: string;
}

interface ReferralsTableProps {
  referrals: Referral[];
}

export function ReferralsTable({ referrals }: ReferralsTableProps) {
  return (
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
  );
}
