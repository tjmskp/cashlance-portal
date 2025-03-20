
import { Card, CardContent } from "@/components/ui/card";

interface Earning {
  id: number;
  username: string;
  date: string;
  amount: string;
  task: string;
}

interface EarningsTableProps {
  earnings: Earning[];
}

export function EarningsTable({ earnings }: EarningsTableProps) {
  return (
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
  );
}
