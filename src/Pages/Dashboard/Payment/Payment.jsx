import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const classDetails = useLoaderData();
  console.log(classDetails);
  return (
    <div>
      <h2>Payment will be here</h2>
    </div>
  );
};

export default Payment;
