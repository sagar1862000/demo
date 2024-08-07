import React, { useEffect, useState } from "react";
import img15 from "../../assets/img15.svg";
import img16 from "../../assets/img16.svg";
import img17 from "../../assets/img17.svg";
import img18 from "../../assets/img18.svg";
import img19 from "../../assets/img19.svg";
import { Box } from "@mui/material";

const Card6 = () => {
  const [img, setImg] = useState(0);
  const Images = [img15, img19, img16, img17, img18];
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevSlide) => (prevSlide + 1) % Images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box className="relative w-full h-[800px] overflow-hidden">
    <Box
      className="absolute inset-0 flex"
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {Images.map((slide, index) => (
        <Box
          key={index}
          component="img"
          src={slide}
          alt={`Slide ${index + 1}`}
          sx = {{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: img === index ? 1 : 0,
          }}
        />
      ))}
    </Box>
  </Box>
  );
};

export default Card6;
