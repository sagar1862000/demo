import React from "react";
import img24 from "../../assets/img24.svg";
import img25 from "../../assets/img25.svg";
import img26 from "../../assets/img26.svg";
import img27 from "../../assets/img27.svg";
import img28 from "../../assets/img28.svg";
import img29 from "../../assets/img29.svg";

const Card3 = () => {
  return (
    <div className="flex flex-col w-screen bg-slate-900 rounded-none">
      <img
        loading="lazy"
        srcSet={img24}
        className="object-contain w-screen "
      />
      <div className="flex z-10 flex-col justify-center items-center self-center px-16 py-5  md:mt-[-250px] max-w-full bg-white rounded-3xl w-5/6 max-md:px-5">
        <div className="flex flex-wrap gap-8 items-start max-w-full w-[1021px]">
          <div className="flex flex-col grow shrink min-w-[240px] w-[378px] max-md:max-w-full">
            <div className="flex flex-col w-full max-w-[472px] max-md:max-w-full">
              <div className="flex text-sm text-gray-800 w-[68px]">
                <div className="flex shrink-0 w-1 h-[23px]" />
                <div className="gap-2.5 self-stretch px-2 py-1 bg-gray-200 bg-opacity-50">
                  Why Us
                </div>
              </div>
              <div className="flex flex-col mt-3 w-full">
                <div className="text-4xl font-semibold text-gray-800 max-md:max-w-full">
                  We provide full range global logistics solution
                </div>
                <div className="mt-3 text-base font-medium leading-6 text-slate-500 max-md:max-w-full">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 max-w-full text-2xl text-gray-800 w-[325px]">
              <div className="flex gap-4 items-center max-w-full w-[265px]">
                <img
                  loading="lazy"
                  srcSet={img28}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[58px]"
                />
                <div className="self-stretch my-auto">Delivery on Time</div>
              </div>
              <div className="flex gap-4 items-center mt-6 w-full">
                <img
                  loading="lazy"
                  srcSet={img29}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[58px]"
                />
                <div className="self-stretch my-auto">
                  Optimized Travel Cost
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink min-w-[240px] w-[424px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet={img27}
              className="object-contain w-full aspect-[1.12] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
