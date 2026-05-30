import React from "react";
import datas from "../../../public/data.json";
import TutorCard from "@/components/shared/TutorCard";

export const metadata = {
  title: "All Tutors | TutorHub",
  description: "Find your tutor and make smoth your learning journey",
};

function TutorsPage() {
  return (
    <div className="container lg:w-[75%] mx-auto">
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch">
        {datas.map((data, i) => {
          return <TutorCard data={data} key={i} />;
        })}
      </div>
    </div>
  );
}

export default TutorsPage;
