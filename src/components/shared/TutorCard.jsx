import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TutorCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card bg-base-200 max-w-72 shadow-sm">
      <figure>
        <Image
          height={200}
          width={150}
          src={data.photoUrl}
          alt="Shoes"
          className=" w-full rounded-xl"
        />
      </figure>
      <div className="">
        <h2 className="card-title pt-2">{data.name}</h2>
        <p className="text-indigo-500 font-medium">{data.subject}</p>
        <p className=" font-medium flex justify-start items-center gap-0">
          <TbCurrencyTaka />{" "}
          <span className="font-bold">{data.feePerHour}</span>
          <span className="text-gray-400">/Hour</span>
        </p>
        <div className="card-actions pt-3">
          <button className="btn bg-indigo-600 text-white w-full">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
