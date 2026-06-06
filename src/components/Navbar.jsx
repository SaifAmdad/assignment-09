"use client";
import React from "react";
import Navlink from "./shared/Navlink";
import Link from "next/link";
import ThemeButton from "./clients/ThemeButton";
import { authClient } from "@/lib/auth-client";
import AvatarClient from "./clients/ProfileImage";
import { PiSignOutBold } from "react-icons/pi";
import { Bounce, toast } from "react-toastify";
import { redirect } from "next/navigation";
function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed Out Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          redirect("/login");
        },
      },
    });
  };

  const errorTosat = () => {
    if (!user) {
      toast.error("Login required !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

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

  const altNav = (
    <>
      <li onClick={errorTosat}>
        <Link
          href={"/login"}
          className="text-[16px] font-semibold btn-disabled bg-transparent opacity-50"
        >
          Add Tutor
        </Link>
      </li>
      <li onClick={errorTosat}>
        <Link
          href={"/login"}
          className="text-[16px] font-semibold btn-disabled bg-transparent opacity-50"
        >
          My Tutors
        </Link>
      </li>
      <li onClick={errorTosat}>
        <Link
          href={"/login"}
          className="text-[16px] font-semibold btn-disabled bg-transparent opacity-50"
        >
          My Booked Session
        </Link>
      </li>
    </>
  );
  const logedinNavlinks = (
    <>
      <li onClick={errorTosat}>
        <Navlink
          href={"/add-tutor"}
          route={"Add Tutor"}
          logedin={`${user ? true : false}`}
        />
      </li>
      <li onClick={errorTosat}>
        <Navlink
          href={"/my-tutors"}
          route={"My Tutors"}
          logedin={`${user ? true : false}`}
        />
      </li>
      <li onClick={errorTosat}>
        <Navlink
          href={"/my-booked-session"}
          route={"My Booked Session"}
          logedin={`${user ? true : false}`}
        />
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-9999">
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
              {user ? logedinNavlinks : altNav}
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
            {user ? logedinNavlinks : altNav}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeButton />

          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <AvatarClient
                    url={user.image}
                    height={100}
                    width={100}
                    className=" h-10 w-10"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href={"/my-tutors"}>MY TUTORS</Link>
                  </li>
                  <li>
                    <Link href={"/my-booked-session"}>MY SESSIONS</Link>
                  </li>

                  <li>
                    <button
                      className="text-red-500 font-semibold"
                      onClick={signOut}
                    >
                      Sign Out <PiSignOutBold />
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              href={"/login"}
              className="btn bg-indigo-600 text-white ml-3 px-7"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
