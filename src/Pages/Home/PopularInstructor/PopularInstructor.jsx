import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("popularInstructor.json")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  });
  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-2 border-red-500 pb-4">
        Popular Instructor
      </h2>
      <div className="grid grid-cols-3 gap-6 my-12">
        {instructors.map((instructor) => (
          <div className="card bg-blue-100" key={instructor.id}>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <h2 className="text-lg">{instructor.specialization}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
