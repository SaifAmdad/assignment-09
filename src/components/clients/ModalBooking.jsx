"use client";

import { authClient } from "@/lib/auth-client";
import { serverUrl } from "@/secret";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { BsBookmarkCheck } from "react-icons/bs";

export function ModalBooking({ name, slot, id, token }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.userId = user?.id;
    setLoading(true);

    const res = await fetch(`${serverUrl}/add-booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        auth: token,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      redirect("/my-booked-session");
    }
  };
  return (
    <Modal>
      <Button
        className={` mt-6 w-full rounded-sm  ${slot < 1 ? "btn-disabled bg-indigo-200 text-black" : "bg-indigo-600 text-white"}`}
      >
        {slot < 1 ? "Slot not Available" : "Book a Session"}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground ml-5">
                <BsBookmarkCheck />
              </Modal.Icon>
              <Modal.Heading className="pl-5">
                Book a Session with{" "}
                <span className="font-semibold text-indigo-600">{name}</span>
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  {/* student name ------------------------ */}
                  <TextField
                    className="w-full"
                    name="studentName"
                    type="text"
                    variant="secondary"
                    value={user?.name}
                  >
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  {/* Tutor name----------------------- */}
                  <TextField
                    className="w-full"
                    name="tutorName"
                    type="text"
                    variant="secondary"
                    value={name}
                  >
                    <Label>Tutor Name</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  {/* Phone -------------------- */}
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                    isRequired={true}
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  {/* tutor ID ------------- */}
                  <TextField
                    className="w-full"
                    name="tutorId"
                    type="text"
                    variant="secondary"
                    value={id}
                  >
                    <Label>Tutor ID</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  {/*  Student email --------------- */}
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                    value={user?.email}
                  >
                    <Label>Student Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <Button
                    // slot="close"
                    className="bg-indigo-600 w-full my-5"
                    type="submit"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm "></span>
                    ) : (
                      "Book Now"
                    )}
                  </Button>
                </form>
              </Surface>
              <Button
                slot="close"
                variant="secondary"
                className="text-indigo-600 w-full"
              >
                Cancel
              </Button>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
