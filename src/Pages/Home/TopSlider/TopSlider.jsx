import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../../assets/slider/slide-1.jpg";
import slide2 from "../../../assets/slider/slide-2.jpg";
import slide3 from "../../../assets/slider/slide-3.jpg";
import slide4 from "../../../assets/slider/slide-4.jpg";
import { Link } from "react-router-dom";

const TopSlider = () => {
  return (
    <div className="-z-10 mt-64 sm:mt-0">
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide2" className="lg:mt-0">
          <div className="relative">
            <img src={slide2} alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#0000008c] to-[#0000005b] w-full lg:h-full  uppercase font-semibold text-center flex flex-col items-center justify-center">
              <p className="md:text-4xl max-w-6xl mb-10 text-white">
                Discover the Power of Fluent Communication: Elevate Your
                Language Skills with Fluentify!
              </p>
              <div>
                <Link
                  to="/signup"
                  className="text-xs uppercase py-4 px-6 bg-[#111F62] text-white rounded-2xl"
                >
                  sign up now
                </Link>
                <Link
                  to="/login"
                  className="ml-5 text-xs uppercase py-4 px-6 border-2 border-[#111F62] text-white rounded-2xl"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide1">
          <div className="relative">
            <img src={slide1} alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#0000008c] to-[#0000005b] w-full h-full  uppercase font-semibold text-center flex flex-col items-center justify-center">
              <p className="md:text-4xl max-w-6xl mb-10 text-white">
                Embark on a Journey of Language Mastery with Fluentify: Your
                Path to Fluency Starts Here!
              </p>
              <div>
                <Link
                  to="/signup"
                  className="text-xs uppercase py-4 px-6 bg-[#111F62] text-white rounded-2xl"
                >
                  sign up now
                </Link>
                <Link
                  to="/login"
                  className="ml-5 text-xs uppercase py-4 px-6 border-2 border-[#111F62] text-white rounded-2xl"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <div className="relative">
            <img src={slide3} alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#00000050] to-[#00000048] w-full h-full  uppercase font-semibold text-center flex flex-col items-center justify-center">
              <p className="md:text-4xl max-w-6xl mb-10 text-white">
                Unleash the Linguistic Hero Within: Fluentify - Your Supercharge
                for Language Proficiency!
              </p>
              <div>
                <Link
                  to="/signup"
                  className="text-xs uppercase py-4 px-6 bg-[#111F62] text-white rounded-2xl"
                >
                  sign up now
                </Link>
                <Link
                  to="/login"
                  className="ml-5 text-xs uppercase py-4 px-6 border-2 border-[#111F62] text-white rounded-2xl"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">
          <div className="relative">
            <img src={slide4} alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#00000059] to-[#00000042] w-full h-full  uppercase font-semibold text-center flex flex-col items-center justify-center">
              <p className="md:text-4xl max-w-6xl mb-10 text-white">
                Empower Yourself with Language Fluency: Fluentify - Your Gateway
                to Multilingual Success!
              </p>
              <div>
                <Link
                  to="/signup"
                  className="text-xs uppercase py-4 px-6 bg-[#111F62] text-white rounded-2xl"
                >
                  sign up now
                </Link>
                <Link
                  to="/login"
                  className="ml-5 text-xs uppercase py-4 px-6 border-2 border-[#111F62] text-white rounded-2xl"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
