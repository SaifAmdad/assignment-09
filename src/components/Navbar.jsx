import React from "react";
import Navlink from "./shared/Navlink";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./clients/ThemeButton";

function Navbar() {
  const navlinks = (
    <>
      <li>
        <Navlink href={"/"} route={"Home"} />
      </li>
      <li>
        <Navlink href={"/tutors"} route={"Tutors"} />
      </li>
    </>
  );
  const logedinNavlinks = (
    <>
      <li>
        <Navlink href={"/add-tutor"} route={"Add Tutor"} />
      </li>
      <li>
        <Navlink href={"/my-tutors"} route={"My Tutors"} />
      </li>
      <li>
        <Navlink href={"/my-bookings"} route={"My Bookings"} />
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container lg:w-[75%] mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost font-bold text-xl flex gap-0"
          >
            <span>Tutor</span>
            <span className="text-indigo-500">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
