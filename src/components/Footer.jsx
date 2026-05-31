import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto lg:w-[75%] flex flex-col justify-center lg:flex-row lg:justify-between ">
        {/* left footer */}
        <div className="max-w-62.5 py-5 lg:py-1">
          <Link
            href={"/"}
            className=" font-bold text-[16px] flex gap-0 text-white justify-center lg:justify-start"
          >
            <span>Tutor</span>
            <span className="text-indigo-500">Hub</span>
          </Link>
          <p className="text-sm text-center text-gray-300 lg:text-left font-normal py-3 leading-6">
            Connecting students with experts further to make learning easier
            faster and more effective.
          </p>
        </div>

        {/* middle footer */}
        <div className="flex flex-col sm:flex-row gap-10 py-5 lg:py-1 ">
          <div>
            <h3 className="text-[16px] text-white font-semibold">
              Quick Links
            </h3>
            <div className="text-white flex flex-col py-3">
              <Link className="pb-1.5 text-sm" href={"/tutors"}>
                All Tutors
              </Link>
              <Link className="pb-1.5 text-sm" href={"/add-tutor"}>
                Add Tutor
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-[16px]  text-white font-semibold">
              Contact Us
            </h3>
            <div className="text-white py-3">
              <p className="pb-1.5 text-sm flex justify-start items-center gap-1.5">
                <IoLocationOutline /> Dhaka, Bangladesh
              </p>
              <p className="pb-1.5 text-sm flex justify-start items-center gap-1.5">
                <FaPhoneAlt /> +88018-123456
              </p>
              <p className="pb-1.5 text-sm flex justify-start items-center gap-1.5">
                <MdOutlineMail /> example@gamil.com
              </p>
              <p className="pb-1.5 text-sm flex justify-start items-center gap-1.5">
                <IoTimeOutline /> Mon-Fri 09:00.am - 05:00.pm
              </p>
            </div>
          </div>
        </div>

        {/* right footer */}
        <div className="py-5 lg:py-1">
          <h3 className="text-[16px] text-white font-semibold">Social Links</h3>
          <div className="flex gap-3 py-3">
            <FaFacebook fill="blue" size={25} />
            <FaYoutube fill="red" size={25} />
            <FaXTwitter fill="#3399ff" size={25} />
            <FaWhatsappSquare fill="green" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
