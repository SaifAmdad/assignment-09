"use client";
import SigninGoogle from "@/components/clients/SigninGoogle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Bounce, toast } from "react-toastify";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email: e.target.email.value, // required
      password: e.target.password.value, // required
      rememberMe: true,
    });

    if (data) {
      setLoading(false);

      toast.success("User Loged-in Successfully !", {
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
      // SECURITY CHECK
      if (redirectTo.startsWith("/")) {
        router.replace(redirectTo);
      } else {
        router.replace("/");
      }
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
      <div className="bg-base-200 border-gray-600-300  pb-10">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset border-2 border-base-300 px-5 border-b-0 rounded-box  ">
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

            <button className="btn bg-indigo-600 text-white mt-4">
              {loading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : (
                "Login"
              )}
            </button>

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
