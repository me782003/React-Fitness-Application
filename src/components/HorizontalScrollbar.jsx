import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import ExerciseCard from './ExerciseCard'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart , isBodyParts}) => {
  return (
    <Swiper
    pagination={true} modules={[Pagination]} className="mySwiper"
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id || item} title={item.id || item}>
          <Box width={'auto'}>
            {
              isBodyParts?
                <BodyPart
                  item={item}
                  bodypart={bodyPart}
                  setPodyPart={setBodyPart}
                />
              :
                <ExerciseCard exer={item} />
            }
           
          </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HorizontalScrollbar;
