import React from "react";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";

const MarketingTeams = () => {
  return (
    <div className=" bg-[#f7f7f7]  p-8 w-full h-full flex justify-between col-span-4  rounded-3xl ">
      {/* left half */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-3xl font-matter-medium ">For Marketing Teams</p>
          <p className="text-lg font-matter-regular justify-start text-stone-400">
            Identify trends & opportunities in real-
            <br />
            time to make data-driven desicions and <br />
            stay ahead of competition.
          </p>
        </div>
        <div className="flex ">
          <img
            src={img1}
            alt="img"
            className="rounded-full size-20 border-4 border-stone-100"
          />
          <img
            src={img2}
            alt="img"
            className="rounded-full size-20 border-4 border-stone-100 -ml-7"
          />
          <img
            src={img3}
            alt="img"
            className="rounded-full size-20 border-4 border-stone-100 -ml-7"
          />
          <img
            src={img4}
            alt="img"
            className="rounded-full size-20 border-4 border-stone-100 -ml-7"
          />
        </div>
      </div>
      {/* right half */}
      <div className="grid grid-cols-2  gap-3 w-fit justify-start py-8 pl-8 items-center bg-white rounded-3xl ">
        <p className="text-lg font-matter-medium  ">Age-Based User Trends</p>

        <p className="text-xs leading-none font-matter-light text-stone-400 col-span-2">
          People Born Between
        </p>
        <p className="text-xl leading-none font-matter-semibold">1948-2002</p>
        {/* graph */}
        <div className="col-span-2 flex justify-between">
          <div className="flex flex-col justify-end items-center">
            <p className="text-[0.6rem] font-matter-light">13.8%</p>
            <p className="bg-[#f4781c28] rounded-2xl h-[4.00rem] w-28 m-1">
              &nbsp;
            </p>
            <p className="text-[0.6rem] text-stone-400 font-matter-light">
              18-24
            </p>
          </div>
          <div className="flex flex-col justify-end items-center">
            <p className="text-[0.6rem] font-matter-light">32.2%</p>
            <p className="bg-gradient-to-t from-[#f47419] to-[#fdac60] rounded-2xl h-[9.65rem] w-28 m-1">
              &nbsp;
            </p>
            <p className="text-[0.6rem] text-white bg-black rounded-full px-1 font-matter-light">
              25-34
            </p>
          </div>
          <div className="flex flex-col justify-end items-center">
            <p className="text-[0.6rem] font-matter-light">26.9%</p>
            <p className="bg-[#f47a1c28] rounded-2xl h-[8.04rem] w-28 m-1">
              &nbsp;
            </p>
            <p className="text-[0.6rem] text-stone-400 font-matter-light">
              35-44
            </p>
          </div>
          <div className="flex flex-col justify-end items-center">
            <p className="text-[0.6rem] font-matter-light">&nbsp;</p>
            <p className="bg-[#f4781c28] rounded-l-2xl h-[5.27rem] w-5 my-1 ml-1 ">
              &nbsp;
            </p>
            <p className="text-[0.6rem] text-stone-400 font-matter-light">
              &nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTeams;
