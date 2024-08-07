import React from "react";
import img39 from "../../assets/img39.svg";
import img40 from "../../assets/img40.svg";
import img41 from "../../assets/img41.svg";
import img42 from "../../assets/img42.svg";

const Card6 = () => {
  const Images = [img39, img40, img41, img42];
  return (
    <div className="flex flex-col text-xl text-white bg-slate-900 uppercase tracking-[11.3px]">
      <div className="grid grid-cols-4 px-12 gap-0 w-full">
        {Images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            srcSet={image}
            className="object-cover w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Card6;
