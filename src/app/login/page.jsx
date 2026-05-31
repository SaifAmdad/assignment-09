import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="container mx-auto sm:w-100 sm:h-[60vh] py-10">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border px-5 pb-10">
          <legend className="fieldset-legend text-sm text-indigo-600">
            Login
          </legend>

          <div className="py-5">
            <h1 className="font-bold text-xl text-center ">Welcome back ! </h1>
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
        </fieldset>
      </form>
    </div>
  );
}

export default LoginPage;
