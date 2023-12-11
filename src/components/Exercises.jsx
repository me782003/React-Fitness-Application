import React, {useState, useEffect} from "react";
import Pagination from "@mui/material/Pagination";
import { Stack, Box, Typography, Grid, Container, useTheme, useMediaQuery } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ exercises, bodyPart, setExercises }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const theme = useTheme()
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  const paginate = (e, page) => {
      setCurrentPage(page);
      window.scrollTo({
        top:1800,
        behavior:'smooth',
      })
  }

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exercisesData = [];
      if(bodyPart === 'all'){
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=200",
          exerciseOptions
        )
      }else{
        exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=200`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    }
    fetchExercisesData()
  },[bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography sx={{fontSize:{xs:'20px', md:'30px'}}} mx={3} mb="46px">
        Showing Results
      </Typography>
      <Grid
      sx={{display:'flex'}}
      container
      direction={"row"}
      spacing={2}
      justifyContent={"center"}
      >
        {currentExercises.map((ex, index) => {
          return (
            <Grid
              key={index}
            sx={{ mx:'auto'}}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <ExerciseCard key={index} exer={ex} />
            </Grid>
          );
        })}
      </Grid>
      <Stack mt="100px" alignItems={"center"}>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size={isSmallScreen? 'small': 'large'}
            variant="'outlined'"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
