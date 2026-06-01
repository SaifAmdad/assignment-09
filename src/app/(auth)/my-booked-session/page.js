import MySession from "@/components/MySession";

const MyBookedSession = () => {
  return (
    <div className="container mx-auto lg:w-[75%] py-10">
      <div className="pb-5">
        <h1 className="font-bold text-2xl py-2"> My Booking</h1>
        <p className="text-base opacity-70">Sessions You have Booked </p>
      </div>
      <MySession />
    </div>
  );
};

export default MyBookedSession;
