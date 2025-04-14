import React from "react";
import IntTools from "./IntTools.js";
import ProfileCompletion from "./ProfileCompletion.js";
import UserTrends from "./UserTrends.js";
import Reminders from "./Reminders.js";

const Grid = () => {
  return (
    <div className="grid grid-cols-2 items-start place-items-end gap-4 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#f46a006d] via-sky-100 to-sky-100 w-[97%] mx-auto pt-20 pb-5 my-10 rounded-t-[4rem]">
      <IntTools />
      <ProfileCompletion />
      <UserTrends />
      <Reminders />
    </div>
  );
};

export default Grid;
