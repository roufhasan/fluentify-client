import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";

const ClassesCard = ({ singleClass }) => {
  const { image, className, instructorName, available_seats, price, _id } =
    singleClass;
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectedClass();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectClass = (singleClass) => {
    if (user && user.email) {
      const selectedClass = {
        selectedClassId: _id,
        name: className,
        instructor_name: instructorName,
        price,
        email: user.email,
        image,
      };
      fetch("https://fluentify.up.railway.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${singleClass.className} Class has been Selected`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div
      className={`flex gap-6 border-b border-[#d1d7dc] p-4 ${
        available_seats === 0 && "bg-[#ff615d]"
      }`}
    >
      <div>
        <img src={image} alt="" className="w-64 h-36 object-cover" />
      </div>
      <div className="flex w-full">
        <div className="grow space-y-3">
          <h3 className="font-bold">{className}</h3>
          <p
            className={`text-[#6a6f73] ${
              available_seats === 0 && "text-black"
            }`}
          >
            {instructorName}
          </p>
          <p
            className={`text-[#6a6f73] ${
              available_seats === 0 && "text-black"
            }`}
          >
            Available Seats: {available_seats}
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="font-bold text-right">${price}</p>
          <button
            onClick={() => handleSelectClass(singleClass)}
            disabled={available_seats === 0}
            className="btn btn-outline bg-black text-white"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
