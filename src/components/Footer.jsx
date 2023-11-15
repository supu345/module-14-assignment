import React from "react";
import { FiGithub } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32  items-start ">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">CafePulse</h1>
          <p className=" text-sm">
            Welcome to our coffee haven! Explore our aromatic brews, savor
            artisanal flavors, and discover the perfect roast to elevate your
            daily ritual.
          </p>
          <div className="flex flex-row justify-start gap-2">
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <BiLogoFacebook />
            </div>
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <AiOutlineTwitter />
            </div>

            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400">
              <FiGithub />
            </div>
            <div className="  border rounded-full inline-block p-2 justify-start mb-8  bg-green-400 ">
              <BsInstagram />
            </div>
          </div>
        </div>

        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/project"
            >
              Project
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/service"
            >
              Service
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/team"
            >
              Team
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/testimonial"
            >
              Testimonial
            </a>
          </nav>
        </div>

        <div className="justify-start items-start">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 ">Address</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Designcy Agency Head Office
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Airport Road
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              United Arab Emirate
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-backgroundColor"> Ostad programmers </span>|
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
