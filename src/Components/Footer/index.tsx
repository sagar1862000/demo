import React from "react";
import { Typography, Link, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "../../assets/ic Facebook.svg";
import Image from "mui-image";
import ZeddlabzIcon from "../../assets/ZEDDLABZ.svg";
import InstagramIcon from "../../assets/Frame.svg";
import LinkedInIcon from "../../assets/ic Linkedin.svg";
import TwitterIcon from "../../assets/ic Twitter.svg";
const Footer = () => {
  const columns = [
    "Company",
    "Updates",
    "Career",
    "Capabilities",
    "Prodcts",
    "Contact us",
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className="text-light py-4" style={{ backgroundColor: "#060F22" }}>
      <Box
        display={"flex"}
        justifyContent={'space-around'}
        width={"100%"}
        sx={{ marginBottom: "20px" ,marginTop:'40px' }}
        gap={72}
      >
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src={ZeddlabzIcon}
            alt="ZeddLabz"
            width={"162px"}
            height={"56px"}
          />
        </Link>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* FaceBook icon */}
          <Link href="https://www.facebook.com" target="_blank" color="inherit">
            <Box
              sx={{
                border: "1.96px solid #FFFFFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={"45.74px"}
              height={"45.74px"}
            >
              <Image src={FacebookIcon} width={"9.11px"} height={"15.84px"} />
            </Box>
          </Link>
          {/* instagram icon */}
          <Link href="https://www.facebook.com" target="_blank" color="inherit">
            <Box
              sx={{
                border: "1.96px solid #FFFFFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={"45.74px"}
              height={"45.74px"}
            >
              <Image src={InstagramIcon} width={"18.3px"} height={"18.3px"} />
            </Box>
          </Link>
          {/* Linkdin Icon */}
          <Link href="https://www.facebook.com" target="_blank" color="inherit">
            <Box
              sx={{
                border: "1.96px solid #FFFFFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={"45.74px"}
              height={"45.74px"}
            >
              <Image src={LinkedInIcon} width={"15.51px"} height={"15.51px"} />
            </Box>
          </Link>
          {/* Twitter icon */}
          <Link href="https://www.facebook.com" target="_blank" color="inherit">
            <Box
              sx={{
                border: "1.96px solid #FFFFFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={"45.74px"}
              height={"45.74px"}
            >
              <Image src={TwitterIcon} width={"16.06px"} height={"16.06px"} />
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className="container">
        <Box className="row">
          {Array(12)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="col-12 col-sm-4 col-md-2 mb-3">
                <Typography
                  sx={{
                    color: "#5498FE",
                    fontFamily: "Lato",
                    fontWeight: "500",
                    fontSize: "24px",
                    alignItems: "center",
                    lineHeight: "40px",
                    marginBottom: "10px",
                    marginTop:'30px'
                  }}
                  variant={isMobile ? "h6" : "h5"}
                >
                  {columns[0]}
                </Typography>
                {columns.slice(1).map((text, subIdx) => (
                  <Typography
                    key={subIdx}
                    sx={{
                      color: "#ADADAD",
                      fontFamily: "Lato",
                      fontWeight: "400",
                      fontSize: "24px",
                      alignItems: "center",
                      lineHeight: "40px",
                    }}
                  >
                    <Link href="#" color="inherit" underline="none">
                      {text}
                    </Link>
                  </Typography>
                ))}
              </div>
            ))}
        </Box>
        <hr className="bg-light" />
        <div className="row justify-content-between">
          <div className="col-12 col-md-auto text-center text-md-left mb-2 mb-md-0">
            <Typography variant="body2">
              All right reserved @2023, ZEDDLABZ
            </Typography>
          </div>
          <div className="col-12 col-md-auto text-center text-md-right">
            <Typography variant="body2">
              <Link href="#" color="inherit" underline="none">
                Terms & conditions
              </Link>{" "}
              |{" "}
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </Typography>
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
