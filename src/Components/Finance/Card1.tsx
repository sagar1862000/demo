import React from 'react'
import img9 from "../../assets/img9.svg";
const Card1 = () => {
  return (
    <div
      className="relative bg-cover bg-center place-content-center md:h-[500px]"
      style={{ backgroundImage: `url(${img9})` }}
    >
      <div className="relative z-10 text-white p-6 grid md:h-[500px] ">
        <div className="text-sm text-blue-300">Industries / Finance</div>
        <hr className="font-extrabold border-t-2 border-white w-full md:w-3/4 md:mt-[-20px]  lg:mt-[-35px]" />
          <h1 className="text-12xl font-bold text-center flex-col items-center justify-self-center justify-center w-3/4 md:text-35xl ">
            Unlocking Financial Efficiency Through Technology
          </h1>
        <p className=" bg-opacity-75 font-bold rounded grid place-content-center backdrop-blur-sm bg-[#28262633] text-lato text-4xl md:text-13xl text-center  justify-self-center ">
          Encapsulates the idea that leveraging technological innovations can
          enhance financial processes, streamline operations, and improve
          overall efficiency
        </p>
      </div>
    </div>
  )
}

export default Card1