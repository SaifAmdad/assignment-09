import MyTutors from "@/components/MyTutors";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const MyTutorsPage = async () => {
  const h = new Headers(await headers());
  const { token } = await auth.api.getToken({
    headers: h,
  });
  return (
    <div className="container mx-auto md:w-[75%] pb-10 ">
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-2xl py-2"> My Tutors</h1>
          <p className="text-base opacity-70">
            Manage your created tutor profile
          </p>
        </div>
        <Link
          href={"/add-tutor"}
          className="btn bg-indigo-600 text-white px-4 w-[80%] sm:w-auto my-5"
        >
          <FaPlus /> Add New Tutor
        </Link>
      </div>
      <MyTutors token={token} />
    </div>
  );
};

export default MyTutorsPage;
