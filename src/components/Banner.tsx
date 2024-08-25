import React, { useEffect } from "react";
import AOS from "aos";
import { FaFacebook, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "aos/dist/aos.css";
import { SiGmail } from "react-icons/si";
import profile from "../assets/profile.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-purple-300 min-w-full overflow-x-hidden bg-fixed bg-cover lg:px-56 px-10 lg:py-20 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white w-full">
        <h1
          data-aos="zoom-in"
          className="lg:text-[52px] text-[52px] md:text-[128px] select-none cursor-pointer uppercase flex flex-col justify-center lg:items-start items-center text-white font-semibold leading-normal mb-10"
        >
          Welcome To My
          <span className="text-fuchsia-700">Portfolio</span>
        </h1>
        <p
          data-aos="fade-left"
          className="text-white text-xl select-none cursor-pointer"
        >
          Hope you enjoy your tour round my portfolio website
        </p>
        <div className="flex flex-row mt-8">
          <div className="flex items-center space-x-2 justify-center">
            <a
              href="https://github.com/Jackson234jay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <FaGithub className="text-[28px]" />
            </a>
            <a
              href="#"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <FaWhatsapp className="text-[28px]" />
            </a>
            <a
              href="mailto:blossomjohn399@gmail.com"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <SiGmail className="text-[28px]" />
            </a>
            <a
              href="#"
              className="text-black hover:text-black rounded-full glow p-2"
            >
              <FaXTwitter className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
      <div className=" hidden //md:flex">
        <img
          data-aos="fade-up"
          src={profile}
          width={290}
          className="rounded-full my-4 border-2 p-1 border-fuchsia-500 img_glow"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
