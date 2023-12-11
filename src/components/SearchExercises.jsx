import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
      console.log(bodyParts);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=200",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          (exercise.name).toLowerCase().includes(search) ||
          (exercise.target).toLowerCase().includes(search) ||
          (exercise.equipment).toLowerCase().includes(search) ||
          (exercise.bodyPart).toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
      setSearch("");
    }
  };


  return (
    <Stack alignItems={"center"} justifyContent={"center"} mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } , mt:{lg:3}}}
        mb={"50px"}
        
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Container
        position={"relative"}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" , mb:4}}
        mb={"72px"}
      >
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "0",
            },
            width: {
              xs: "350px",
              lg: "1100px",
            },
            backgroundColor: "#FFF",
            ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
              borderRadius: "4px 0 0 4px !important",
              borderRight: "none !mportant",
            },
          }}
          height="76px"
          label=""
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for exercises..."
          type="text"
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            borderRadius: "0",
          }}
          className="search-btn"
        >
          Search
        </Button>
      </Container>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
    </Stack>
  );
};

export default SearchExercises;
