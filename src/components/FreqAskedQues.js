import React from "react";

const FreqAskedQues = () => {
  return (
    <div className="flex items-start my-20 mx-16">
      <div className="flex-1">
        <p className="text-xl text-amber-500 font-matter-medium">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="text-5xl my-3 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
          Your Questions Answered-
          <br />
          Everything You Need
        </p>
        <p className="text-2xl text-stone-400 font-matter-regular my-3">
          Find clear answers to common questions
          <br />
          about our services and features.
        </p>
        <button className="text-lg font-matter-light bg-black rounded-full text-white py-4 px-7 my-3 place-self-end">
          See All FAQ's
        </button>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start  py-6 px-10 rounded-3xl bg-[#fff2e2]">
          <div className="text-3xl font-matter-medium ">
            What is CogniAI
            <br />
            <p className="text-xl font-matter-light text-stone-700 mt-3">
              Cognio Al is a powerful analytics platform that delivers Al-{" "}
              <br />
              driven insights, enabling businesses to optimize <br />
              performance, enhance efficiency, and make smarter, data- <br />
              backed decisions effortlessly.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-11 text-[#ec8d2f] mt-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center p-9 my-5 rounded-3xl bg-[#f9f9f9]">
          <p className="text-3xl font-matter-medium">
            What industries benefit from CogniAI?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 border p-2 box-content border-stone-300 rounded-full "
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center p-9 my-5 rounded-3xl bg-[#f9f9f9]">
          <p className="text-3xl font-matter-medium">
            Is my data secure with CogniAI?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 border p-2 box-content border-stone-300 rounded-full "
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center p-9 my-5 rounded-3xl bg-[#f9f9f9]">
          <p className="text-3xl font-matter-medium">
            What kind of support is available?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 border p-2 box-content border-stone-300 rounded-full "
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center p-9 my-5 rounded-3xl bg-[#f9f9f9]">
          <p className="text-3xl font-matter-medium">
            Does CogniAI offer a free trail?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 border p-2 box-content border-stone-300 rounded-full "
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FreqAskedQues;
