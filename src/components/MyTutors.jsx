import Image from "next/image";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyTutors = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-base-200">
        <table className="table">
          <thead>
            <tr className="font-bold text-[16px] py-5">
              <th>Tutor</th>
              <th>Subject</th>
              <th>Available Slot</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[16px]">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
              <th>
                <div className="flex gap-3 justify-center">
                  <BiDetail color="#6366F1" size={22} />
                  <FiEdit color="green" size={20} />
                  <RiDeleteBin6Line color="red" size={20} />
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                  </div>
                </div>
              </td>
              <td>Carroll Group</td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutors;
