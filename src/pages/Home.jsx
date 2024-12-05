import React from "react";
import Navbar from "../component/Navbar";
import CategoryLayout from "../component/CategoryLayout";
import { Outlet } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import studentBanner from "../assets/studentBanner.png";
import careerChange from "../assets/careerChange.jpg";
import mockInterview from "../assets/mockInterview.jpg";

const Home = () => {
  return (
    <div className="font-poppins">
      <header >
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Swiper */}

        <div className="home container mx-auto py-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <div className="bg-white flex items-center justify-center gap-4 h-full w-11/12 mx-auto">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-[#003366] mb-3">
                    Empower Your Future with Our Student Services
                  </h1>
                  <p className="text-center text-black font-normal text-sm">
                    Discover tailored solutions to enhance your career and
                    academic journey. From personalized counseling to
                    skill-building workshops, we are here to help you achieve
                    your dreams and unlock your full potential.
                  </p>
                </div>
                <div>
                  <img src={studentBanner} alt="student banner" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white flex items-center justify-center gap-4 h-full w-11/12 mx-auto">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-[#FF5A60] mb-3">
                    Ace Your Interviews with Expert Guidance!
                  </h1>
                  <p className="text-center text-black font-normal text-sm">
                    Gain confidence and polish your interview skills with our
                    personalized mock interview sessions. Prepare for success
                    with real-time feedback from experienced counselors.
                  </p>
                </div>
                <div>
                  <img src={mockInterview} alt="student banner" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white flex items-center justify-center gap-4 h-full w-11/12 mx-auto p-3">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-[#142E54] mb-3">
                    Navigate Your Career Shift with Confidence!
                  </h1>
                  <p className="text-center text-black font-normal text-sm">
                    A hands-on bootcamp designed to equip you with the skills
                    and strategies to build and grow your business successfully.
                  </p>
                </div>
                <div>
                  <img src={careerChange} alt="student banner" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </header>

      <main className="pt-5 gap-4">
        {/* <aside className="col-span-1 md:col-span-4">
          <CategoryLayout />
        </aside> */}
        {/* category */}
        <section className="grid grid-cols-2 gap-12">
          <CategoryLayout />
          <div className="bg-[#F4F9F9] pt-12 px-4 text text-center">
            <h1 className="text-[#DAA520] text-4xl font-bold mb-3">
              Find Your Ideal Career Path
            </h1>
            <p className="text-center">
              Take our quick quiz to discover career paths that match your
              skills and interests. Find your ideal profession and start your
              journey today!
            </p>
            <button className="btn rounded-none bg-[#2E8B57] text-white px-3 py-2 w-1/3 mt-4 ">
              Get Started
            </button>
          </div>
        </section>
        <section className=" mt-12 p-6 gap-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Home;
