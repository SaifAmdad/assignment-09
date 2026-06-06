"use client";

import SigninGoogle from "@/components/clients/SigninGoogle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name: e.target.name.value, // required
      email: e.target.email.value, // required
      password: e.target.password.value, // required
      image: e.target.image.value,
      callbackURL: "/",
    });

    if (data) {
      setLoading(false);

      toast.success("User Registered Successfully !", {
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
      redirect("/");
    }

    if (error) {
      setLoading(false);

      toast.error(`${error.message}`, {
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
    }
  };

  return (
    <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10 ">
      <div className="bg-base-200 border-base-100">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset px-5 border-2 border-base-300 border-b-0 rounded-box  ">
            <legend className="fieldset-legend text-sm text-indigo-600">
              Register
            </legend>

            <div className="py-5">
              <h1 className="font-bold text-xl text-center ">
                Create Your Account{" "}
              </h1>
              <p className="text-sm opacity-65 text-center">
                Register to get your Account
              </p>
            </div>

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Your name"
            />

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Image url"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn bg-indigo-600 text-white mt-4">
              {loading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : (
                "Register"
              )}
            </button>
            <p className="text-sm ">
              <span className=" opacity-75">
                If you are already registered,{" "}
              </span>
              <Link href={"/login"} className="text-indigo-600 font-bold">
                Login
              </Link>
            </p>

            <div className="flex items-center justify-between pt-1">
              <hr className="border border-indigo-600 w-[46%] " />
              <p>OR</p>
              <hr className="border border-indigo-600 w-[46%] " />
            </div>
          </fieldset>
        </form>
        <SigninGoogle />
      </div>
    </div>
  );
}

export default RegisterPage;
