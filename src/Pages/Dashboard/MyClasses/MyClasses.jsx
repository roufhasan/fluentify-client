import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyClassesCard from "../MyClassesCard/MyClassesCard";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`https://fluentify-server.vercel.app/myClasses?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, [user?.email]);

  return (
    <div className="w-[90%]">
      <h2 className="text-3xl font-semibold text-center mb-10">
        My Total Classes: {myClasses.length}
      </h2>
      <div>
        {myClasses.map((myClass) => (
          <MyClassesCard key={myClass._id} myClass={myClass}></MyClassesCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
