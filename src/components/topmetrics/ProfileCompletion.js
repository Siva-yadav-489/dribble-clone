import React from "react";

const ProfileCompletion = () => {
  return (
    <div
      className="grid grid-cols-2 gap-3 max-w-fit justify-start px-4 items-center bg-white/50 backdrop-opacity-10
 py-4  rounded-3xl place-self-start"
    >
      <p className="text-lg font-matter-medium  ">Profile Completion</p>
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
      <p className="text-2xl font-matter-semibold">87%</p>
      <button className="bg-white py-2 px-5 text-xs mt-2 text-stone-400 rounded-full font-matter-regular">
        You're Almost there
      </button>
      <p className="col-span-2 bg-white rounded-full text-xs flex leading-tight ">
        <p className="text-xs bg-[#03a43f] rounded-full mx-[0.1rem]  w-[40%]">
          &nbsp;
        </p>
        <p className="text-xs bg-[#1977f0] rounded-full mx-[0.1rem]  w-[30%]">
          &nbsp;
        </p>
        <p className="text-xs bg-[#f36602] rounded-full mx-[0.1rem]  w-[15%]">
          &nbsp;
        </p>
        <p className="text-xs  rounded-full mx-[0.1rem]  w-[15%]">&nbsp;</p>
      </p>
      <p className="col-span-2  text-xs flex leading-tight ">
        <p className="text-[0.5rem] mx-[0.1rem]   w-[40%]">Basic Information</p>
        <p className="text-[0.5rem] mx-[0.1rem]   w-[30%]">
          Content & Activity
        </p>
        <p className="text-[0.5rem] mx-[0.1rem]   w-[15%]">Social Links</p>
        <p className="text-[0.5rem] mx-[0.1rem] text-stone-400   w-[15%]">
          Verification
        </p>
      </p>
      <p className="col-span-2 text-md font-matter-regular ">
        Secure Your Account Now!
      </p>
      <div className="col-span-2 flex justify-start">
        <button className="px-4 flex py-3 mr-2 bg-white rounded-full text-xs font-matter-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Verify By Email
        </button>
        <button className="px-4 flex py-3 mr-2 bg-white rounded-full text-xs font-matter-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          Enable 2FA
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;
