import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const PopularClasse = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes/sort")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="my-32">
      <Fade>
        <h3 className="text-center font-semibold text-[#6a6f73]">
          Our Top Classes
        </h3>
        <h2 className="text-4xl font-semibold text-center text-blue-700">
          Popular Classes
        </h2>
      </Fade>
      <Slide>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {classes.map((singleClass) => (
            <div
              className="border shadow-xl shadow-[#5754f7]/30"
              key={singleClass._id}
            >
              <figure>
                <img
                  src={singleClass.image}
                  alt=""
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="px-3 pb-5 pt-10">
                <h2 className="text-2xl font-semibold mb-2">
                  {singleClass.className}
                </h2>
                <h2 className="text-[#6a6f73] font-medium">
                  Instructor: {singleClass.instructorName}
                </h2>
                <div className="divider"></div>
                <p className="text-[#6a6f73] font-medium text-sm mb-2">
                  Available Seats: {singleClass.available_seats}
                </p>
                <p className="font-semibold text-lg">
                  Price: ${singleClass.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default PopularClasse;
