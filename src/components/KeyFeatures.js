import React from "react";

const KeyFeatures = () => {
  return (
    <div className=" mx-10 flex flex-col justify-center">
      <p className="text-xl text-center text-amber-500 font-matter-medium">
        KEY FEATURES
      </p>
      <p className="text-5xl text-center my-3 font-matter-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 inline-block">
        Unlock Success with Actionable <br /> Performance Metrics
      </p>
      <p className="text-2xl text-stone-400 text-center font-matter-regular my-3">
        Track, analyse and optimize data to improve peformance and drive
        success.
      </p>
      <div className="grid grid-flow-col grid-rows-2 gap-7 my-8">
        <div className=" bg-[#f7f7f7]  p-10 w-full h-full   rounded-3xl ">
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
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
          <p className="text-3xl font-matter-medium pt-16">
            Predictive Analysis
          </p>
          <p className="text-lg font-matter-regular text-stone-400">
            Forecast Trends with AI driven
            <br />
            insights.
          </p>
        </div>
        <div className=" bg-[#f7f7f7]  p-10 w-full h-full   rounded-3xl ">
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
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          <p className="text-3xl font-matter-medium pt-16">
            Real-Time Reporting
          </p>
          <p className="text-lg font-matter-regular text-stone-400">
            Interactive dashboards for better
            <br />
            decision-making.
          </p>
        </div>
        <div className=" bg-[#fff6e9]  p-10 pt-20 w-full h-full row-span-2  rounded-3xl ">
          <div className="bg-white rounded-3xl py-5 px-10 h-[70%] w-[85%] place-self-center ring-[1.5rem] ring-[#fffaf0]">
            <p className="flex text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-2 my-2 bg-stone-300 mr-2 rounded-full text-stone-300 "
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-2 my-2 bg-stone-300 mr-2 rounded-full text-stone-300 "
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-2 my-2 bg-stone-300 mr-2 rounded-full text-stone-300 "
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <p className="w-full h-2 rounded-full mt-7 mb-4 bg-gradient-to-r from-[#feaf68] to-[#f27418]">
              &nbsp;
            </p>
            <p className="w-full h-8 rounded-full  bg-stone-200 ">&nbsp;</p>
            <div className=" rounded-full flex bg-stone-100 my-4 text-sm w-fit align-middle font-matter-light">
              <button className="text-white py-2 px-3  bg-[#f27418] rounded-full">
                News Upload
              </button>
              <button className="py-2 px-3">Trending</button>
            </div>
            <div className="flex bg-[#f7f7f7]  p-2 w-full items-center mb-3 justify-around  rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 p-5 box-content bg-white mx-2 rounded-full "
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <p className="font-matter-regular leading-tight ">
                Content Refresh Alert <br />{" "}
                <span className="text-xs text-stone-400 font-matter-light leading-tight">
                  Post fresh content,,share insights and <br />
                  stay active. Consistency is key.
                </span>
              </p>
              <button className="bg-white rounded-full text-xs font-matter-light text-stone-600 px-2 py-1">
                20MB
              </button>
            </div>
            <div className="flex bg-[#f7f7f7]  p-2 w-full items-center mb-3 justify-around  rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 p-5 box-content bg-white mx-2 rounded-full "
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <p className="font-matter-regular leading-tight ">
                Content Refresh Alert <br />{" "}
                <span className="text-xs text-stone-400 font-matter-light leading-tight">
                  hare valuable content, post consistently
                  <br />
                  and keep your audience coming back.
                </span>
              </p>
              <button className="bg-white rounded-full text-xs font-matter-light text-stone-600 px-2 py-1">
                24MB
              </button>
            </div>
          </div>
          <p className="text-3xl font-matter-medium pt-16">
            Automated Data Processing
          </p>
          <p className="text-lg font-matter-regular text-stone-600">
            AI intelligently cleans, structures and analyzes vast
            <br />
            amounts of raw data, transforming it into meaningful <br />
            insights for informed decision-making.
          </p>
        </div>
        <div className=" bg-[#f7f7f7]  p-10 w-full h-full   rounded-3xl ">
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
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>

          <p className="text-3xl font-matter-medium pt-16">
            No-Code Simplicity
          </p>
          <p className="text-lg font-matter-regular text-stone-400">
            Designed forbusiness users, not
            <br />
            just for data scientists.
          </p>
        </div>
        <div className=" bg-[#f7f7f7]  p-10 w-full h-full   rounded-3xl ">
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
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
          <p className="text-3xl font-matter-medium pt-16">
            Seamless Integrations
          </p>
          <p className="text-lg font-matter-regular text-stone-400">
            Connect with your CRM, <br />
            eCommerce and databases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
