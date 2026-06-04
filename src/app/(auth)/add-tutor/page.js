import AddTutor from "@/components/AddTutor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "Add new Tutor | TutorHub",
  description: "Route not found",
};

const AddTutorPage = async () => {
  const h = new Headers(await headers());
  const { token } = await auth.api.getToken({
    headers: h,
  });

  return (
    <div className="container mx-auto md:w-190 pb-10 ">
      <div className="py-6">
        <h1 className="font-bold text-2xl py-2 text-center sm:text-left">
          {" "}
          Add Tutor
        </h1>
        <p className="text-base opacity-70 text-center sm:text-left">
          Create a new tutor profile
        </p>
      </div>
      <div className="px-10 sm:px-1">
        <AddTutor token={token} />
      </div>
    </div>
  );
};

export default AddTutorPage;
