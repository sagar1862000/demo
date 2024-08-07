import React from "react";

const Card8 = () => {
  return (
    <div className="flex flex-col text-blue-300 font-Poppins bg-slate-900">
      <div className="flex flex-col items-start px-32 py-6 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="text-4xl font-medium tracking-widest leading-relaxed">
          GET IN TOUCH
        </div>
        <div className="flex shrink-0 my-3 h-[3px] bg-blue-300 w-[100px] md:my-5" />
        <div className="flex-auto mb-6 md:mb-12 text-9xl-3 max-md:max-w-full max-md:text-4xl">
          Let's talk about your next project
          <br />
          How can we help?
        </div>

        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex gap-4 flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-start uppercase max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14  text-lg leading-loose border-solid border-b-2 text-white placeholder-white px-4 bg-transparent"
                  placeholder="Your Name*"
                />
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14  text-lg leading-loose border-solid border-b-2 text-white placeholder-white px-4 bg-transparent"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-2 uppercase whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="email"
                  className="w-full h-14  text-lg leading-loose border-solid border-b-2 text-white placeholder-white px-4 bg-transparent"
                  placeholder="Company*"
                />
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14  text-lg leading-loose border-solid border-b-2 text-white placeholder-white px-4 bg-transparent"
                  placeholder="Job Title*"
                />
              </div>
            </div>
            <div className="self-start bg-[#1C4CBF] px-5 py-3 text-mini  font-normal tracking-widest font-Poppins leading-none text-center text-white uppercase whitespace-nowrap rounded-3xl max-md:px-5 cursor-pointer">
              Submit
            </div>
          </div>
        </div>
        <div className="mt-11 text-base text-stone-300 max-md:mt-10 max-md:max-w-full">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
};

export default Card8;
