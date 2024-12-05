import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import userIcon from '../assets/userIcon.png'


const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    {user && user?.email ? (
      <li>
        <NavLink to="/profile">profile</NavLink>
      </li>
    ) : (
      ''
    )}

    <li>
      <NavLink to="/courses">Courses</NavLink>
    </li>
  </>
);
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-[#003366] text-2xl font-bold">
          Dream Hack
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="login flex gap-3 items-center">
          {user && user?.email ? (
            <>
              {" "}
              <div className="group relative">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />

                <p className="absolute -bottom-8 left-0 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.displayName}
                </p>
              </div>
              <button
                onClick={logOut}
                className="btn bg-[#58B97F] rounded-none text-white"
              >
                {" "}
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#58B97F] rounded-none text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
