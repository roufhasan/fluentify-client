import {
  FaBookReader,
  FaChalkboard,
  FaChalkboardTeacher,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-[#E6E5FF]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#fff] text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to="/dashboard/selectedClass"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaShoppingCart size="18px"></FaShoppingCart> Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/enrolledClass"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaBookReader size="18px"></FaBookReader>Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paymentHistory"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaWallet size="18px"></FaWallet> Payment History
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaHome size="18px"></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaChalkboard size="18px"></FaChalkboard> Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "hover:bg-white text-[#5754f7]"
                  : "hover:text-[#5754f7]"
              }
            >
              <FaChalkboardTeacher size="18px"></FaChalkboardTeacher>{" "}
              Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
