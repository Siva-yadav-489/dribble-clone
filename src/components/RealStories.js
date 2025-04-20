import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import img from "../girl-img.webp-removebg-preview.png";

const RealStories = () => {
  return (
    <div className="flex  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#f46a006d] via-sky-100 to-sky-100 w-[97%] mx-auto  pt-10 px-10 my-10 rounded-[4rem]">
      {/* col-1 */}
      <div className=" flex-1 flex flex-col justify-between pb-10">
        {/* top half */}
        <div>
          <p className="text-xl text-start text-amber-500 font-matter-medium">
            REAL STORIES
          </p>
          <p className="text-5xl text-start my-3 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
            Real People, Real Impact
          </p>
          <p className="text-2xl text-stone-400 text-start font-matter-regular my-3">
            Authentic stories of transformation driving <br /> meaningful change
            globally.
          </p>
        </div>
        {/* bottom half */}
        <div>
          <p className="flex border-2 border-stone-100 my-4 bg-white text-xl w-fit fonot-matter-light bg-opacity-40 py-3 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 text-amber-500 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span>Adavance career growth opportunities</span>
          </p>
          <p className="flex border-2 border-stone-100 my-4 bg-white text-xl w-fit fonot-matter-light bg-opacity-40 py-3 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 text-amber-500 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span>Communicate ideas pursuasively</span>
          </p>
          <p className="flex border-2 border-stone-100 my-4 bg-white text-xl w-fit fonot-matter-light bg-opacity-40 py-3 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 text-amber-500 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span>Develop strong networking abilities</span>
          </p>
          <p className="flex border-2 border-stone-100 my-4 bg-white text-xl w-fit fonot-matter-light bg-opacity-40 py-3 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 text-amber-500 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span>Boost professional confidence daily</span>
          </p>
        </div>
      </div>
      {/* col-2 */}
      <div className="flex-1 -ml-5 -mb-1">
        <img src={img} alt="girl" className="h-full w-full" />
      </div>
      {/* col-3 */}
      <div className="flex-1 flex flex-col justify-between items-end pb-10">
        <div className="grid grid-cols-2 w-fit p-3 items-center bg-[#f5f9fc] rounded-3xl ">
          <p className="text-lg font-matter-medium  ">Resource Utilization</p>
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
          <div className="flex justify-between col-span-2 py-3">
            <CircularProgressbar
              value={58}
              text={`58%`}
              styles={buildStyles({
                pathColor: "#ed8c2a",
                trailColor: "#eef2f5",
                textColor: "#a8a29e",
              })}
              className=" size-20"
            />
            <CircularProgressbar
              value={25}
              text={`25%`}
              styles={buildStyles({
                pathColor: "#0db147",
                trailColor: "#eef2f5",
                textColor: "#a8a29e",
              })}
              className=" size-20"
            />
            <CircularProgressbar
              value={12}
              text={`12%`}
              styles={buildStyles({
                pathColor: "#237ff7",
                trailColor: "#eef2f5",
                textColor: "#a8a29e",
              })}
              className=" size-20"
            />
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center my-2 w-full p-2 bg-white text-md font-matter-medium rounded-full">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3 text-[#ed8c2a] mr-2 bg-[#ed8c2a] rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="justify-start">Current Users</p>
              </div>
              <p>58%</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center my-2 w-full p-2 bg-white text-md font-matter-medium rounded-full">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3 text-[#0db147] mr-2 bg-[#0db147] rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="justify-start">User Retention</p>
              </div>
              <p>25%</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center my-2 w-full p-2 bg-white text-md font-matter-medium rounded-full">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3 text-[#237ff7] mr-2 bg-[#237ff7] rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="justify-start">Interaction Rate</p>
              </div>
              <p>12%</p>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-40 rounded-full flex p-2 w-fit">
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#ed8c2a]  ">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#0db147]  -ml-5">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#237ff7]  -ml-5">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-white  -ml-5">
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealStories;
