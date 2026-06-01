"use client";
import React from "react";
import Navlink from "./shared/Navlink";
import Link from "next/link";
import ThemeButton from "./clients/ThemeButton";
import { authClient } from "@/lib/auth-client";
function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
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
        <Navlink
          href={"/add-tutor"}
          route={"Add Tutor"}
          logedin={`${user ? true : false}`}
        />
      </li>
      <li>
        <Navlink
          href={"/my-tutors"}
          route={"My Tutors"}
          logedin={`${user ? true : false}`}
        />
      </li>
      <li>
        <Navlink
          href={"/my-booked-session"}
          route={"My Booked Session"}
          logedin={`${user ? true : false}`}
        />
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
              {user ? logedinNavlinks : ""}
              {/* {logedinNavlinks} */}
            </ul>
          </div>
          <Link href={"/"} className="font-bold text-xl flex gap-0">
            <span>Tutor</span>
            <span className="text-indigo-500">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
            {user ? logedinNavlinks : ""}
            {/* {logedinNavlinks} */}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeButton />
          <Link
            href={"/login"}
            className="btn bg-indigo-600 text-white ml-3 px-7"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
