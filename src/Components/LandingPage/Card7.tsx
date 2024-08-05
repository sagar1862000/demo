import React from 'react'

export const Card7 = () => {
  return (
    <div className="bg-white max-w-full p-4 my-4 flex justify-center items-center ">
    <div className="flex flex-col w-full max-md:max-w-full ">
      <div className="w-full text-9xl-3 leading-none text-center text-black max-md:max-w-full">
        Our Technology & Digital Capabilities
      </div>
      <div className="flex flex-col mt-5 w-full text-black max-md:max-w-full">
        <div className="flex flex-col justify-center items-center py-1 w-full text-3xl leading-none max-md:max-w-full">
          <div className="px-0.5 py-1.5 max-w-full text-2xl ">
            Advanced Analytics
          </div>
        </div>
        <div className=" text-xl max-md:max-w-full px-24">
          Data is no longer nice to have - it's essential for doing business.
          We help you harness its power with strategy, capability building, and
          analytics use case delivery to make better, faster decisions.
          <br />
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 w-full text-black max-md:max-w-full">
        <div className="pt-3 pb-1 max-w-full text-3xl leading-none text-2xl ">
          Enterprise Technology
        </div>
        <div className="mt-6 text-xl leading-9 max-md:max-w-full px-24">
          Whatever your digital ambition, an optimized technology
          infrastructure is table stakes. We help you modernize your tech
          strategy architecture, and systems to support your business goals.
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center py-1 w-full max-md:max-w-full">
          <div className="flex max-w-full min-h-[9px] w-[313px]" />
        </div>
      </div>
    </div>
  </div>
  )
}
