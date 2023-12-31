import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const PopularInstructor = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://fluentify.up.railway.app/users/topinstructor")
      .then((res) => res.json())
      .then((data) => {
        const instructor = data.filter(
          (instructor) => instructor.role === "instructor"
        );
        setInstructor(instructor);
      });
  }, []);
  return (
    <div className="my-32">
      <h3 className="text-center font-semibold text-[#6a6f73]">
        Our Instructor
      </h3>
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Popular Instructor
      </h2>
      <Slide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {instructors.map((instructor) => (
            <div
              className="border shadow-xl shadow-[#5754f7]/30 sm:flex gap-4 w-full"
              key={instructor._id}
            >
              <figure>
                <img
                  src={instructor.image}
                  alt=""
                  className="h-96 w-full sm:w-64 object-cover"
                />
              </figure>
              <div className="mt-4 px-4 text-left">
                <h2 className="text-xl font-medium text-[#6a6f73]">
                  Name: {instructor.name}
                </h2>
                <p className="text-[#6a6f73]">Email: {instructor.email}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default PopularInstructor;
