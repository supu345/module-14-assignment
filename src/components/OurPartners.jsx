import React from "react";
import img1 from "../assets/images/Slack.png";
import img2 from "../assets/images/Trello.png";
import img3 from "../assets/images/monday.png";
import img4 from "../assets/images/Notion.png";
import img5 from "../assets/images/google.png";

const OurPartners = () => {
  return (
    <div className=" bg-slate-50 ">
      <div className="flex flex-row gap-5 justify-between items-center pt-3 m-3 pl-4 pr-4">
        <img src="/google.png" alt="" className="w-[120px] h-[30px] " />
        <img src="/Trello.png" alt="" className="w-[100px] h-[20px] " />
        <img src="/monday.png" alt="" className="w-[130px] h-[30px] " />
        <img src="/Notion.png" alt="" className="w-[120px] h-[30px] " />
        <img src="/Slack.png" alt="" className="w-[120px] h-[20px] " />
      </div>
    </div>
  );
};

export default OurPartners;
