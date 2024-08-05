import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import img2 from "../../assets/img2.svg";
const Card3 = () => {
  return (
    <>
      <Box
        sx={{ width: "100%", textAlign: "center", backgroundColor: "#000033" }}
      >
        <AppBar position="relative" sx={{ backgroundColor: "#000033" }}>
          <Box
            sx={{
              justifyContent: "center",
              border: "1px solid #FFFFFF",
              display: "flex",

              height: "105px",
            }}
          >
            <Box
              flex={2}
              borderRight={"1px solid #FFFFFF"}
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "28.25px",
                  lineHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Discover the difference
              </Typography>
            </Box>
            <Box flex={1}></Box>
          </Box>
        </AppBar>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#000033",
            overflow: "hidden",
            "&:hover .gradient-overlay": {
              opacity: 1,
            },
          }}
        >
          <img
            src={img2}
            alt="Discover the difference"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              transition: "filter 0.3s ease",
            }}
          />
          <Box
            className="gradient-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column',
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))", // Gradient darkening effect
                opacity:0,
                gap:4
            }}
          >
            <Typography
              sx={{
                paddingLeft: "300px",
                color: "#FFFFFF", // Text color
                fontSize: "32px", // Font size
                fontWeight: "700", // Font weight
                textAlign: "left", // Center align text
                transition: "opacity 0.9s ease",
                fontFamily:'lato'
              }}
            >
              Level up with GenAI for banking, financial services and insurance
            </Typography>
            <Button sx={{height:'53px',width:'163.34px',borderRadius:'100px', border:'2px solid #FFFFFF'}}>
              <Typography  sx={{
                color: "#FFFFFF", // Text color
                fontSize: "18px", // Font size
                fontWeight: "600", // Font weight
                transition: "opacity 0.9s ease",
                fontFamily:'lato',
                height:'27px',
                letterSpacing:'0.5px',
                lineHeightL:'27pxs'
              }}>
                Learn More
              </Typography >
            </Button>
          </Box>
        </Box>

        <AppBar position="relative" sx={{ backgroundColor: "#000033" }}>
          <Box
            sx={{
              justifyContent: "center",
              border: "1px solid #FFFFFF",
              display: "flex",

              height: "105px",
            }}
          >
            <Box
              flex={1}
              borderRight={"1px solid #FFFFFF"}
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Box>
            <Box flex={2}></Box>
          </Box>
        </AppBar>
      </Box>
    </>
  )
}

export default Card3