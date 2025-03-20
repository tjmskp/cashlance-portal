
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign } from "lucide-react";

const paymentFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  cardNumber: z.string().min(16, { message: "Card number must be 16 digits" }).max(19),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, { message: "Use format MM/YY" }),
  cvv: z.string().min(3, { message: "CVV must be 3-4 digits" }).max(4),
  nameOnCard: z.string().min(3, { message: "Please enter the name on card" }),
  amount: z.string().min(1, { message: "Please enter an amount" }),
});

interface PayPalGuestCheckoutProps {
  defaultAmount?: string;
  onSuccess?: (details: any) => void;
}

export function PayPalGuestCheckout({ defaultAmount = "10.00", onSuccess }: PayPalGuestCheckoutProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      email: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: "",
      amount: defaultAmount,
    },
  });
  
  function onSubmit(values: z.infer<typeof paymentFormSchema>) {
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast.success("Payment processed successfully!");
      
      if (onSuccess) {
        onSuccess({
          amount: values.amount,
          id: `pp-${Date.now()}`,
          email: values.email,
          status: "COMPLETED",
          create_time: new Date().toISOString(),
        });
      }
      
      form.reset();
    }, 2000);
  }
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5" /> PayPal Guest Checkout
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="nameOnCard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name on Card</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="123" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount ($)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.01" 
                      min="0.01" 
                      placeholder="10.00" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
              <DollarSign className="mr-2 h-4 w-4" />
              {isSubmitting ? "Processing..." : "Pay Now"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
