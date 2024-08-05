import React from 'react'
import img6 from '../../assets/img6.svg'
const Card5 = () => {
  return (
    <div className="flex justify-center items-center text-white bg-slate-900 min-h-[1048px]">
    <div className="flex flex-col items-start self-stretch pt-20 pb-14 my-auto w-[834px] max-md:max-w-full">
      <div className="flex flex-col items-start pl-16 w-full max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={img6}
          className="object-contain max-w-full aspect-[1.29] rounded-[32px] w-[703px]"
        />
        <div className="flex flex-wrap mt-8 max-w-full w-[703px]">
          <div className="flex flex-col px-3 max-w-[1384px] min-w-[240px] w-[692px]">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div style={{fontSize:'72px'}} className="w-full  fontWeight-bold font-lato tracking-tighter leading-[75px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Engage your digital
                <br />
                transformation.
              </div>
              <div className="mt-6 w-full text-xl font-lato leading-8 max-md:max-w-full">
                The right technology partner gets you where your customers
                expect you to
                <br />
                be.
              </div>
              <div className="flex flex-col items-start mt-6 w-full text-lg font-extrabold leading-none text-center max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[302px]">
                  <div className="px-14 font-lato py-6 rounded-2xl border-white border-solid border-[3px] max-md:px-5">
                    Connect with us today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card5