import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <div className="container mx-auto sm:w-100 sm:min-h-[60vh] py-10">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border px-5 pb-10">
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
            Register
          </button>
          <p className="text-sm ">
            <span className=" opacity-75">If you are already registered, </span>
            <Link href={"/login"} className="text-indigo-600 font-bold">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default RegisterPage;
