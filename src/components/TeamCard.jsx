import React from "react";
import { FiGithub } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import img4 from "/danny1.png";
const TeamCard = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 container mx-auto ">
        <div className="shadow border">
          <div>
            <img src={img4} alt="Image 1" className="relative" />

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
            <h1>Name</h1>
            <div></div>
          </div>
          <div>
            <img src={img4} alt="Image 1" className="relative" />

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
            <h1>Name</h1>
            <div></div>
          </div>
          <div>
            <img src={img4} alt="Image 1" className="relative" />

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
            <h1>Name</h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
