import React, { useEffect, useState } from "react";
import img30 from "../../assets/img30.svg";
import img31 from '../../assets/img31.png'
import img32 from '../../assets/img32.svg'
import img33 from '../../assets/img33.svg'
import img34 from '../../assets/img34.svg'
import img35 from '../../assets/img35.svg'
import img36 from '../../assets/img36.svg'
import img37 from '../../assets/img37.svg'
import img38 from '../../assets/img38.svg'

const Card4 = () => {

    const Cards = [
        {Img:img32,Title:'Packaging Solutions',Description:'Warehouse Management'},
        {Img:img33,Title:'Contract Logistics',Description:'Road Transportation'},
        {Img:img34,Title:'Warehouse & Distribution',Description:'Large Warehouse'},
        {Img:img35,Title:'Specialized Transport',Description:'Ocean Transports'},
        {Img:img37,Title:'Liquid Transportation',Description:'Premium Tankers'},
        {Img:img38,Title:'Air Transport',Description:'Air Transports'},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Cards.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    const displayedCards = [
      Cards[currentIndex],
      Cards[(currentIndex + 1) % Cards.length],
      Cards[(currentIndex + 2) % Cards.length],
    ];
    
  

  return (
    <div className="flex flex-col font-medium  bg-slate-900">
      <div className="flex z-10 flex-col items-center py-24 w-full min-h-[638px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-5 items-start max-w-full w-[1334px]">
            {displayedCards.map((card,index)=>(
          <div className="flex flex-col grow shrink w-64 min-w-[240px]">
            <div className="flex relative flex-col items-start px-6 pt-80 pb-5 w-full aspect-[0.784] max-md:px-5 max-md:pt-24">
              <img
                loading="lazy"
                srcSet={card.Img}
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col mt-24">
                <div className="text-xl text-white">{card.Title}</div>
                <div className="mt-1 text-base leading-loose text-stone-300">
                  {card.Description}
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddd1a5c259782af3c14127e363ac5990bab25d7fa21897a88d22cd35b4eb8d55?apiKey=a68cd1a2320e4a76892ecf7626fb10cc&&apiKey=a68cd1a2320e4a76892ecf7626fb10cc"
          className="object-contain mt-16 aspect-[2.18] w-[97px] max-md:mt-10"
        />
      </div>
        <img loading="lazy" srcSet={img31} className=" mt-[-260px] " />
    </div>
  );
};

export default Card4;
