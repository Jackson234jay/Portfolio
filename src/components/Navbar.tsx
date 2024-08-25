import { IoMenu } from "react-icons/io5";
import { showSidebar } from "../sidebar";
import { hideSidebar } from "../sidebar";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="bg-purple-400 m-0 p-0 border-b border-white bg-fixed">
      <nav>
        <ul className="sidebar rounded-lg  text-3xl  fixed top-0 right-0 h-screen backdrop-blur-2xl w-3/6 z-[999] bg-rgba(255, 255, 255, 0.2) shadow-[-10px 0 10px] shadow-rgba(0, 0, 0, 0.1) hidden flex-col text-black items-start justify-start">
          <li
            onClick={hideSidebar}
            className="font-bold my-4 text-2xl cursor-pointer"
          >
            <a href="#">
              <IoCloseCircleOutline className="inline-block my-5 h-5/6" />
            </a>
          </li>
          <Link spy={true} smooth={true} to="Home">
            <li className="my-6 text-5xl font-serif ">
              <a href="">Home</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-6 text-5xl font-serif">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-6 text-5xl font-serif">
              <a href="">Services</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-6 text-5xl font-serif">
              <a href="">Contact</a>
            </li>
          </Link>
        </ul>
        <ul className="flex-row select-none flex text-3xl font-serif text-white  content-center lg:py-4  justify-end ">
          <h1 className="mx-4 text-3xl cursor-pointer hideOnMobile select-none">
            Logo
          </h1>
          <li className="hideOnMobile">
            <a href="">Home</a>
          </li>
          <Link spy={true} smooth={true} to="About">
            <li className="hideOnMobile">
              <a href="">About</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="hideOnMobile">
              <a href="">Services</a>
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="hideOnMobile">
              <a href="">Contact</a>
            </li>
          </Link>
          <li
            className="menu-btn transition-all duration-500 text-3xl items-center justify-center flex"
            onClick={showSidebar}
          >
            <a href="#">
              <IoMenu className="h-[26] transition-all duration-500 w-[26] items-center" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
