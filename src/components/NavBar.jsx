import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import logo from "../assets/images/Logo.png";
const NavBar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: {
          xs: "40px",
          sm: "122px",
        },
        mt: {
          sm: "23px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link to="/">
        <img
          src={logo}
          alt="LOGO"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap="40px"
        fontSize={"24px"}
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
