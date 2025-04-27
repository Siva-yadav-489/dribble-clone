import React from "react";
import StaticSegmentedBar from "./StaticSegmentBar";

const Ecommerce = () => {
  return (
    <div className="col-span-3  bg-[#f7f7f7]  p-8 w-full h-full max-lg:col-span-6 rounded-3xl">
      <p className="text-3xl font-matter-medium ">For E-commerce</p>
      <p className="text-lg font-matter-regular text-stone-400">
        Identify trends & opportunities in real-time to make data-driven
        <br />
        desicions and stay ahead of competition.
      </p>
      <div className="bg-white rounded-3xl p-4 mt-10 ">
        <p className="text-2xl font-matter-medium pt-4">Affiliates</p>

        {/* united states */}
        <div className="flex max-sm:flex-col justify-between border border-stone-200  p-2 w-full items-center my-3 rounded-2xl">
          <div className="mx-2 flex items-center">
            <img
              width="52"
              height="52"
              src="https://img.icons8.com/color/96/usa-circular.png"
              alt="usa-circular"
            />
            <p className="font-matter-medium leading-tight text-xl pl-2">
              United States <br />{" "}
              <span className="text-sm text-stone-400 font-matter-regular leading-tight">
                Electronic & Technology
              </span>
            </p>
          </div>
          <div className="pr-3">
            <div className="flex justify-between text-[0.6rem] pb-1">
              <p className="text-stone-400 font-matter-light">98,720</p>
              <p className="font-matter-regular">78%</p>
            </div>
            <StaticSegmentedBar segments={20} filled={16} />
          </div>
        </div>
        {/* france */}
        <div className="flex max-sm:flex-col justify-between border border-stone-200  p-2 w-full items-center my-3 rounded-2xl">
          <div className="mx-2 flex items-center">
            <img
              width="52"
              height="52"
              src="https://img.icons8.com/color/52/france-circular.png"
              alt="france-circular"
            />
            <p className="font-matter-medium leading-tight text-xl pl-2">
              France <br />{" "}
              <span className="text-sm text-stone-400 font-matter-regular leading-tight">
                Innovation & Engineering
              </span>
            </p>
          </div>
          <div className="pr-3">
            <div className="flex justify-between text-[0.6rem] pb-1">
              <p className="text-stone-400 font-matter-light">46,253</p>
              <p className="font-matter-regular">52%</p>
            </div>
            <StaticSegmentedBar segments={20} filled={11} />
          </div>
        </div>
        {/* south korea */}
        <div className="flex max-sm:flex-col justify-between border border-stone-200  p-2 w-full items-center my-3 rounded-2xl">
          <div className="mx-2 flex items-center">
            <img
              width="52"
              height="52"
              src="https://img.icons8.com/fluency/52/south-korea-circular.png"
              alt="south-korea-circular"
            />
            <p className="font-matter-medium leading-tight text-xl pl-2">
              South Korea <br />{" "}
              <span className="text-sm text-stone-400 font-matter-regular leading-tight">
                Smart Tech & AI
              </span>
            </p>
          </div>
          <div className="pr-3">
            <div className="flex justify-between text-[0.6rem] pb-1">
              <p className="text-stone-400 font-matter-light">72,873</p>
              <p className="font-matter-regular">68%</p>
            </div>
            <StaticSegmentedBar segments={20} filled={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
