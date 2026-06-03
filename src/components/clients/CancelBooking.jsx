"use client";
import { serverUrl } from "@/secret";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const CancelBooking = ({ booked, token }) => {
  const [loading, setLoading] = useState(false);
  const onCancell = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`${serverUrl}/cancel-booking/${booked._id}`, {
      method: "PATCH",
      headers: {
        auth: token,
      },
    });
    if (res.ok) {
      redirect("/my-booked-session");
    }
  };
  return (
    <AlertDialog>
      <Button
        className={`${booked.status !== "Active" ? "btn-disabled bg-red-300" : "bg-red-600"} btn  text-white`}
      >
        Cancel
        <MdOutlineCancel color="white" size={15} />
      </Button>
      {/* <Button variant="danger" >Delete Project</Button> */}
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancell Session permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancell{" "}
                <strong>{booked.tutorName}</strong> Session This action cannot
                be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Back
              </Button>
              <Button onClick={onCancell} slot="close" variant="danger">
                {loading ? (
                  <span className="loading loading-spinner loading-sm "></span>
                ) : (
                  "Cancell Session"
                )}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBooking;
