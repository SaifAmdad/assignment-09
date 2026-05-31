import AddTutor from "@/components/AddTutor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "Add new Tutor | TutorHub",
  description: "Route not found",
};

const AddTutorPage = async () => {
  const token = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token, "Add Tutor");
  return (
    <div className="container mx-auto md:w-190 pb-10 ">
      <div className="py-6">
        <h1 className="font-bold text-2xl py-2"> Add Tutor</h1>
        <p className="text-base opacity-70">Create a new tutor profile</p>
      </div>
      <AddTutor />
    </div>
  );
};

export default AddTutorPage;
