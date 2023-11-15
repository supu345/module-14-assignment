import React from "react";
import img1 from "../assets/images/Mask5.png";
import img2 from "../assets/images/Mask1.png";
import img3 from "../assets/images/Mask4.png";
import img4 from "../assets/images/Mask2.png";
import img5 from "../assets/images/Mask3.png";

const FeaturedProject = () => {
  return (
    <>
      <div className=" min-h-full">
        <div className="  bg-green-100  ">
          <div className="   items-center lg:px-10 px-5 bg-green-100 mt-4 mb-4  -ml-4">
            <div className=" grid grid-col-span-6 gap-[30px]">
              <h5 className="font-semibold text-center lg:text-start leading-tight mt-14 text-green-400  ">
                Featured Project
              </h5>
              <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-3 pb-3">
                We provide the Perfect Solution <br />
                to your business growth
              </h1>
              <div class="grid grid-rows-none md:grid-cols-5 py-4 gap-2  md:gap-4 lg:mb-10 ">
                <div className="w-full h-full object-cover  col-span-2 md:col-span-3 row-span-2 pb-10  ">
                  <img
                    src="/Mask5.png"
                    alt="Image 1"
                    className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-lg  "
                  />
                  <p className=" text-sm">App Design -June20,23</p>
                  <h1 className=" font-semibold  pb-4">Redesign channel </h1>
                </div>

                <div className="w-full h-full object-cover col-span-1 ">
                  <img
                    src="/Mask1.png"
                    alt="Image 2"
                    className="w-full h-auto"
                  />
                  <p className=" text-sm">App Design -June20,23</p>
                  <h1 className=" font-semibold  pb-4">Redesign channel </h1>
                </div>
                <div className="w-full h-full object-cover col-span-1">
                  <img
                    src="/Mask4.png"
                    alt="Image 3"
                    className="w-full h-auto"
                  />
                  <p className=" text-sm">App Design -June20,23</p>
                  <h1 className=" font-semibold  pb-4">Redesign channel </h1>
                </div>
                <div className="w-full h-full object-cover col-span-1">
                  <img
                    src="/Mask2.png"
                    alt="Image 4"
                    className="w-full h-auto"
                  />
                  <p className=" text-sm">App Design -June20,23</p>
                  <h1 className=" font-semibold  pb-4">Redesign channel </h1>
                </div>
                <div className="w-full h-full object-cover col-span-1">
                  <img
                    src="/Mask3.png"
                    alt="Image 5"
                    className="w-full h-auto"
                  />
                  <p className=" text-sm">App Design -June20,23</p>
                  <h1 className=" font-semibold  pb-4">Redesign channel </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
