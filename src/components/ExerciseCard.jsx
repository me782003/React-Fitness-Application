import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exer }) => {
  return (
    <Link
      className="exercise-card mx-auto"
      to={`/exercise/${exer.id}`}
      title={exer.name}
      onClick={() => {
        window.scrollTo({
          top: "0",
          behavior: "smooth",
        });
      }}
    >
      <img
        src={exer.gifUrl}
        alt={exer.name}
        loading="lazy"
        style={{ width: "100%", useSelect: "none" }}
        draggable="false"
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#0c958a",
            fontSize: "14px",
            textTransform: "capitalize",
            "&:hover": {
              background: "#098177",
            },
          }}
        >
          {exer.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#e9b13a",
            fontSize: "14px",
            textTransform: "capitalize",
            "&:hover": {
              background: "#e9b13a",
            },
          }}
        >
          {exer.target}
        </Button>
      </Stack>
      <Typography
        textAlign={"start"}
        ml="21px"
        color="#3b3b3b"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform={"capitalize"}
      >
        {exer.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
