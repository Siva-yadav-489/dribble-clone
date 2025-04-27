import React from "react";
import img1 from "./usecase/images/img2.jpeg";
import img2 from "./usecase/images/img4.jpeg";

const Testimonial = () => {
  return (
    <div className="my-20 mx-16 max-sm:mx-2">
      <p className="text-xl text-amber-500 font-matter-medium">TESTIMONIAL</p>
      <p className="text-5xl my-3 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
        What Our Customers Say About <br /> Their Experiance
      </p>
      <div className="grid grid-cols-2 place-content-between gap-10 place-items-start items-center ">
        <p className="text-2xl text-stone-400 font-matter-regular my-3">
          Genuine feedback showcasing real success and customer <br />
          satisfaction
        </p>
        <button className="text-lg font-matter-light bg-black rounded-full text-white py-4 px-7 my-3 place-self-end">
          See All Testimonials
        </button>
        <div className="col-span-2 bg-[#f9f9f9] rounded-2xl flex max-lg:flex-col justify-start w-full p-5 ">
          <img src={img1} alt="img" className="w-80 h-80 rounded-xl m-5" />
          <div className="flex flex-col justify-between items-start m-5">
            <p className="text-3xl font-matter-medium">
              With CogniAI, we transformed raw data into actionable insights,{" "}
              <br />
              improving productivity,streamlining processes and enhancing <br />
              strategic planning.
            </p>
            <p className="text-xl font-matter-regular">
              Daniel Pierce
              <br />{" "}
              <span className="text-lg font-matter-light text-stone-400">
                CEO Kiera.io
              </span>
            </p>
          </div>
          <p className="m-5 text-5xl font-matter-semibold place-self-end">
            100% <br />{" "}
            <span className="text-lg font-matter-regular">
              Verified Customer Testimonials
            </span>
          </p>
        </div>
        <div className="col-span-2 bg-[#f9f9f9] rounded-2xl flex max-lg:flex-col justify-start w-full p-5 ">
          <img src={img2} alt="img" className="w-80 h-80 rounded-xl m-5" />
          <div className="flex flex-col justify-between items-start m-5">
            <p className="text-3xl font-matter-medium">
              From raw ata to real results, CogniAI boosts productivity, <br />
              Optimizes operations andempowers smarter, datad-driven
              <br />
              business decisions with unmatched efficiency.
            </p>
            <p className="text-xl font-matter-regular">
              Saviera Joel
              <br />{" "}
              <span className="text-lg font-matter-light text-stone-400">
                Founder Lokalane.com
              </span>
            </p>
          </div>
          <p className=" m-5 pl-16 text-5xl font-matter-semibold place-self-end">
            7x <br />{" "}
            <span className="text-lg font-matter-regular">
              Faster, Smarter and Better!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
