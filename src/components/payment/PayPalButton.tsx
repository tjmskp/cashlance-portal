
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { CreditCard, DollarSign } from "lucide-react";

interface PayPalButtonProps {
  amount: string;
  description?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
}

export function PayPalButton({ amount, description = "Payment", onSuccess, onError }: PayPalButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate PayPal payment process
    setTimeout(() => {
      setIsProcessing(false);
      setIsDialogOpen(false);
      
      // Success callback
      toast.success(`Payment of $${amount} successful!`);
      
      if (onSuccess) {
        onSuccess({
          amount: amount,
          id: `pp-${Date.now()}`,
          status: "COMPLETED",
          create_time: new Date().toISOString(),
        });
      }
    }, 2000);
  };
  
  const handleError = () => {
    setIsProcessing(false);
    setIsDialogOpen(false);
    
    toast.error("Payment failed. Please try again.");
    
    if (onError) {
      onError({ message: "Payment failed" });
    }
  };
  
  return (
    <>
      <Button 
        onClick={() => setIsDialogOpen(true)} 
        className="bg-[#0070ba] hover:bg-[#003087] text-white"
      >
        <DollarSign className="mr-2 h-4 w-4" />
        Pay with PayPal
      </Button>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">PayPal Payment</DialogTitle>
          </DialogHeader>
          
          <div className="py-6">
            <div className="text-center space-y-4">
              <div className="bg-[#0070ba] w-16 h-16 rounded-full mx-auto flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              
              <div>
                <p className="text-xl font-bold">${amount}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              
              <div className="pt-4 space-y-2">
                <Button
                  className="w-full bg-[#0070ba] hover:bg-[#003087]"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Complete Payment"}
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isProcessing}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex justify-center border-t pt-4">
            <p className="text-xs text-center text-muted-foreground">
              This is a simulated PayPal payment for demonstration purposes.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
