import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TutorCard = ({ data }) => {
  return (
    <div className="card bg-base-200 max-w-100 shadow-sm mx-auto sm:mx-0">
      <figure>
        <Image
          height={200}
          width={200}
          src={data.photoUrl}
          alt="Shoes"
          className=" w-auto rounded-xl h-60"
        />
      </figure>
      <div className="">
        <h2 className="card-title pt-2">{data.tutorName}</h2>
        <p className="text-indigo-500 font-medium">{data.subject}</p>
        <p className="py-1 font-normal text-sm">{data.teachingMode}</p>
        <p className=" font-medium flex justify-start items-center gap-0">
          <TbCurrencyTaka />{" "}
          <span className="font-bold">{data.feePerHour}</span>
          <span className="text-gray-400">/Hour</span>
        </p>
        <div className="card-actions pt-3">
          <Link
            href={`/tutor/${data._id}`}
            className="btn bg-indigo-600 text-white w-full"
          >
            Book Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
