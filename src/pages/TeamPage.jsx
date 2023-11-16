import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const TeamPage = () => {
  return (
    <div>
      <div className=" h-screen-[1240px] ">
        <div className=" min-h-screen flex flex-col lg:px-32 px-5 ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            Team
          </h1>

          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold">Team</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              our team member
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-3">
              Check our awesome team <br /> members
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-4 container mx-auto ">
            <div className="shadow border rounded-lg col-span-12 md:col-span-6 lg:col-span-4">
              <img src="/devon.png" alt="Image 1" className="relative" />

              <div className=" absolute flex flex-row justify-center gap-2 bg-gray-200 rounded-full  items-center -mt-20 ml-20 ">
                <div className="inline-block p-2 justify-start  ">
                  <BiLogoFacebook />
                </div>
                <div className="  inline-block p-2 justify-start    ">
                  <AiOutlineTwitter />
                </div>

                <div className="  inline-block p-2 justify-start ">
                  <BsInstagram />
                </div>
              </div>
              <h1 className="font-semibold  text-2xl lg:mt-10  mb-4">
                Devon Lane
              </h1>
            </div>
            <div className="shadow border rounded-lg col-span-12 md:col-span-6 lg:col-span-4">
              <img src="/danny1.png" alt="Image 1" className="relative" />

              <div className=" absolute flex flex-row justify-center gap-2 bg-gray-200 rounded-full  items-center -mt-20 ml-20 ">
                <div className="inline-block p-2 justify-start  ">
                  <BiLogoFacebook />
                </div>
                <div className="  inline-block p-2 justify-start    ">
                  <AiOutlineTwitter />
                </div>

                <div className="  inline-block p-2 justify-start ">
                  <BsInstagram />
                </div>
              </div>
              <h1 className="font-semibold  text-2xl lg:mt-10  mb-4">
                Danny Bailey
              </h1>
            </div>
            <div className="shadow border rounded-lg col-span-12 md:col-span-6 lg:col-span-4">
              <img src="/alex.png" alt="Image 1" className="relative" />

              <div className=" absolute flex flex-row justify-center gap-2 bg-gray-200 rounded-full  items-center -mt-20 ml-20 ">
                <div className="inline-block p-2 justify-start  ">
                  <BiLogoFacebook />
                </div>
                <div className="  inline-block p-2 justify-start    ">
                  <AiOutlineTwitter />
                </div>

                <div className="  inline-block p-2 justify-start ">
                  <BsInstagram />
                </div>
              </div>
              <h1 className="font-semibold  text-2xl lg:mt-10  mb-4">
                Alex Lov
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
