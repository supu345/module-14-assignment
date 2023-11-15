import React from "react";
import Button from "./Button";
import img1 from "../assets/images/Rectangle1241.png";
import img2 from "../assets/images/Rectangle1243.png";
import img3 from "../assets/images/Rectangle1242.png";
import img4 from "../assets/images/Rectangle1244.png";

const HeroList = () => {
  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r  ">
        <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
            Increase Your Customers Loyalty and Satisfaction
          </h1>
          <p>
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>

          <div className=" flex flex-row gap-6">
            <Button title="Get Started" />
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            <div class="col-span-2">
              <img
                src="/Rectangle1241.png"
                alt="Image 1"
                class="w-full h-auto"
              />
            </div>
            <div class="col-span-1">
              <img
                src="/Rectangle1242.png"
                alt="Image 3"
                class="w-full h-auto"
              />
            </div>
            <div class="col-span-1 ">
              <img
                src="/Rectangle1243.png"
                alt="Image 2"
                class="w-full  h-[130px]"
              />
            </div>
            <div class="col-span-2">
              <img
                src="/Rectangle1244.png"
                alt="Image 4"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroList;
