import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BODYPART_IMAGE  from "../assets/icons/body-part.png"
import TARGET_IMAGE from "../assets/icons/target.png"
import EQUIPMENT_IMAGE from "../assets/icons/equipment.png"

const Detail = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, name, target , equipment} = exerciseDetail;

  const extraDetails = [
    {
      icon: BODYPART_IMAGE,
      name: bodyPart
    },
    {
      icon: TARGET_IMAGE,
      name: target,
    },
    {
      icon: EQUIPMENT_IMAGE,
      name: equipment,
    },
]


  return (
    <Stack gap={'60px'} sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{
        gap:{
          xs:'20px',
          lg:'35px',
        }
      }}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {
          extraDetails.map((item, i)=>{
            return(
              <Stack key={i} direction='row' gap='24px' alignItems='center'>
                <Button sx={{bgcolor:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                  <img src={item.icon} style={{width:'50px', height:'50px'}} />
                </Button>
                <Typography variant='h6' sx={{textTransform:'capitalize'}}>
                  {item.name}
                </Typography>
              </Stack>
            )
          })
        }
      </Stack>
    </Stack>
  )
}

export default Detail
