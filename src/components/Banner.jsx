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
    <div className="bg-[url('/banner.png')] h-[50vh] lg:h-[60vh] bg-no-repeat bg-cover bg-center relative">
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <div className="container px-12 md:px-6 lg:px-0 mx-auto lg:w-[75%] pt-16 pb-16  h-full flex flex-col justify-between">
            <div>
              <h1 className="text-white font-bold text-2xl sm:text-5xl sm:leading-14 max-w-2xl">
                Find the Perfect Tutor Achieve{" "}
                <span className="text-indigo-500">Your Goals</span>
              </h1>
              <p className="text-gray-300 py-7 text-sm sm:text-[16px] sm:leading-7 max-w-2xl">
                Connect with certified expert tutors for 1-on-1 personalized
                lessons, tailored to your pace and goals.
              </p>
            </div>

            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer w-40 shadow-none py-6"
            >
              Browse Tutors
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container px-12 md:px-6 lg:px-0 mx-auto lg:w-[75%] pt-16 pb-16  h-full flex flex-col justify-between">
            <h1 className="text-white font-bold text-2xl sm:text-5xl sm:leading-14 max-w-2xl">
              Turn Your Expertise Into Income. Teach on
              <span className="text-indigo-500"> TutorHub</span>
            </h1>
            <p className="text-gray-300 py-7 text-sm sm:text-[16px] sm:leading-7 max-w-2xl">
              Inspire the next generation. Set your own rates, manage your own
              schedule, and teach from anywhere in the world.
            </p>
            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer w-40 shadow-none py-6"
            >
              Add Tutor
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container px-12 md:px-6 lg:px-0 mx-auto lg:w-[75%] pt-16 pb-16  h-full flex flex-col justify-between">
            <h1 className="text-white font-bold text-2xl sm:text-5xl sm:leading-14 max-w-2xl">
              Your <span className="text-indigo-500">Academic Goals</span>,{" "}
              Matched Perfectly
            </h1>
            <p className="text-gray-300 py-7 text-sm sm:text-[16px] sm:leading-7 max-w-2xl">
              From school curriculum to advanced tech skills, get verified help
              when you need it most. No long-term commitments
            </p>
            <Link
              href={"/tutors"}
              className="btn bg-indigo-600 text-white border-none cursor-pointer w-40 shadow-none py-6"
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
