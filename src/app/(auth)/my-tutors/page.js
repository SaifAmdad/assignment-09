import MyTutors from "@/components/MyTutors";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const MyTutorsPage = () => {
  return (
    <div className="container mx-auto md:w-[75%] pb-10 ">
      <div className="py-6 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl py-2"> My Tutors</h1>
          <p className="text-base opacity-70">
            Manage your created tutor profile
          </p>
        </div>
        <Link href={"/add-tutor"} className="btn bg-indigo-600 text-white px-4">
          <FaPlus /> Add New Tutor{" "}
        </Link>
      </div>
      <MyTutors />
    </div>
  );
};

export default MyTutorsPage;
