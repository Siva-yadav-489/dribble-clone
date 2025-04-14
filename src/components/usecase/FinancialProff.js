import React from "react";

const FinancialProff = () => {
  return (
    <div className="col-span-3 bg-[#f7f7f7]  p-8 w-full h-full rounded-3xl">
      <p className="text-3xl font-matter-medium ">
        For Financial Proffesionals
      </p>
      <p className="text-lg font-matter-regular text-stone-400">
        Identify trends & opportunities in real-time to make data-driven
        <br />
        desicions and stay ahead of competition.
      </p>
      <div className="bg-white rounded-3xl p-4 mt-10 grid grid-cols-2 items-center">
        <p className="text-2xl font-matter-medium pt-4">Schedule Transfer</p>
        <button className="py-2 mt-4 w-1/3 text-md font-matter-light border place-self-end border-stone-400 rounded-full">
          6 months
        </button>
      </div>
    </div>
  );
};

export default FinancialProff;
