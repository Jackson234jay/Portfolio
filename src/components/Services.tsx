import React from "react";

const Services = () => {
  return (
    <div
      id="Services"
      className="bg-purple-300 p-20 flex items-center flex-col justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] outline-white select-none text cursor-pointer  font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        SERVICES
      </h1>
      <div className="grid lg:grid-cols-4 select-none md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2
          data-aos="fade-up"
          className="text-[26px] cursor-pointer flex items-center bg-fuchsia-700 justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-white b_glow"
        >
          HTML
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] cursor-pointer flex items-center bg-fuchsia-700 justify-center font-semibold text-white border-white rounded-3xl h-36 w-44 border-2  b_glow"
        >
          CSS
        </h2>
        <h2
          data-aos="fade-up"
          className="text-[26px] cursor-pointer flex items-center bg-fuchsia-700 justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2  b_glow"
        >
          Typescript
        </h2>
        <h2
          data-aos="fade-down"
          className="text-[26px] cursor-pointer flex items-center bg-fuchsia-700 justify-center font-semibold text-white rounded-3xl h-36 w-44 border-2 border-white b_glow"
        >
          React
        </h2>
      </div>
    </div>
  );
};

export default Services;
