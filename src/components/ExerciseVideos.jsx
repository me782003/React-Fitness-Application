import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  if(!exerciseVideos?.length) return 'Loading...'


  return (
    <Box
      sx={{
        marginTop: { xs: "20px", lg: "200px" },
        padding: "20px",
      }}
    >
      <Typography variant="h4" mb="33px" ml={2}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"center"}
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection:{lg:'row'},
          gap: { xs: "15px", lg: "30px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => {
          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
              target="_blank"
              rel="noreferrer"
              title={item?.video?.title}
              style={{ height:'auto', display:'flex'}}


            >
              <div style={{position:'relative'}} className="mx-auto">
                <img  src={item?.video?.thumbnails[0]?.url} alt={item?.video?.title} style={{width:'100%', borderRadius:'5px'}} />
                <div
                  style={{
                    padding:'3px 6px',
                    borderRadius:'2px',
                    fontSize:'13px',
                    backgroundColor:'hsla(0, 0.00%, 13.30%, 0.61)',
                    position:'absolute',
                    bottom:'15px',
                    left:'10px',
                    color:'white'
                  }}
                >
                  {item?.video?.lengthText}
                </div>
              </div>
              <Box ml={2} mt={-1}>
                <Typography sx={{fontSize:'20px'}} color='#222' fontWeight='bolder'>
                  {(item?.video?.title).length > 25? (item?.video?.title).slice(0,25) + "...": item?.video?.title}
                </Typography>
                <Typography sx={{fontSize:'15px'}}  color='#393838'>
                  {item?.video?.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
