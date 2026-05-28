import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto lg:w-[75%] flex flex-col justify-center items-center lg:flex-row lg:justify-between ">
        {/* left footer */}
        <div className="max-w-[250px] py-5 lg:py-1">
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
        <div className="flex flex-col sm:flex-row gap-10 py-5 lg:py-1">
          <div>
            <h3 className="text-[16px] text-white font-semibold">
              Quick Links
            </h3>
          </div>
          <div>
            <h3 className="text-[16px] text-white font-semibold">Contact Us</h3>
          </div>
        </div>

        {/* right footer */}
        <div className="py-5 lg:py-1">
          <h3 className="text-[16px] text-white font-semibold">Social Links</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
