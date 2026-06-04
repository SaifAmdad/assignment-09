import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TutorCard from "./shared/TutorCard";
import { serverUrl } from "@/secret";
import NotFound from "./shared/NotFound";

const AvailableTutors = async () => {
  const res = await fetch(`${serverUrl}/all-tutors`);
  const { tutors, success } = await res.json();

  return (
    <div className="container mx-auto lg:w-[75%] py-16">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">Available Tutors</h3>
        <Link
          href={"/tutors"}
          className="text-indigo-500 text-sm flex justify-center items-center"
        >
          View All <IoIosArrowForward />
        </Link>
      </div>
      {success ? (
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch">
          {tutors.map((data, i) => {
            if (i >= 6) return;
            // i starts from 0

            return <TutorCard data={data} key={i} />;
          })}
          {/* {tutors.length / 6 <1 } */}
        </div>
      ) : (
        <NotFound message={"Tutor Not Found"} />
      )}
    </div>
  );
};

export default AvailableTutors;
