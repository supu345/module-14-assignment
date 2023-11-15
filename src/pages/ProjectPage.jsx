import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const ProjectPage = () => {
  const [data, setData] = useState([]);
  let url = "/database/project.json";

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(url);
        let json = await res.json();
        setData(json.data);
      } catch (e) {
        console.log(e.toString());
      }
    };
    fetchData();
  }, []);

  console.log(data);
  // let data = [
  //   {
  //     img: "/Re1.png",
  //     title: "Build & Launch without problems",
  //   },
  //   {
  //     img: "/Re2.png",
  //     title: "Build & Launch without problems",
  //   },
  //   {
  //     img: "/Re3.png",
  //     title: "Build & Launch without problems",
  //   },
  //   {
  //     img: "/Re4.png",
  //     title: "Build & Launch without problems",
  //   },
  //   {
  //     img: "/re5.png",
  //     title: "Build & Launch without problems",
  //   },
  //   {
  //     img: "/re6.png",
  //     title: "Build & Launch without problems",
  //   },
  // ];
  return (
    <div>
      <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            All Projects
          </h1>
          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold"> All Projects</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              All Projects
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-9">
              Better Agency/SEO Solution At <br /> Your Fingertips
            </h1>
          </div>

          <div className=" grid grid-cols-2  max-w-5xl mx-auto gap-8 group mt-4 sm:grid-cols-1 md:grid-cols-2">
            {data.map((item, i) => {
              return (
                <div className="border shadow-md  ">
                  <img src={item["img"]} />
                  <h1 className="text-1xl font-semibold  ml-4 mt-4 mb-4  text-center uppercase">
                    {item["title"]}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
