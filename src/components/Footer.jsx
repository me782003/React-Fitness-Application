import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor={'#fff3f4'}> 
      <Stack gap='40p' alignItems='center' px='40px' pt={'24px'}>
        <img src={logo} alt="logo" width={'200px'}/>
        <Typography variant='h5' pb='40px' mt={'40px'}>
          Made with 💖 by Mohammed El-sayed
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
