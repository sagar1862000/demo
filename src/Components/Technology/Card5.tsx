import React from 'react'
import img2 from '../../assets/Technology/img2.svg'
const Card5 = () => {
  return (
    <div className="flex sm:flex-col md:flex-row gap-5 bg-[#E4DFDF] p-8 justify-center justify-items-center place-content-center">
      <div className="flex py-12 flex-col-reverse mx-auto sm:text-center md:text-start justify-items-center justify-center place-content-center md:flex-row  w-5/6 gap-5">
        <div className="flex mx-auto flex-col items-center pt-1.5 min-w-[240px] w-[664px] max-md:max-w-full">
          <div className="flex shrink-0 w-8 h-1 bg-blue-400" />
          <div className="font-lato text-4xl md:text-13xl text-3xl font-medium tracking-tighter leading-10 text-slate-900 max-md:max-w-full">
            A transformed digital core enables industry leadership
          </div>
          <div className=" py-8 font-lato  self-stretch text-2xl tracking-normal leading-8 text-slate-900 max-md:mt-10 max-md:max-w-full">
            Connectivity is the backbone of the business, but it’s also the
            reinvention within a CSP opens doors for other businesses to
            reinvent as well. When CSPs invest in their own digital core with a
            standardized, open architecture, they create a new business
            opportunity that enables other companies to reach their own new
            performance frontier.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet={img2}
          className="object-contain rounded-xl aspect-[1.18] min-w-[240px] w-[654px] max-md:max-w-full"
        />
      </div>
    </div>
  )
}

export default Card5