"use client";

import { authClient } from "@/lib/auth-client";
import { serverUrl } from "@/secret";
import { redirect } from "next/navigation";
import { useState } from "react";

const AddTutor = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.userId = user.id;

    const newTutor = await fetch(
      `https://assignment-09-server.onrender.com/add-tutor`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          auth: token,
          userId: user.id,
        },
        body: JSON.stringify(data),
      },
    );
    const res = await newTutor.json();
    if (res.success) {
      redirect("/my-tutors");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 md:px-10"
      >
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <div className="w-full">
            <fieldset className="fieldset w-full">
              <label className="label">Tutor Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Tutor Name"
                required
                name="tutorName"
              />
              <p className="validator-hint hidden">Required</p>
            </fieldset>
            <label className="fieldset">
              <span className="label">Photo Url</span>
              <input
                type="text"
                className="input w-full"
                placeholder="Photo-Url (Ex: http.....)"
                required
                name="photoUrl"
              />
              <span className="validator-hint hidden">Required</span>
            </label>

            <label className="fieldset">
              <span className="label">Subject </span>
              <select
                defaultValue="Select"
                name="subject"
                className="select items-center justify-center w-full"
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
                className="input w-full"
                placeholder="Example: Sun - Thu 5:00 PM - 8:00 PM "
                required
                name="availableDateTime"
              />
            </label>

            <label className="fieldset">
              <span className="label">Hourly fee</span>
              <input
                type="number"
                className="input w-full"
                placeholder="Fee/BDT"
                required
                name="feePerHour"
              />
            </label>

            <label className="fieldset">
              <span className="label">Total Slot</span>
              <input
                type="number"
                className="input w-full"
                placeholder="Slot"
                required
                name="totalSlot"
              />
            </label>
          </div>
          {/* divider ----------------------------- */}

          <div className="w-full">
            <label className="fieldset">
              <span className="label">Session Start</span>
              <input
                type="date"
                className="input w-full"
                placeholder="Session"
                required
                name="sessionStart"
              />
            </label>

            <label className="fieldset">
              <span className="label">Institution</span>
              <input
                type="text"
                className="input w-full"
                placeholder="Institution"
                required
                name="institution"
              />
            </label>

            <label className="fieldset">
              <span className="label">Experience (years)</span>
              <input
                type="number"
                step="any"
                className="input w-full"
                placeholder="ex: 0.5, 1.4"
                required
                name="experience"
              />
            </label>

            <label className="fieldset">
              <span className="label">Location</span>
              <input
                type="text"
                className="input w-full"
                placeholder="Location"
                required
                name="location"
              />
            </label>

            <label className="fieldset">
              <span className="label">Teaching Mode </span>
              <select
                defaultValue="Select"
                name="teachingMode"
                className="select items-center justify-center w-full"
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
              type="submit"
              className="btn bg-indigo-600 text-white mt-4 input w-full"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : (
                "Add Tutor"
              )}
            </button>
          </label>
        </div>
      </form>
    </>
  );
};

export default AddTutor;
