import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 sm:mx-16">
      <p className="font-matter-regular text-4xl tracking-tight">
        Cogni<span className="font-matter-medium ">AI</span>
      </p>
      <div className="bg-stone-50 rounded-full flex items-center max-[1050px]:hidden ">
        <button className="text-lg text-white px-9 bg-[#f46800] rounded-full py-3 font-matter-regular">
          Home
        </button>
        <button className="text-lg text-stone-700  px-7 font-matter-medium">
          Work
        </button>
        <button className="text-lg text-stone-700  px-7 font-matter-medium">
          Expertise
        </button>
        <button className="text-lg text-stone-700  px-7 font-matter-medium">
          Pricing
        </button>
        <button className="text-lg text-stone-700  px-7 font-matter-medium">
          Testimonial
        </button>
      </div>
      <button className="text-lg py-3 px-9 bg-black text-white rounded-full font-matter-light">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
