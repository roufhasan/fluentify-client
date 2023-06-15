import { useState } from "react";
import { useEffect } from "react";
import ClassesCard from "../ClassesCard/ClassesCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://fluentify-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        const apprevedClasses = data.filter(
          (singleClass) => singleClass.status === "approved"
        );
        setClasses(apprevedClasses);
      });
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
