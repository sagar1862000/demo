import React from 'react'
import img15 from '../../assets/img15.svg'

const Card6 = () => {
  return (
    <div className="flex flex-col bg-slate-900">
    <div className="flex flex-col justify-center items-center px-20 py-12 w-full max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={img15}
        className="object-contain w-full rounded-xl aspect-[1.78] max-w-[1260px] max-md:max-w-full"
      />
    </div>
  </div>
  )
}

export default Card6