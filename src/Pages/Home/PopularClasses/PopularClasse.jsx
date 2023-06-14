import { useEffect, useState } from "react";

const PopularClasse = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-blue-700 text-center my-28">
        Popular Classes
      </h2>
      <div className="grid grid-cols-3 gap-6 my-12">
        {classes.map((singleClass) => (
          <div className="card glass" key={singleClass._id}>
            <figure>
              <img src={singleClass.image} alt="car!" className="h-64 w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleClass.className}</h2>
              <h2 className="">Instructor: {singleClass.instructorName}</h2>
              <p>Price: ${singleClass.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasse;
