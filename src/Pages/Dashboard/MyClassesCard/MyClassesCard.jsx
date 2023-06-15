import { Link } from "react-router-dom";

const MyClassesCard = ({ myClass }) => {
  const {
    image,
    className,
    instructorName,
    available_seats,
    price,
    enrolled_student,
    status,
    _id,
  } = myClass;
  return (
    <div className="flex gap-6 border-b border-[#d1d7dc] py-4">
      <div>
        <img src={image} alt="" className="w-64 h-36 object-cover" />
      </div>
      <div className="flex w-full">
        <div className="grow space-y-3">
          <h3 className="font-bold">{className}</h3>
          <p className="font-bold">Price: ${price}</p>
          <p className="text-sm text-[#6a6f73]">{instructorName}</p>
          <p className="text-[#6a6f73]">Available Seats: {available_seats}</p>
          <p className="text-[#6a6f73]">Enrolled Student: {enrolled_student}</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p
            className={`uppercase font-semibold text-xs ${
              status === "pending" && "text-red-500"
            } ${status === "denied" && "text-orange-600"} ${
              status === "approved" && "text-green-600"
            }`}
          >
            {status}
          </p>
          <Link
            to={`/dashboard/updateClasses/${_id}`}
            className="btn btn-outline bg-black text-white"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyClassesCard;
