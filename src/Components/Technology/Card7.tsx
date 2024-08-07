import React from "react";
import img3 from "../..//assets/Technology/Img3.svg";
import img4 from "../../assets/Technology/img4.svg";
import img5 from "../../assets/Technology/img5.svg";
import img6 from "../../assets/Technology/img6.svg";
const Card7 = () => {
  const NewsArticals = [
    {
      Img: img3,
      Date: "April 13/ 2024",
      Author: "Miranda Doe",
      Field: "Business",
      Title: "Popular Email Marketing Techniques 2022",
      Description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.",
    },
    {
      Img: img4,
      Date: "June 18/ 2024",
      Author: "Miranda Doe",
      Field: "Business",
      Title: "Popular Email Marketing Techniques 2022",
      Description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.",
    },
  ];

  return (
    <div className="flex flex-col my-8">
      <div className="flex justify-between items-center w-full px-9 ">
        <div className="self-stretch my-auto font-Poppins text-4xl font-bold leading-none text-neutral-700">
          Related News
        </div>
        <div className="self-stretch px-11 py-3 my-auto text-lg font-extrabold font-lato text-center text-white bg-[#5498FE] rounded-[12px]">
          More News
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-9 items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
        {NewsArticals.map((Artical, index) => (
          <div
            key={index}
            className="grid grid-col-2 grow shrink min-w-[240px] w-[474px] max-md:max-w-full"
          >
            <div className="flex flex-col w-full text-lg text-center max-w-[592px] max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={Artical.Img}
                className="object-contain"
              />
              <div className="grid grid-cols-3 font-inter bg-white items-center w-full max-md:max-w-full">
                <div className="gap-2.5 self-stretch py-3 my-auto font-semibold text-white bg-blue-800 bg-opacity-90 max-md:px-5">
                  {Artical.Date}
                </div>
                <div className="flex relative flex-row place-content-center gap-2 self-stretch py-3 border-solid border-[#2D9E82] border-r-2">
                    <img
                      loading="lazy"
                      srcSet={img5}
                      className="object-contain"
                    />
                  <div>{Artical.Author}</div>
                </div>
                <div className="flex relative flex-row gap-2 place-content-center self-stretch py-3 ">
                <img
                      loading="lazy"
                      srcSet={img6}
                      className="object-contain"
                    />
                  <div>{Artical.Field}</div>
                </div>
              </div>
              <div className="flex flex-col text-left mt-5 max-w-full w-[567px]">
                <div className="text-5xl font-Poppins font-bold leading-10 text-[#37393F] max-md:max-w-full">
                  {Artical.Title}
                </div>
                <div className="flex flex-col font-inter mt-3.5 w-full text-mini">
                  <div className="leading-7  text-zinc-500 max-md:max-w-full">
                    {Artical.Description}
                  </div>
                  <div className="mt-2 font-semibold text-[#6B77E5] cursor-pointer">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card7;
