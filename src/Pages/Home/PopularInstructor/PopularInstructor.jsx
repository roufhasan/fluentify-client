import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const instructor = data.filter(
          (instructor) => instructor.role === "instructor"
        );
        setInstructor(instructor);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-2 border-red-500 pb-4">
        Popular Instructor
      </h2>
      <div className="grid grid-cols-3 gap-6 my-12">
        {instructors.map((instructor) => (
          <div className="card bg-blue-100" key={instructor._id}>
            <figure>
              <img
                src={instructor.image}
                alt="car!"
                className="h-64 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
