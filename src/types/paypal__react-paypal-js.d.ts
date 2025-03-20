declare module "@paypal/react-paypal-js" {
  import * as React from "react";

  interface PayPalButtonsProps {
    createOrder?: (data: Record<string, unknown>, actions: { order: { create: () => Promise<string> } }) => Promise<string>;
    onApprove?: (data: { orderID: string }, actions: { order: { capture: () => Promise<void> } }) => Promise<void>;
    style?: Record<string, any>;
    fundingSource?: string;
  }

  export class PayPalButtons extends React.Component<PayPalButtonsProps> {}
}
