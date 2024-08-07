import React from "react";
import img14 from "../../assets/img14.svg";
const Card4 = () => {
  return (
    <div className="flex flex-col bg-slate-900">
      <div className="flex flex-col justify-center items-center py-16 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className=" w-full max-w-[1342px]  max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col md:p-8 text-stone-300 max-md:max-w-full">
                <div className="self-start text-5xl font-lato md:text-13xl font-medium tracking-tighter leading-10 max-md:max-w-full pb-4">
                  Customers expect the best possible experience
                </div>
                <div className="flex flex-col pl-1.5  text-xl tracking-normal leading-8 max-md:max-w-full">
                  <div className="flex shrink-0 h-1 bg-blue-500 w-[25px]" />
                  <div className=" max-md:max-w-full font-lato text-2xl pt-6">
                    Markets and business models have shifted, and so have the
                    expectations of customers—for sustainability, accessibility,
                    versatility—whether they are personal, SMB or enterprise
                    users. There is a window of opportunity for CSPs to digitize
                    their businesses in a way that delights their customers and
                    employees while enabling them to reduce their operating
                    expenses and improve their margins.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={img14}
                className="object-contain grow w-full rounded-xl aspect-[1.18] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
