"use client";
import { serverUrl } from "@/secret";
import { redirect } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AlertDialog, Button, Card, Link } from "@heroui/react";

const DeleteTutor = ({ tutor, token }) => {
  const [loading, setLoading] = useState(false);
  const onDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`${serverUrl}/delete/${tutor._id}`, {
      method: "DELETE",
      headers: {
        auth: token,
      },
    });
    const { success } = await res.json();

    if (success) {
      setLoading(false);
      document.getElementById(`delete_modal_${tutor._id}`).close();
      redirect("/my-tutors");
    }
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn border-none p-0"
        onClick={() =>
          document.getElementById(`delete_modal_${tutor._id}`).showModal()
        }
      >
        <RiDeleteBin6Line color="red" size={20} />
      </button>
      <dialog
        id={`delete_modal_${tutor._id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <AlertDialog>
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete tutor permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>"{tutor.tutorName}"</strong>. This action cannot be
                undone.
              </p>
            </AlertDialog.Body>
          </AlertDialog>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn rounded-full">Back</button>
            </form>
            <Button variant="danger" onClick={onDelete} className={"w-15"}>
              {loading ? (
                <span className="loading loading-spinner loading-sm "></span>
              ) : (
                "Delete"
              )}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteTutor;
