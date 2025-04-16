import React from "react";
import img from "./usecase/images/pricing.jpg";

const PricingPlan = () => {
  return (
    <div className=" mx-10 flex flex-col justify-center">
      <p className="text-xl text-center text-amber-500 font-matter-medium">
        PRICING PLAN
      </p>
      <p className="text-5xl text-center my-3 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black  to-amber-500 inline-block">
        Flexible Plans for Every Need and Budget
      </p>
      <p className="text-2xl text-stone-400 text-center font-matter-regular my-3">
        Choose the perfect plan to scale, save and maximize value.
      </p>
      {/* main row */}
      <div className="-mx-10 my-10 flex">
        {/* col-1 */}
        <div className="flex-1 bg-[#f7f7f7] rounded-r-3xl p-7  ">
          <div className="flex flex-col justify-between h-full">
            <p className="text-4xl tracking-tight font-matter-medium ">
              Basic Plan <br />{" "}
              <p className="text-lg font-matter-regular text-stone-400  leading-tight pt-4">
                Essential features at no cost to <br /> start your journey.
              </p>
            </p>
            <div>
              <p className="text-5xl font-matter-medium">Free</p>
              <button className="text-white font-matter-regular text-xl bg-black px-8 py-3 my-5 rounded-full">
                Start a Project
              </button>
            </div>
            <div>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Advanced business tools</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Enhanced platform integrations</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span> Priority customer support</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Smart data insights</span>
              </p>
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="flex-2 flex justify-between bg-[#fff6e9] rounded-3xl p-7 mx-8">
          <div className="flex flex-col flex-1 justify-between">
            <p className="text-4xl tracking-tight font-matter-medium ">
              Pro Plan <br />{" "}
              <p className="text-lg font-matter-light text-stone-700  leading-tight pt-4">
                Unlock premium tools and <br /> features to boost business{" "}
                <br /> effecincy.
              </p>
            </p>
            <div>
              <p className="text-5xl font-matter-medium">
                $1,200
                <span className="text-xl font-matter-light text-stone-400">
                  /Month
                </span>
              </p>
              <button className="text-white font-matter-regular text-xl bg-black px-8 py-3 my-5 rounded-full">
                Start a Project
              </button>
            </div>
            <div>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Advanced business tools</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Enhanced platform integrations</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span> Priority customer support</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Smart data insights</span>
              </p>
            </div>
          </div>
          <img src={img} alt="img" className="w-3/6 rounded-xl flex-1" />
        </div>
        {/* col-3 */}
        <div className="flex-1 bg-[#f7f7f7] rounded-l-3xl p-7  ">
          <div className="flex flex-col justify-between h-full">
            <p className="text-4xl tracking-tight font-matter-medium ">
              Enterprise Plan <br />{" "}
              <p className="text-lg font-matter-regular text-stone-400  leading-tight pt-4">
                Scalable solutions tailored for <br /> growing enterprises.
              </p>
            </p>
            <div>
              <p className="text-5xl font-matter-medium">
                $3,400
                <span className="text-xl font-matter-light text-stone-400">
                  /Month
                </span>
              </p>
              <button className="text-white font-matter-regular text-xl bg-black px-8 py-3 my-5 rounded-full">
                Start a Project
              </button>
            </div>
            <div>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Advanced business tools</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Enhanced platform integrations</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span> Priority customer support</span>
              </p>
              <p className="font-matter-light text-md my-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-black mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>Smart data insights</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
