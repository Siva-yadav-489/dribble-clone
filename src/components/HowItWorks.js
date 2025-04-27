import React from "react";

const HowItWorks = () => {
  return (
    <div className=" my-20 mx-16 max-sm:mx-2">
      <p className="text-xl text-amber-500 font-matter-medium">HOW IT WORKS</p>
      <p className="text-5xl my-5 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
        Unlock the Power of Your Data <br /> with CogniAI
      </p>
      <div className="grid grid-cols-2 place-content-between gap-10 place-items-start items-center ">
        <p className="text-2xl max-sm:col-span-2 text-stone-400 font-matter-regular my-3">
          Organize tasks, track progress and achieve more-effortlessly.
        </p>
        <button className="text-lg max-sm:col-span-2 font-matter-light bg-black rounded-full text-white py-4 px-7 my-3 place-self-end">
          Try AI-Powered Analysis Today
        </button>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full h-full max-md:col-span-2 rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <p className="text-3xl font-matter-semibold pt-16">
            Upload & Connect Seamlessly
          </p>
          <p className="text-xl font-matter-regular text-stone-400">
            Easily import data from spreadsheets, databases and APIs <br />
            effortlessly for seamless integration and efficient workflows.
          </p>
        </div>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full h-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-3xl font-matter-semibold pt-16">
            AI-Driven Processing in Real-Time
          </p>
          <p className="text-xl font-matter-regular text-stone-400">
            No coding required! AI instantly cleans, analyzes and structures
            <br />
            your data for seamless organization.
          </p>
        </div>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full h-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>

          <p className="text-3xl font-matter-semibold pt-16">
            Gain Actionable Insights Instantly
          </p>
          <p className="text-xl font-matter-regular text-stone-400">
            Generate reports, visualize trends and detect patterns with AI-
            <br />
            powered analytics
          </p>
        </div>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full h-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>
          <p className="text-3xl font-matter-semibold pt-16">
            Make Smarter, Data-Driven Decisions
          </p>
          <p className="text-xl font-matter-regular text-stone-400">
            Use AI recommendations to optimize strategies, enhance
            <br />
            decion-making, boost effeciancy and drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
