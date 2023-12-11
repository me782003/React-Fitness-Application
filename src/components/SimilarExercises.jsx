import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { xs: "0", lg: "100px" } }}>
      <Typography sx={{fontSize:{xs:'18px', lg:'30px'}}} px={3}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises?.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography sx={{fontSize:{xs:'18px', lg:'30px'}}} mt={4} px={3}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises?.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
