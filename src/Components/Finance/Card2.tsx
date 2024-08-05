import React from "react";
import img10 from "../../assets/img10.svg";
const Card2 = () => {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col bg-slate-900">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full mt-16 mx-2  ">
          <div className="flex flex-col items-start w-full text-stone-300 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col ml-3.5 max-w-full text-6xl font-bold leading-tight tracking-[2.25px] w-[330px] max-md:ml-2.5 max-md:text-4xl">
              <div className="text-4xl md:text-13xl font-poppins font-extrabold">
                OUR VIEW
              </div>
            </div>

            <div className=" flex flex-col items-start self-end mt-2 py-8 text-xl font-semibold leading-loose ">
              <div className="mb-2 text-2xl md:text-13xl">Challenges</div>
              <div>Customer experience</div>
              <div className="">New fintech market entrants</div>
              <div className="">Inefficient, manual business processes</div>
              <div className="">Simplify complex business processes </div>
              <div className="">Complex & rigid legacy systems</div>
              <div className="">Security & compliance (incl. AML, KYC)</div>
              <div className="mb-2 mt-12 text-4-xl md:text-13xl leading-none text-sky-500 max-md:mt-10 ">
                How We Help
              </div>
              <div className="self-stretch max-md:max-w-full">
                Standardized rapidly deployable infrastructure (PODs)
              </div>
              <div className="">Secure networking for 300+ branches</div>
              <div className="self-stretch  mr-12 max-md:mr-2.5 max-md:max-w-full">
                Account onboarding improvement with RPA
              </div>
              <div className="self-stretch mr-11 max-md:mr-2.5 max-md:max-w-full">
                Next-gen digital banking cloud environment
              </div>
              <div className="">Core banking application modernization</div>
              <div className="">IT audit trails to ensure compliance</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={img10}
            className="object-contain grow mt-28 w-full md:h-[100px] rounded-xl aspect-[0.68] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card2;
