import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodypart, setPodyPart }) => {
  console.log(bodypart)
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodypart === item
          ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "100%",
              height: "222px",
              cursor: "pointer",
              gap: "47px",
            }
            : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "100%",
              height: "222px",
              cursor: "pointer",
              gap: "47px",
            }
      }

      onClick={()=>{
        setPodyPart(item)
        window.scrollTo({
          top:window.scrollY + 300,
          left:0,
          behavior:'smooth',
        })
      }}
    >
      <img
        src={icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" , userSelect:'none'}}
        draggable='false'

      />
      <Typography mt={2} fontSize={'24px'} sx={{userSelect:'none'}} fontWeight={'bold'} color='#3a1212' textTransform={'capitalize'}>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
