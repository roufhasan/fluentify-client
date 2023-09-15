import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [enrolledClasses, setEnrolledClass] = useState([]);

  useEffect(() => {
    fetch(`https://fluentify.up.railway.app/payment?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClass(data);
      });
  }, [user?.email]);
  return (
    <div className="w-[90%]">
      <h2 className="text-3xl font-semibold text-center mb-10 mt-14">
        Toal Enrolled Class {enrolledClasses.length}
      </h2>
      <div>
        {enrolledClasses.map((enrolledClass) => (
          <div
            key={enrolledClass._id}
            className="flex gap-6 border-b border-[#d1d7dc] p-4"
          >
            <div>
              <img
                src={enrolledClass.image}
                alt=""
                className="w-64 h-36 object-cover"
              />
            </div>
            <div className="flex w-full">
              <div className="grow space-y-3">
                <h3 className="font-bold">{enrolledClass.className}</h3>
                <p className="text-[#6a6f73]">{enrolledClass.instructorName}</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <p className="font-bold text-right">${enrolledClass.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
