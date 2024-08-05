import React from "react";
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import img5 from '../../assets/img5.svg'

const Card4 = () => {
  return (
    <div
      className={`w-full relative bg-white flex flex-row items-start justify-start pt-[99px] px-[62px] pb-[61.4px] box-border leading-[normal] tracking-[normal] text-left text-mini text-black font-lato mq450:pl-5 mq450:pr-5 mq450:box-border `}
    >
      <img
        className="h-full w-full !m-[0] absolute right-[0px] bottom-[-4.3px] left-[0px] max-w-full overflow-hidden object-cover"
        alt=""
        src={img3}
      />
      <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(36.5px)] rounded-xl bg-gray-600 flex flex-col items-start justify-start pt-[47px] pb-[85px] pl-[55px] pr-6 box-border gap-2 max-w-full z-[1] mq450:pt-[31px] mq450:pb-[55px] mq450:box-border mq700:pl-[27px] mq700:box-border">
        <div className="w-[132px] flex flex-row items-start justify-start py-0 px-px box-border">
          <div className="flex-1 relative tracking-[2.1px] leading-[24px] uppercase font-medium">
            Who we are
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[51px] pl-px pr-0 box-border max-w-full text-5xl text-mediumslateblue">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <b className="w-[482px] h-20 relative leading-[27px] flex items-center mb-10 shrink-0 max-w-full mq450:text-lgi mq450:leading-[22px]">
              <span className="w-full">
                <p className="[margin-block-start:0] [margin-block-end:7px]">
                  We build greater futures through innovation
                </p>
                <p className="m-0">and collective knowledge.</p>
              </span>
            </b>
            <div className="self-stretch relative text-mini tracking-[0.5px] leading-[18px] font-semibold text-gray-500 mt-[-20px]">
              <p className="[margin-block-start:0] [margin-block-end:2px]">
                ZeddLabz is an IT services, consulting and business solutions
                organization that has been
              </p>
              <p className="m-0">
                partnering with many of the world’s largest businesses in their
                transformation journeys 
              </p>
              <p className="m-0">for over 9 years.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[12.7px] text-mid-4">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[0.5px] leading-[32px]">
              Get to know us
            </div>
          </div>
          <img
            className="h-10 w-10 relative rounded-21xl"
            alt=""
            src={img5}
          />
        </div>
      </div>
    </div>
  );
};

export default Card4;
