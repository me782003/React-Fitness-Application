import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/hero.png";

const HeroBanner = () => {
  return (
    <Box
      // position='relative'
      p="20px"
      sx={{
        mt: {
          xs: "70px",
          lg: "112px",
        },
        ml: {
          sm: "50px",
        },
      }}
    >
      <Typography color="#FF2625" fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: "40px", lg: "36px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography mb={4} lineHeight="35px" fontSize="22px">
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href={"#exercises"}
        sx={{
          "&:hover": { color: "#FFF" },
          backgroundColor: "#FF2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" style={{userSelect:'none'}} draggable='false' className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
