import React from "react";
import { SiJsonwebtokens } from "react-icons/si";
import { SiWebhint, SiWebcomponentsdotorg, SiWebpack } from "react-icons/si";

const StartList = () => {
  return (
    <>
      <div className="text-center mb-0 mt-0 ">
        <div className="container items-center mx-auto py-36">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="  shadow-md hover:shadow-lg  duration-300 p-6 rounded-md ">
              <div className="  border rounded inline-block p-4  mb-3  bg-green-100 ">
                <SiJsonwebtokens />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">240452</h3>
              <p className="text-lg text-gray-600">Followers</p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md ">
              <div className=" border rounded inline-block p-4  mb-3  bg-green-100 ">
                <SiWebhint />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">6300</h3>
              <p className="text-lg text-gray-600">Solved Problems</p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md ">
              <div className="  border rounded inline-block p-4  mb-3  bg-green-100  ">
                <SiWebcomponentsdotorg />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">25000</h3>
              <p className="text-lg text-gray-600">Happy Customers</p>
            </div>
            <div className="  shadow-md hover:shadow-lg duration-300 p-6 rounded-md ">
              <div className="  border rounded inline-block p-4  mb-3  bg-green-100  ">
                <SiWebpack />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">360452</h3>
              <p className="text-lg text-gray-600">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartList;
