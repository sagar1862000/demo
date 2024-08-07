import React from "react";

const Card5 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 pr-40 pl-40 text-white bg-slate-900 max-md:px-5 max-md:py-24">
      <div className="flex flex-col items-center max-w-full w-11/12">
        <div className="flex flex-col items-center w-full gap-16">
          <div className="flex flex-col items-center max-w-full w-[765px]">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="max-w-full text-center text-13xl font-semibold  max-md:max-w-full md:text-35xl font-Rubik">
                Get in touch with us
              </div>
              <div className="text-2xl md:text-4xl font-medium leading-9 text-center max-md:max-w-full font-lato">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/4 max-md:ml-0 max-md:w-full">
            <div className="flex gap-4 flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-start uppercase max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                  <input
                    type="text"
                    className="w-full h-14  text-lg leading-loose border-solid border-2 text-white placeholder-white px-4 bg-transparent"
                    placeholder="Your Name*"
                  />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                  <input
                    type="text"
                    className="w-full h-14  text-lg leading-loose border-solid border-2 text-white placeholder-white px-4 bg-transparent"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-5 items-start mt-2 uppercase whitespace-nowrap max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                  <input
                    type="email"
                    className="w-full h-14  text-lg leading-loose border-solid border-2 text-white placeholder-white px-4 bg-transparent"
                    placeholder="Phone No*"
                  />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                  <input
                    type="text"
                    className="w-full h-14  text-lg leading-loose border-solid border-2 text-white placeholder-white px-4 bg-transparent"
                    placeholder="City*"
                  />
                </div>
              </div>
              <div className="overflow-hidden text-xs leading-loose uppercase whitespace-nowrap text-neutral-500 max-md:pr-5 max-md:max-w-full">
                <textarea
                  className="w-full  text-lg leading-loose border-solid border-2 h-32 text-white placeholder-white px-4 bg-transparent"
                  placeholder="Your Message"
                />
              </div>
              <div className="self-center px-14 py-3 text-5xl border-solid border-2 font-semibold tracking-widest leading-none text-center text-white uppercase whitespace-nowrap rounded-3xl max-md:px-5 bg-transparent cursor-pointer">
                Submit Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
