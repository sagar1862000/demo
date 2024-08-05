import React from "react";

const Card7 = () => {
  return (
    <div className="rounded-none max-w-full bg-[#BCBCBC] grid place-content-center">
      <div className="flex gap-5 max-md:flex-col w-3/4 bg-slate-400 justify-self-center">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10">
            <div className="text-4xl font-medium leading-[70px]">
              Request for services
            </div>
            <div className="mt-16 text-2xl leading-9 max-md:mt-10">
              Find out more about how we can help your organization navigate its
              next. Let us know your areas of interest so that we can serve you
              better.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-start uppercase max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start py-5 pr-12 pl-3 bg-white basis-0 w-fit max-md:pr-5">
                {/* <div className="ml-16 text-xs leading-loose text-red-800 max-md:ml-2.5">
                  *
                </div> */}
                <div className="text-xs text-neutral-500">
                  First Name
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start py-5 pr-12 pl-2 bg-white basis-0 w-fit max-md:pr-5">
                <div className="ml-16 text-xs leading-loose text-red-800 max-md:ml-2.5">
                  *
                </div>
                <div className="text-xs leading-loose text-neutral-500">
                  Last Name
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-8 uppercase whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-col flex-1 grow shrink-0 items-start py-5 pr-12 pl-3.5 bg-white basis-0 w-fit max-md:pr-5">
                <div className="ml-9 text-xs leading-loose text-red-800 max-md:ml-2.5">
                  *
                </div>
                <div className="text-xs leading-loose text-neutral-500">
                  Email
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 items-start py-5 pr-12 pl-3 bg-white basis-0 w-fit max-md:pr-5">
                <div className="ml-16 text-xs leading-loose text-red-800 max-md:ml-2.5">
                  *
                </div>
                <div className="text-xs leading-loose text-neutral-500">
                  Company
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 items-start mt-7 uppercase max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 items-start py-5 pr-12 pl-3 bg-white basis-0 w-fit max-md:pr-5">
                <div className="ml-14 text-xs leading-loose text-red-800 max-md:ml-2.5">
                  *
                </div>
                <div className="text-xs leading-loose text-neutral-500">
                  Job Title
                </div>
              </div>
              <div className="grow px-2 py-5 text-xs leading-loose whitespace-nowrap bg-white text-neutral-500 w-fit max-md:pr-5">
                Phone
              </div>
            </div>
            <div className="overflow-hidden px-3 py-9 mt-8 text-xs leading-loose uppercase whitespace-nowrap bg-white text-neutral-500 max-md:pr-5 max-md:max-w-full">
              Message
            </div>
            {/* <div className="flex gap-2.5 mt-9 max-w-full w-[470px]">
              <div className="flex flex-col justify-center self-start px-0.5 py-1 rounded-3xl bg-white bg-opacity-70">
                <div className="flex flex-col items-start rounded-xl bg-white bg-opacity-30">
                  <div className="flex shrink-0 bg-white rounded-xl h-[18px] shadow-[0px_2px_2px_rgba(0,0,0,0.4)] w-[18px]" />
                </div>
              </div>
              <div className="flex-auto text-lg leading-normal text-black">
                Opt in for marketing communication{" "}
              </div>
              <div className="flex-auto text-lg font-medium leading-loose text-blue-400">
                Privacy Statement
              </div>
            </div> */}
            <div className="self-start px-14 py-6 mt-6 text-lg font-black tracking-widest leading-none text-center text-white uppercase whitespace-nowrap rounded-3xl max-md:px-5">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card7;
