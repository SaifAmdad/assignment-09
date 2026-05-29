import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import TutorCard from "./shared/TutorCard";
import data from "../../public/data.json";

const AvailableTutors = async () => {
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

      <div>
        <TutorCard data={data} />
      </div>
    </div>
  );
};

export default AvailableTutors;
