import React from "react";

const UserTrends = () => {
  return (
    <div
      className="grid grid-cols-2 xl:-mt-9 gap-3 max-w-fit justify-start px-4 items-center bg-white/50 backdrop-opacity-10
 py-4  rounded-3xl "
    >
      <p className="text-lg font-matter-medium  ">Age-Based User Trends</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4 bg-white rounded-full p-3 box-content justify-self-end"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
      <p className="text-xs leading-none font-matter-light text-stone-400 col-span-2">
        People Born Between
      </p>
      <p className="text-xl leading-none font-matter-semibold">1948-2002</p>
      <div className="col-span-2 flex justify-between">
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">13.8%</p>
          <p className="bg-[#f4781c28] rounded-lg h-[4.00rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-stone-400 font-matter-light">
            18-24
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">32.2%</p>
          <p className="bg-gradient-to-t from-[#f47419] to-[#fdac60] rounded-lg h-[9.65rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-white bg-black rounded-full px-1 font-matter-light">
            25-34
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">26.9%</p>
          <p className="bg-[#f47a1c28] rounded-lg h-[8.04rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-stone-400 font-matter-light">
            35-44
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">17.9%</p>
          <p className="bg-[#f4781c28] rounded-lg h-[5.27rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-stone-400 font-matter-light">
            45-54
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">14.2%</p>
          <p className="bg-[#f4781c28] rounded-lg h-[4.25rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-stone-400 font-matter-light">
            55-64
          </p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <p className="text-[0.6rem] font-matter-light">9.5%</p>
          <p className="bg-[#f4781c28] rounded-lg h-[2.83rem] w-11/12  m-2">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <p className="text-[0.6rem] text-stone-400 font-matter-light">65+</p>
        </div>
      </div>
    </div>
  );
};

export default UserTrends;
