import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import ServiceCard from "../components/ServiceCard";
const ServicePage = () => {
  return (
    <div>
      <div className=" h-screen-[1240px] ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            Our Services
          </h1>
          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold">Our Services</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              Our All Services
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-3">
              We Provide BestWeb design
              <br /> services
            </h1>
          </div>

          <div className="mt-20 ">
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
