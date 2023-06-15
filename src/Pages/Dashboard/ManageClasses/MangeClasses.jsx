import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MangeClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("https://fluentify-server.vercel.app/classes");
    return res.json();
  });

  const handleClassApprove = (singleClass) => {
    fetch(
      `https://fluentify-server.vercel.app/classes/approved/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${singleClass.className} is Approved`);
        }
      });
  };

  const handleClassDenied = (singleClass) => {
    fetch(
      `https://fluentify-server.vercel.app/classes/denied/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${singleClass.className} is Denied`);
        }
      });
  };

  return (
    <div className="w-[90%]">
      <h2 className="text-3xl font-semibold text-center mb-10 mt-14">
        Manage Class
      </h2>
      {classes.map((singleClass) => (
        <div
          key={singleClass._id}
          className="flex gap-6 border-b border-[#d1d7dc] py-4"
        >
          <div>
            <img
              src={singleClass.image}
              alt=""
              className="w-64 h-36 object-cover"
            />
          </div>
          <div className="flex w-full">
            <div className="grow space-y-3">
              <h3 className="font-bold">{singleClass.className}</h3>
              <p className="text-sm text-[#6a6f73]">
                {singleClass.instructorName}
              </p>
              <p className="text-sm text-[#6a6f73]">
                {singleClass.instructorEmail}
              </p>
              <p className="text-[#6a6f73]">
                Available Seats: {singleClass.available_seats}
              </p>
              <p className="font-bold">${singleClass.price}</p>
            </div>
            <div className="flex flex-col justify-between items-center">
              <button
                onClick={() => handleClassApprove(singleClass)}
                disabled={
                  singleClass.status === "approved" ||
                  singleClass.status === "denied"
                }
                className="btn btn-outline bg-green-600 text-white"
              >
                Approve
              </button>
              <button
                onClick={() => handleClassDenied(singleClass)}
                disabled={
                  singleClass.status === "approved" ||
                  singleClass.status === "denied"
                }
                className="btn btn-outline bg-orange-600 text-white"
              >
                Deny
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MangeClasses;
