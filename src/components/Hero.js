import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-[5rem] max-[450px]:text-6xl leading-tight font-matter-regular text-center mt-8 tracking-tight">
        Turn Raw Data into <br></br> Actionable Insights - Instantly
      </h1>
      <p className="text-base text-center text-stone-500 mt-10 font-matter-regular">
        Harness AI-driven analysis to tranform complex data into clear,
        actionable insights. No coding required, just results.
      </p>
      <button className="text-lg py-3 px-8 bg-black text-white rounded-full mt-6 font-matter-light">
        Get Started for Free
      </button>
    </div>
  );
};

export default Hero;
