import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Link } from "@mui/material";
import ZeddlabzIcon from "../../assets/ZEDDLABZ.svg";
import Personal from "./Personal";
import Business from "./Business";
import WhatWeDo from "./WhatWeDo";
import Company from "./Company";

const Navbar = () => {
  const [activeMatrix, setActiveMatrix] = useState("");
  const navbarRef = useRef<HTMLDivElement>(null);

  const NavItem = [
    { Title: "Personal" },
    { Title: "Business" },
    { Title: "What We Do" },
    { Title: "Company" },
  ];

  const handleClick = (label: string) => {
    setActiveMatrix((prev) => (prev === label ? "" : label)); // Toggle behavior
  };

  const close = () => {
    setActiveMatrix("");
  };

  return (
    <>
      <AppBar
        sx={{ display: "flex", position: "relative", bgcolor: "#000033" }}
      >
        <Toolbar
          sx={{
            width: "Hug (1,433px)",
            height: "Hug (56px)",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "40px",
            marginRight: "10px",
          }}
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
          <Box sx={{ display: "flex", gap: 6 }}>
            {NavItem.map((item) => (
              <Button
                key={item.Title}
                color="inherit"
                sx={{
                  fontFamily: "Lato",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "28px",
                }}
                onClick={() => handleClick(item.Title)}
              >
                {item.Title}
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              border: "2px solid white",
              borderRadius: "12px",
              color: "white",
              fontFamily: "inter",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "25px",
              width: "138px",
              height: "30px",
            }}
          >
            <Typography
              sx={{
                width: "93.43px",
                height: "15px",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Contact Us
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      {activeMatrix === "Personal" && <Personal onClose={close}/>}
      {activeMatrix === "Business" && <Business onClose={close}/>}
      {activeMatrix === "What We Do" && <WhatWeDo onClose={close} />}
      {activeMatrix === "Company" && <Company onClose={close}/>}
    </>
  );
};

export default Navbar;
