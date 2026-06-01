"use client";
import SigninGoogle from "@/components/clients/SigninGoogle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

function LoginPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email: e.target.email.value, // required
      password: e.target.password.value, // required
      rememberMe: true,
      // callbackURL: "https://example.com/callback",
    });

    console.log(data, error);
  };
  return (
    <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10 ">
      <div className="bg-base-200 border-base-100 px-5 pb-10">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset  rounded-box  ">
            <legend className="fieldset-legend text-sm text-indigo-600">
              Login
            </legend>

            <div className="py-5">
              <h1 className="font-bold text-xl text-center ">
                Welcome back !{" "}
              </h1>
              <p className="text-sm opacity-65 text-center">
                Login to your account
              </p>
            </div>

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

            <button className="btn bg-indigo-600 text-white mt-4">Login</button>

            <p className="text-sm ">
              <span className=" opacity-75">If you are new, </span>
              <Link href={"/reg"} className="text-indigo-600 font-bold">
                Register
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

export default LoginPage;
