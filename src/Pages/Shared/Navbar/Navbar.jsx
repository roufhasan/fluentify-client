import { Link } from "react-router-dom";
import porfileImg from "../../../assets/profile.jpg";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="text-lg font-medium hover:bg-white hover:text-[#5754f7]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/instructors"
          className="text-lg font-medium hover:bg-white hover:text-[#5754f7]"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className="text-lg font-medium hover:bg-white hover:text-[#5754f7]"
        >
          Classes
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="text-lg font-medium hover:bg-white hover:text-[#5754f7]"
        >
          Dashboard
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="normal-case text-3xl text-[#111F62] font-bold">
          Fluentify
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        <div>
          <img
            src={porfileImg}
            alt=""
            className="w-12 h-12 rounded object-cover"
          />
        </div>
      </div>
      <div className="navbar-end lg:hidden">
        <img
          src={porfileImg}
          alt=""
          className="w-12 h-12 rounded object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
