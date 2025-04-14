import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 mx-10">
      <p className="font-matter-regular text-3xl tracking-tight">
        Cogni<span className="font-matter-medium ">AI</span>
      </p>
      <div className="bg-stone-50 rounded-full flex items-center  ">
        <button className="text-md text-white px-9 bg-[#f46800] rounded-full py-3 font-matter-regular">
          Home
        </button>
        <button className="text-md  px-7 font-matter-light">Work</button>
        <button className="text-md  px-7 font-matter-light">Expertise</button>
        <button className="text-md  px-7 font-matter-light">Pricing</button>
        <button className="text-md  px-7 font-matter-light">Testimonial</button>
      </div>
      <button className="text-md py-3 px-9 bg-black text-white rounded-full font-matter-light">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
