import { useState } from "react";
import { useEffect } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 my-12">
      {classes.map((singleClass) => (
        <div className="card glass" key={singleClass._id}>
          <figure>
            <img src={singleClass.image} alt="car!" className="h-64 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singleClass.name}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
