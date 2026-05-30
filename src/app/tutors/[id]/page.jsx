import { ModalBooking } from "@/components/clients/ModalBooking";
import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const data = {
    _id: "001",
    tutorName: "Anisul Islam",
    photoUrl:
      "https://pbs.twimg.com/profile_images/1313143643398721537/29J0U2P__400x400.jpg",
    subject: "Programming",
    availableDate: "Sun-Fri",
    feePerHour: 200,
    totalSlot: 3,
    sessionStart: "12-03-2026",
    institution: "Tempare University, Finland",
    location: "Finland",
    teachingMode: "Online",
    experience: 3,
    rating: 4.5,
  };
  return (
    <div className="container mx-auto lg:w-[75%] sm:px-10 py-10 bg-base-200 my-10 shadow-sm rounded-2xl flex flex-col items-center">
      <div className="w-full sm:w-xl flex flex-col justify-center items-center sm:items-start sm:justify-start sm:flex-row gap-10">
        <Image
          src={data.photoUrl}
          alt="Profile"
          height={300}
          width={200}
          className="rounded-sm"
        />
        <div className="flex flex-col text-center sm:text-left ">
          <h3 className="text-2xl font-bold">{data.tutorName}</h3>
          <p className="text-indigo-500 pt-2">
            {data.subject} <span className="text-gray-400">tutor</span>{" "}
          </p>

          <p className="text-base opacity-75">
            With <span className="font-semibold">{data.experience} years</span>{" "}
            of experiences
          </p>
          <p className="text-indigo-600 text-xl font-bold flex justify-center sm:justify-start items-center py-2">
            <TbCurrencyTaka size={24} /> {data.feePerHour}{" "}
            <span className="text-xl font-normal text-gray-400 pl-1">
              {" "}
              /hour
            </span>
          </p>

          <p className="pt-3">
            <span className="btn bg-indigo-200 mr-3 py-1 px-8 font-medium text-sm rounded-xl text-black">
              {data.teachingMode}
            </span>
          </p>
        </div>
      </div>

      <div className="py-5 w-full sm:w-xl bg-base-100 my-5 rounded-xl">
        <table className="table">
          <tbody className="text-[16px]">
            {/* row 1 */}
            <tr>
              <td className="font-bold">Subject</td>
              <td>{data.subject}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="font-bold">Institution</td>
              <td>{data.institution}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="font-bold">Location</td>
              <td>{data.location}</td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="font-bold text-sm">Available Date $ Slot</td>
              <td>{data.availableDate}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="font-bold">Total Slot </td>
              <td>{data.totalSlot}</td>
            </tr>
            {/* row 6 */}
            <tr>
              <td className="font-bold">Session Start </td>
              <td>{data.sessionStart}</td>
            </tr>
          </tbody>
        </table>
        <ModalBooking id={data._id} name={data.name} />
      </div>
    </div>
  );
};

export default TutorDetailsPage;
