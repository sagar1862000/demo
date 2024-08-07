import * as React from "react";

function MyComponent() {
  return (
    <div className="rounded-none  bg-[#BCBCBC] flex place-content-center ">
      <div className="flex gap-5 max-md:flex-col w-3/4 place-content-center py-24  ">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10">
            <div className=" text-5xl md:text-24xl font-bold leading-[70px] font-roboto ">
              Request for services
            </div>
            <div className="mt-16 text-lg md:text-5xl leading-9 max-md:mt-10 font-lato ">
              Find out more about how we can help your organization navigate its
              next. Let us know your areas of interest so that we can serve you
              better.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-4 flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-start uppercase max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-2 uppercase whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="email"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start basis-0 w-fit max-md:pr-5">
                <input
                  type="text"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-2 uppercase max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start flex-1  basis-0 w-fit ">
                <input
                  type="text"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="Job Title*"
                />
              </div>
              <div className="flex flex-grow text-xs leading-loose shrink-0 basis-0 flex-1 max-md:pr-5  w-fit">
                <input
                  type="tel"
                  className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                  placeholder="Phone*"
                />
              </div>
            </div>
            <div className="overflow-hidden text-xs leading-loose uppercase whitespace-nowrap text-neutral-500 max-md:pr-5 max-md:max-w-full">
              <textarea
                className="w-full h-14 border-b-2 text-xs leading-loose text-neutral-500"
                placeholder="Message"
              />
            </div>
            <div className="flex max-w-full w-full">
              <div className="font-lato text-5xl flex-auto  leading-normal text-black">
                Opt in for marketing communication <span className="ml-1 font-lato text-5xl font-medium leading-loose text-[#5498FE]">Privacy Statement</span>
              </div>
            </div>
            <div className="self-start px-14 py-6 mt-6 text-5xl font-black tracking-widest leading-none text-center text-white uppercase whitespace-nowrap rounded-3xl max-md:px-5 bg-blue-500 cursor-pointer">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
