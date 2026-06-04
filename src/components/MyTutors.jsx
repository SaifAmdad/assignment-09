import { serverUrl } from "@/secret";
import Image from "next/image";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateTutor from "./clients/UpdateTutor";
import DeleteTutor from "./clients/DeleteTutor";
import Link from "next/link";

const MyTutors = async ({ token }) => {
  const res = await fetch(`${serverUrl}/my-tutors`, {
    method: "GET",
    headers: {
      auth: token,
    },
  });
  const { tutors } = await res.json();

  return (
    <div>
      <div className="overflow-x-auto bg-base-200">
        {tutors ? (
          <table className="table">
            <thead>
              <tr className="font-bold text-[16px] py-5">
                <th>Tutor Name</th>
                <th>Subject</th>
                <th className="text-center">Available Slot</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tutors.map((tutor, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={tutor.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                            height={100}
                            width={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-[16px]">
                          {tutor.tutorName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{tutor.subject}</td>
                  <td className="text-center">
                    {tutor.totalSlot - tutor.bookedSlot}
                  </td>
                  <th>
                    <div className="flex items-center justify-center">
                      <Link href={`/tutor/${tutor._id}`}>
                        <BiDetail color="#6366F1" size={22} />
                      </Link>

                      <UpdateTutor tutor={tutor} token={token} />
                      <DeleteTutor tutor={tutor} token={token} />
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <div className="font-bold text-3xl flex justify-center items-center h-[40vh]">
              <p className="text-center">Tutor Not Found</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyTutors;
