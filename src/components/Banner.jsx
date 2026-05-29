"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

function Banner() {
  return (
    <div className="bg-[url('/banner.png')] h-fit lg:h-[60vh] bg-no-repeat bg-cover bg-center relative">
      {/* <div className="container mx-auto lg:w-[75%]">
        <h1 className="text-white font-bold text-5xl leading-14">
          Find the Perfect Tutor <br /> Achieve{" "}
          <span className="text-indigo-500">Your Goals</span>
        </h1>
        <p className="text-gray-300 py-9 leading-7">
          Connect with certified expert tutors for 1-on-1 personalized lessons,{" "}
          <br />
          tailored to your pace and goals.
        </p>
      </div> */}
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // autoplay={true}
      >
        <SwiperSlide>
          <div className="container mx-auto lg:w-[75%] pt-16">
            <h1 className="text-white font-bold text-5xl leading-14">
              Find the Perfect Tutor <br /> Achieve{" "}
              <span className="text-indigo-500">Your Goals</span>
            </h1>
            <p className="text-gray-300 py-7 leading-7">
              Connect with certified expert tutors for 1-on-1 personalized
              lessons, <br />
              tailored to your pace and goals.
            </p>
            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer"
            >
              Browse Tutors
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto lg:w-[75%] pt-16">
            <h1 className="text-white font-bold text-5xl leading-14">
              Turn Your Expertise Into Income. <br /> Teach on
              <span className="text-indigo-500"> TutorHub</span>
            </h1>
            <p className="text-gray-300 py-7 leading-7">
              Inspire the next generation. Set your own rates, manage your own
              schedule,
              <br /> and teach from anywhere in the world.
            </p>
            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer w-28"
            >
              Add Tutor
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto lg:w-[75%] pt-16">
            <h1 className="text-white font-bold text-5xl leading-14">
              Your <span className="text-indigo-500">Academic Goals</span>,{" "}
              <br /> Matched Perfectly
            </h1>
            <p className="text-gray-300 py-7 leading-7">
              From school curriculum to advanced tech skills, get verified help
              <br /> when you need it most. No long-term commitments
            </p>
            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer "
            >
              Book Tutor
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>{" "}
    </div>
  );
}

export default Banner;
