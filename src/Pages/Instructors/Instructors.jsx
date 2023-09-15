import { useState } from "react";
import { useEffect } from "react";

const Instructors = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://fluentify.up.railway.app/users")
      .then((res) => res.json())
      .then((data) => {
        const instructor = data.filter((user) => user.role === "instructor");
        setInstructor(instructor);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {instructors.map((instructor) => (
            <tr key={instructor._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={instructor.image} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{instructor.name}</div>
                  </div>
                </div>
              </td>
              <td>{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;
