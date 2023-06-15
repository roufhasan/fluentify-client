import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [myPayments, setMyPayments] = useState([]);

  useEffect(() => {
    fetch(`https://fluentify-server.vercel.app/payment?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPayments(data);
      });
  }, [user?.email]);
  return (
    <div className="w-[90%]">
      <h2 className="text-3xl font-semibold text-center mb-10 mt-14">
        Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {myPayments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 object-cover">
                        <img src={payment.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{payment.className}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-medium text-gray-500">
                    {payment.instructorName}
                  </div>
                </td>
                <td>
                  <div className="font-medium text-gray-500">
                    ${payment.price}
                  </div>
                </td>
                <td>
                  <div className="text-xs text-gray-500">
                    {payment.transactionId}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
