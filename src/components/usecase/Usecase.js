import React from "react";
import BusinessLeaders from "./BusinessLeaders";
import MarketingTeams from "./MarketingTeams";
import FinancialProff from "./FinancialProff";
import Ecommerce from "./Ecommerce";

const Usecase = () => {
  return (
    <div className=" my-20 mx-16 max-sm:mx-2">
      <p className="text-xl text-amber-500 font-matter-medium">USE CASE</p>
      <p className="text-5xl my-5 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
        Optimize Workflows with Smart <br /> Automation Tools
      </p>
      <div className="grid grid-cols-6 place-content-between gap-10 place-items-start items-center ">
        <p className="text-2xl col-span-3 text-stone-400 font-matter-regular my-3">
          Organize tasks, track progress and achieve more-effortlessly.
        </p>
        <button className="text-lg col-span-3 font-matter-light bg-black rounded-full text-white py-4 px-7 my-3 place-self-end">
          See AI in Action
        </button>
        <BusinessLeaders />
        <MarketingTeams />
        <FinancialProff />
        <Ecommerce />
      </div>
    </div>
  );
};

export default Usecase;
