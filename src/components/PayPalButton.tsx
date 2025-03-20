import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const handleApprove = (data: { orderID: string }, actions: { order: { capture: () => Promise<void> } }) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
      // Update user balance and vendor commission logic here
    });
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "10.00", // Replace with dynamic amount
              },
            },
          ],
        });
      }}
      onApprove={handleApprove}
    />
  );
};

export default PayPalButton;
