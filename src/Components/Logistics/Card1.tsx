import React, { useEffect } from "react";
import HeroVideo from "../../assets/transport.mp4";
const Card1 = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg h-full w-full object-cover"
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" gap-4 absolute inset-0 grid place-content-center justify-self-center justify-center items-center w-3/4 ">
        <h1 className="text-white text-31xl font-bold text-center">
          Empowering Your Business with Tailored Logistics Solutions
        </h1>
        <p className="text-white text-4xl font-lato text-center px-16">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>
      </div>
    </div>
  );
};

export default Card1;
