import React, { useEffect, useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1400px'}}} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/exercise/:id" index element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}
export default App;
