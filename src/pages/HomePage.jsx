import React from "react";
import HeroList from "../components/HeroList";
import OurPartners from "../components/OurPartners";
import WorkList from "../components/WorkList";
import FeaturedProject from "../components/FeaturedProject";

const HomePage = () => {
  return (
    <>
      <div className="  bg-white ">
        <div className=" min-h-screen bg-green-100  ">
          <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-green-100  ">
            <HeroList />
          </div>

          <OurPartners />
        </div>
        <div className=" bg-green-100 h-[20px] "></div>
        <div>
          <WorkList />
        </div>
        <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-green-100  ">
          <FeaturedProject />
        </div>
      </div>
    </>
  );
};

export default HomePage;
