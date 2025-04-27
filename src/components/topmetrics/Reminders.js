import React from "react";

const Reminders = () => {
  return (
    <div
      className="grid grid-cols-2 gap-3 max-sm:col-span-2 max-w-fit justify-start px-4 items-center bg-white/50 backdrop-opacity-10
 py-4  rounded-3xl place-self-start"
    >
      <p className="text-lg font-matter-medium  ">Reminders</p>
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
      <div className="col-span-2 bg-white rounded-2xl p-2">
        <p className="text-sm font-matter-regular flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-lime-600 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            Content refresh alert
            <br />{" "}
            <span className="text-xs text-stone-400 font-matter-light">
              Post frsh content, share insights and stay active, Consistency is
              key.
            </span>{" "}
          </p>
        </p>
      </div>
      <div className="col-span-2 bg-white rounded-2xl p-2">
        <p className="text-sm font-matter-regular flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 text-white border-2  rounded-full mr-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            Engagement Check-in
            <br />{" "}
            <span className="text-xs text-stone-400 font-matter-light">
              Reply to comments, interact with followers and spark conversations
              today.
            </span>{" "}
          </p>
        </p>
      </div>
      <div className="col-span-2 bg-white rounded-2xl p-2">
        <p className="text-sm font-matter-regular flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 text-white border-2  rounded-full mr-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            Analytics Review Day
            <br />{" "}
            <span className="text-xs text-stone-400 font-matter-light">
              Time to check your insights! Review your reach, impressions and
              growthto refine you.
            </span>{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Reminders;
