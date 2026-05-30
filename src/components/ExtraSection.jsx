import Link from "next/link";
import React from "react";
import {
  Bs2CircleFill,
  Bs3CircleFill,
  BsFill1CircleFill,
} from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdLockOutline, MdSchedule } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const ExtraSection = () => {
  return (
    <>
      <div className="container mx-auto lg:w-[75%] flex flex-col md:flex-row justify-between gap-10">
        {/* left section ----------------- */}
        <div className="bg-base-200 p-7 rounded-xl w-full  ">
          <h1 className="text-2xl font-bold py-5">
            Why Choose <span className="text-indigo-600">TutorHub</span>?
          </h1>
          <div className="flex justify-start items-center gap-5 py-3">
            <GoVerified size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">
                Verified & Experienced Tutors
              </h3>
              <p className="text-sm opacity-65">
                All Tutors are verified and heighly experienced.
              </p>
            </div>
          </div>

          {/* ------- */}
          <div className="flex justify-start items-center gap-5 py-3">
            <MdSchedule size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Flexible Scheduling</h3>
              <p className="text-sm opacity-65">
                Book session at times that word best for you.
              </p>
            </div>
          </div>

          {/* ---------- */}
          <div className="flex justify-start items-center gap-5 py-3">
            <RiMoneyEuroCircleLine size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Affordable Pricing</h3>
              <p className="text-sm opacity-65">
                Quality education at prices you can efford.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-5 py-3">
            <MdLockOutline size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Secure & Rellable</h3>
              <p className="text-sm opacity-65">
                Your data and privacy are always protected.
              </p>
            </div>
          </div>
        </div>

        {/* right section --------------------- */}
        <div className="bg-base-200 p-7 rounded-xl w-full  ">
          <h1 className="text-2xl font-bold py-5">How it Works?</h1>
          <div className="flex justify-start items-center gap-5 py-3">
            <BsFill1CircleFill size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Find a Tutor</h3>
              <p className="text-sm opacity-65">
                Search and filter tutor by subject.
              </p>
            </div>
          </div>

          {/* ------- */}
          <div className="flex justify-start items-center gap-5 py-3">
            <Bs2CircleFill size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Book a Session</h3>
              <p className="text-sm opacity-65">
                Choose a time and book your session
              </p>
            </div>
          </div>

          {/* ---------- */}
          <div className="flex justify-start items-center gap-5 py-3">
            <Bs3CircleFill size={30} fill="#6366F1" />
            <div>
              <h3 className="font-bold text-[16px]">Start Learning</h3>
              <p className="text-sm opacity-65">
                Join the session and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:w-[75%] bg-indigo-600 text-white flex justify-center items-center py-8 rounded-2xl my-10 gap-7">
        <div>
          <h2 className="font-bold text-xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-base pt-2 opacity-85">
            Join thousends of students learning with expert tutors.{" "}
          </p>
        </div>
        <Link href={"/tutors"} className="btn btn-outline rounded-xl">
          Browse Tutors
        </Link>
      </div>
    </>
  );
};

export default ExtraSection;
