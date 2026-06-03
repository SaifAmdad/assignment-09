import MySession from "@/components/MySession";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookedSession = async () => {
  const h = new Headers(await headers());
  const { token } = await auth.api.getToken({
    headers: h,
  });
  return (
    <div className="container mx-auto lg:w-[75%] py-10">
      <div className="pb-5">
        <h1 className="font-bold text-2xl py-2"> My Booking</h1>
        <p className="text-base opacity-70">Sessions You have Booked </p>
      </div>
      <MySession token={token} />
    </div>
  );
};

export default MyBookedSession;
