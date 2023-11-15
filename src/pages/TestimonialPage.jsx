import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import img1 from "../assets/images/alice1.png";

const TestimonialPage = () => {
  const [data, setData] = useState([]);
  let url = "/database/testimonial.json";

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
  //     img: "/alice1.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },

  //   {
  //     img: "/alice2.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },
  //   {
  //     img: "/alice3.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },
  //   {
  //     img: "/alice4.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },
  //   {
  //     img: "/alice5.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },
  //   {
  //     img: "/alice6.png",
  //     name: "Alice ",
  //     title: " Backend developer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing eli nostrum illum quia eos voluptas tempora optio explicabo natus",
  //   },
  // ];
  return (
    <div>
      <div className=" h-screen-[1240px] ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
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

          <div className=" grid grid-cols-2  max-w-5xl mx-auto gap-8 group mt-4 sm:grid-cols-3 md:grid-cols-3">
            {data.map((item, i) => {
              return (
                <div className="bg-white border shadow-md  cursor-pointer p-8 pt-10 rounded-xl mix-blend-luminosity">
                  <img
                    src={item["img"]}
                    alt="image1"
                    className="h-20 mx-auto  rounded"
                  />

                  <p className="text-sm leading-7 my-3 font-light opacity-50">
                    {item["desc"]}
                  </p>
                  <h4 className="uppercase text-xl font-bold">
                    {item["name"]}
                  </h4>
                  <h4 className="text-sm font-bold">{item["title"]}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
