import { MdOutlineCancel } from "react-icons/md";

const MySession = async ({ token }) => {
  const res = await fetch(
    `https://assignment-09-server.onrender.com/get-booking`,
    {
      method: "GET",
      headers: {
        auth: token,
      },
    },
  );
  const { booking } = await res.json();
  if (!booking) {
    return console.log("Nothing");
  }
  console.log(booking);
  return (
    <div>
      <div className="overflow-x-auto bg-base-200">
        {booking.length > 0 ? (
          <table className="table">
            <thead>
              <tr className="font-bold text-[16px] py-5">
                <th>Tutors</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {booking.map((booked, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold text-[16px]">
                          {booked.tutorName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booked.studentName}</td>
                  <td>{booked.email}</td>
                  <td>
                    <span
                      className={` btn border-none btn-disabled rounded-2xl ${booked.status == "Active" ? "bg-green-200 text-green-700" : "bg-amber-200 text-amber-500"}`}
                    >
                      {booked.status}
                    </span>
                  </td>
                  <th className="flex justify-center">
                    <button
                      className={`${booked.status !== "Active" ? "btn-disabled bg-red-300" : "bg-red-600"} btn  text-white`}
                    >
                      Cancel
                      <MdOutlineCancel color="white" size={15} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <div className="h-[40vh] flex justify-center items-center font-bold text-3xl">
              <p>Booking not found</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MySession;
