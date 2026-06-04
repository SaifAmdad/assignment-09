import AvatarClient from "@/components/clients/Avarter";
import { ModalBooking } from "@/components/clients/ModalBooking";
import { auth } from "@/lib/auth";
import { serverUrl } from "@/secret";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

// export async function generateMetadata({ params }, parent) {
//   // read route params
//   const { id } = await params;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

const TutorDetailsPage = async ({ params }) => {
  const h = new Headers(await headers());
  const { token } = await auth.api.getToken({
    headers: h,
  });
  const { id } = await params;
  const res = await fetch(`${serverUrl}/get-tutor/${id}`, {
    method: "GET",
    headers: {
      auth: token,
    },
  });
  const { tutor: data } = await res.json();

  return (
    <div className="container mx-auto lg:w-[75%] sm:px-10 py-10 bg-base-200 my-10 shadow-sm rounded-2xl flex flex-col items-center px-10">
      <div className=" w-full sm:w-xl flex flex-col justify-center items-center sm:items-start sm:justify-start sm:flex-row sm:gap-10">
        <AvatarClient
          url={data.photoUrl}
          width={200}
          height={300}
          className="rounded-sm"
        />
        <div className="flex flex-col text-center sm:text-left py-3 sm:mt-0 bg-base-100 sm:bg-transparent w-full">
          <h3 className="text-2xl font-bold">{data.tutorName}</h3>
          <p className="text-indigo-500 sm:pt-2">
            {data.subject} <span className="text-gray-400">tutor</span>{" "}
          </p>

          <p className="text-base opacity-75">
            With <span className="font-semibold">{data.experience} years</span>{" "}
            of experiences
          </p>
          <p className="text-indigo-600 text-xl font-bold flex justify-center sm:justify-start items-center sm:py-2">
            <TbCurrencyTaka size={24} /> {data.feePerHour}{" "}
            <span className="text-xl font-normal text-gray-400 pl-1">
              {" "}
              /hour
            </span>
          </p>

          <p className="sm:pt-3 hidden sm:inline-block">
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
            {/* row 1 */}
            <tr>
              <td className="font-bold">Teaching Mode</td>
              <td>{data.teachingMode}</td>
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
              <td className="font-bold text-sm">Available Date & Time</td>
              <td>{data.availableDateTime}</td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="font-bold">Total Slot </td>
              <td>{data.totalSlot} </td>
            </tr>

            {/* row 6 */}
            <tr>
              <td className="font-bold">Available Slot </td>
              <td className="font-bold text-indigo-600">
                {data.totalSlot - data.bookedSlot}{" "}
              </td>
            </tr>
            <tr>
              <td className="font-bold">Session Start </td>
              <td>{data.sessionStart}</td>
            </tr>
          </tbody>
        </table>
        <ModalBooking
          id={data._id}
          name={data.tutorName}
          // slot={0}
          slot={data.totalSlot - data.bookedSlot}
          token={token}
        />
      </div>
    </div>
  );
};

export default TutorDetailsPage;
