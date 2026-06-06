"use client";

import { serverUrl } from "@/secret";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

const UpdateTutor = ({ tutor, token }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setLoading(true);

    const res = await fetch(`${serverUrl}/update/${tutor._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        auth: token,
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setLoading(false);
      toast.success(`${tutor.tutorName} has been updated`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      document.getElementById(`modal_${tutor._id}`).close();
      redirect("/my-tutors");
    }
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-transparent border-none"
        onClick={() =>
          document.getElementById(`modal_${tutor._id}`).showModal()
        }
      >
        <FiEdit color="green" size={20} />
      </button>
      <dialog id={`modal_${tutor._id}`} className="modal">
        <div className="modal-box">
          {/* <form method="dialog"> */}
          <button
            onClick={() =>
              document.getElementById(`modal_${tutor._id}`).close()
            }
            className="btn text-xl btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {/* </form> */}
          <h3 className="font-bold text-lg">
            <span className="text-indigo-600">{tutor.tutorName}</span> info
          </h3>
          <p className="py-4">Update Tutor Informations</p>
          <div className="modal-action">
            <form
              onSubmit={onSubmit}
              className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 md:px-10"
            >
              <div className="flex flex-col sm:flex-row justify-center sm:gap-10 ">
                <div className="w-full">
                  <fieldset className="fieldset w-full">
                    <label className="label">Tutor Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Tutor Name"
                      required
                      name="tutorName"
                      defaultValue={tutor.tutorName}
                    />
                    <p className="validator-hint hidden">Required</p>
                  </fieldset>
                  <label className="fieldset">
                    <span className="label">Photo Url</span>
                    <input
                      type="text"
                      className="input "
                      placeholder="Photo url"
                      required
                      name="photoUrl"
                      defaultValue={tutor.photoUrl}
                    />
                    <span className="validator-hint hidden">Required</span>
                  </label>

                  <label className="fieldset">
                    <span className="label">Subject </span>
                    <select
                      defaultValue={tutor.subject}
                      name="subject"
                      className="select items-center justify-center"
                    >
                      <option disabled={true}>Select </option>
                      <option value="Math">Math</option>
                      <option value="Programming">Programming</option>
                      <option value="Physics">Physics</option>
                      <option value="English">English</option>
                      <option value="Electical">Electical</option>
                    </select>
                  </label>

                  <label className="fieldset">
                    <span className="label">Available Date & Time slot</span>
                    <input
                      type="text"
                      className="input "
                      placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM "
                      required
                      name="availableDateTime"
                      defaultValue={tutor.availableDateTime}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Hourly fee</span>
                    <input
                      type="number"
                      className="input "
                      placeholder="Fee/BDT"
                      required
                      name="feePerHour"
                      defaultValue={tutor.feePerHour}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Total Slot</span>
                    <input
                      type="number"
                      className="input "
                      placeholder="Slot"
                      required
                      name="totalSlot"
                      defaultValue={tutor.totalSlot}
                    />
                  </label>
                </div>
                {/* divider ----------------------------- */}

                <div className="w-full">
                  <label className="fieldset">
                    <span className="label">Session Start</span>
                    <input
                      type="date"
                      className="input "
                      placeholder="Session"
                      required
                      name="sessionStart"
                      defaultValue={tutor.sessionStart}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Institution</span>
                    <input
                      type="text"
                      className="input "
                      placeholder="Institution"
                      required
                      name="institution"
                      defaultValue={tutor.institution}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Experience (years)</span>
                    <input
                      type="number"
                      step="any"
                      className="input "
                      placeholder="ex: 0.5, 1.4"
                      required
                      name="experience"
                      defaultValue={tutor.experience}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Location</span>
                    <input
                      type="text"
                      className="input "
                      placeholder="Location"
                      required
                      name="location"
                      defaultValue={tutor.location}
                    />
                  </label>

                  <label className="fieldset">
                    <span className="label">Teaching Mode </span>
                    <select
                      defaultValue={tutor.teachingMode}
                      name="teachingMode"
                      className="select items-center justify-center"
                    >
                      <option disabled={true}>Select </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Both">Both</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label className=" fieldset">
                  <button
                    className="btn bg-indigo-600 text-white mt-4 input w-full"
                    type="submit"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm "></span>
                    ) : (
                      "Update Tutor"
                    )}
                  </button>
                </label>
              </div>
            </form>
          </div>
          <form method="dialog" className="flex justify-end py-4">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-ghost">Cancel</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateTutor;
