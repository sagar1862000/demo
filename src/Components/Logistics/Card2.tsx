import React from "react";
import img20 from "../../assets/img20.svg";
import img21 from "../../assets/img21.svg";
import img23 from "../../assets/img22.svg";
import img22 from "../../assets/img23.svg";
const Card2 = () => {
  const cards = [
    {
      Title: "Air Fright Services",
      Description:
        "Following the quality of our service thus having gained trust ofour many clients.",
      img: img20,
    },
    {
      Title: "Local Shipping Services",
      Description:
        "Following the quality of our service thus having gained trust ofour many clients.",
      img: img21,
    },
    {
      Title: "Sea Transport Services",
      Description:
        "Following the quality of our service thus having gained trust ofour many clients.",
      img: img22,
    },
    {
      Title: "Warehousing Services",
      Description:
        "Following the quality of our service thus having gained trust ofour many clients.",
      img: img23,
    },
  ];
  return (
    <div className=" flex flex-col gap-2 md:flex-row md:justify-center items-center h-fit w-screen bg-slate-900">
      <div className="flex flex-col text-white max-w-[534px] px-6">
        <div className="flex self-start text-sm">
          <div className="flex shrink-0 w-1 bg-blue-400 h-[50px]" />
          <div className="px-2.5 py-1 bg-gray-200 bg-opacity-50 font-Rubik text-9xl-3 ">
            What We Do
          </div>
        </div>
        <div className="mt-5 w-full text-24xl font-Rubik font-semibold max-md:max-w-full">
          Safe & Reliable Cargo Solutions
          <br />
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center px-4 w-full ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col grow shrink-0 min-w-[240px] md:w-1/2 w-full p-2"
          >
            <div className="flex gap-3.5 items-start mx-auto  w-4/5 p-4 rounded-lg ">
              <img
                loading="lazy"
                src={card.img}
                className="text-13xl text-white font-Rubik"
                alt={card.Title}
              />
              <div className="flex gap-6 ">
                {/* <div className="shrink-0 self-start w-px h-[105px]" /> */}
                <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                  <div className="text-13xl text-white font-Rubik">
                    {card.Title}
                  </div>
                  <div className="mt-3.5 text-xl font-medium leading-6 text-zinc-400 m-3/4 font-Krub">
                    {card.Description}
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

export default Card2;
