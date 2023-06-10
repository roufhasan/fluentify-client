import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
          className="text-lg font-medium hover:bg-white hover:text-[#5754f7] lg:mr-12"
        >
          Dashboard
        </Link>
      </li>
      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="border-2 border-black px-4 py-1 rounded-md text-base font-semibold hover:bg-[#111F62] hover:text-white bg-[transparent] text-[black] transition-all"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="border-2 border-black px-4 py-1 rounded-md text-base font-semibold hover:bg-[#111F62] hover:text-white bg-[transparent] text-[black] transition-all"
          >
            Login
          </Link>
        </>
      )}
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
          {user && (
            <img
              src={user.photoURL}
              alt=""
              className="w-12 h-12 rounded object-cover ml-4"
            />
          )}
        </div>
      </div>
      <div className="navbar-end lg:hidden">
        {user && (
          <img
            src={user.photoURL}
            alt=""
            className="w-12 h-12 rounded object-cover ml-4"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
