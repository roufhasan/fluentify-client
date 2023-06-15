import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const classDetails = useLoaderData();
  const price = parseInt(classDetails.price);
  return (
    <div className="w-[90%]">
      <h2 className="text-3xl font-semibold text-center mb-28">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm classDetails={classDetails} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
