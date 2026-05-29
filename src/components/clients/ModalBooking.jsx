"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BsBookmarkCheck } from "react-icons/bs";

export function ModalBooking({ name, id }) {
  return (
    <Modal>
      <Button className="bg-indigo-600 mt-6 w-full rounded-sm">
        Book a Session
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
                <form className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <Button
                    slot="close"
                    className="bg-indigo-600 w-full my-5"
                    type="submit"
                  >
                    Book Now
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
