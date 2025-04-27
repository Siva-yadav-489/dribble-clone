import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 -mx-16 px-40 py-20 bg-[#f9f9f9]  max-sm:px-20">
      <div className="flex justify-between items-start max-md:flex-col">
        <div className="text-5xl font-matter-medium ">
          CogniAI
          <br />
          <p className="text-xl  font-matter-light text-stone-400 mt-3">
            Our intelligent platform provides rael time <br />
            insights, predictive analytics and automation to <br />
            optimize performance and efficiency.
          </p>
        </div>
        <div>
          <p className="text-xl font-matter-regular mb-4">Solutions</p>
          <p className="text-lg font-matter-regular text-stone-400 ">
            AI-Powered Analytics <br /> Predictive Insights <br />
            Automation & Optimization
          </p>
        </div>
        <div>
          <p className="text-xl font-matter-regular mb-4">Resorces</p>
          <p className="text-lg font-matter-regular text-stone-400 ">
            Blog & Insights <br /> Case Studies
            <br />
            Webinars & Events
          </p>
        </div>
        <div>
          <p className="text-xl font-matter-regular mb-4">
            Company{" "}
            <span className="text-sm font-matter-light bg-lime-500 rounded-full px-2 py-1">
              News
            </span>
          </p>
          <p className="text-lg font-matter-regular text-stone-400 ">
            About us <br /> Careers <br />
            Press & Media
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-14 max-sm:flex-col">
        <p className="text-xl font-matter-regular ">
          &copy;2025 CogniAI. All Rights Reserved.
        </p>
        <p className="text-xl font-matter-regular flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 border border-stone-800 p-2 mx-3 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
          Back to Top
        </p>
      </div>
    </div>
  );
};

export default Footer;
