import React from "react";
import img13 from "../../assets/img13.svg";
const Card5 = () => {
  return (
    <div className="flex flex-col md:flex-row px-44 max-md:px-5 bg-[#BCBCBC]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-md:max-w-full">
        <div className="flex flex-col self-stretch pt-12 my-auto rounded-xl max-w-[1384px] min-w-[240px] w-[692px] max-md:max-w-full">
          <div className="flex flex-col pr-3 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[703px]">
              <div className="flex overflow-hidden flex-col w-full rounded-[40px_40px_0px_40px]  max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={img13}
                  className="object-contain w-full aspect-[1.24] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-stretch px-3 pt-12 my-auto max-w-[1384px] min-w-[240px] text-slate-900 w-[577px] max-md:max-w-full">
          <div className="flex flex-col pb-14 w-full max-md:max-w-full">
            <div className="text-2xl font-semibold leading-none text-blue-400 max-md:max-w-full">
              Customer stories
            </div>
            <div className="mt-6 text-5xl font-bold tracking-tight leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Adobe Experience Cloud migration: Web development and A/B testing.
            </div>
            <div className="mt-8 text-xl leading-8 max-md:max-w-full">
              ZeddLabz experts helped the Microsoft 365 team migrate to Adobe
              Experience Cloud. Find out how we helped deliver tailored
              functionality, speedier modifications, and first-class customer
              experiences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
