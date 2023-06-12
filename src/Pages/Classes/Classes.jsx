import { useState } from "react";
import { useEffect } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-8 mb-11">
        Availabe Classes
      </h1>
      <div>
        {classes.map((singleClass) => (
          <ClassesCard
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
