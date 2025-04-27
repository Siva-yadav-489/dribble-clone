import React from "react";

const IntTools = () => {
  return (
    <div
      className="grid grid-cols-2 gap-3 max-sm:col-span-2 max-w-fit justify-start px-4 items-center bg-white/50 backdrop-opacity-10
 py-4  rounded-3xl "
    >
      <p className="text-lg font-matter-medium  ">Integration Tools</p>
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

      <div className="flex max-lg:col-span-2 max-lg:justify-center bg-white  p-2 items-center justify-start gap-3 rounded-full">
        <img
          width="32"
          height="32"
          className="bg-stone-100 rounded-full p-2 box-content"
          src="https://img.icons8.com/fluency/48/gmail-new.png"
          alt="gmail-new"
        />
        <p className="font-matter-regular  w-full">
          Gmail <br />{" "}
          <span className="text-xs text-stone-400 font-matter-light">
            Emails Sent:1,200
          </span>
        </p>
        <button className="bg-[#03a638] rounded-full text-[0.6rem] font-matter-light text-white px-2 py-1">
          +8%
        </button>
      </div>
      <div className="flex max-lg:col-span-2 max-lg:justify-center bg-white  p-2 items-center justify-start gap-3 rounded-full">
        <img
          width="32"
          height="32"
          className="bg-stone-100 rounded-full p-2 box-content"
          src="https://img.icons8.com/color/32/facebook-new.png"
          alt="facebook-new"
        />
        <p className="font-matter-regular  w-full">
          Facebook <br />{" "}
          <span className="text-xs text-stone-400 font-matter-light">
            Ad CTR:4.2%
          </span>
        </p>
        <button className="bg-[#03a638] rounded-full text-[0.6rem] font-matter-light text-white px-2 py-1">
          +8%
        </button>
      </div>
      <div className="flex max-lg:col-span-2 max-lg:justify-center bg-white  p-2 items-center justify-start gap-3 rounded-full">
        <img
          width="32"
          height="32"
          className="bg-stone-100 rounded-full p-2 box-content"
          src="https://img.icons8.com/color/32/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
        <p className="font-matter-regular  w-full">
          Instagram <br />{" "}
          <span className="text-xs text-stone-400 font-matter-light">
            Profile Visits:18,500
          </span>
        </p>
        <button className="bg-[#03a638] rounded-full text-[0.6rem] font-matter-light text-white px-2 py-1">
          +8%
        </button>
      </div>
      <div className="flex max-lg:col-span-2 max-lg:justify-center bg-white  p-2 items-center justify-start gap-3 rounded-full">
        <img
          width="32"
          height="32"
          className="bg-stone-100 rounded-full p-2 box-content"
          src="https://img.icons8.com/ios-glyphs/32/twitterx--v1.png"
          alt="twitterx--v1"
        />
        <p className="font-matter-regular  w-full">
          X(twitter) <br />{" "}
          <span className="text-xs text-stone-400 font-matter-light">
            Tweets Posted:150
          </span>
        </p>
        <button className="bg-[#03a638] rounded-full text-[0.6rem] font-matter-light text-white px-2 py-1">
          +8%
        </button>
      </div>
    </div>
  );
};

export default IntTools;
