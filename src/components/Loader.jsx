import { Stack } from '@mui/material';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' width='100%'>
        <InfinitySpin
          width='200'
          color="#4fa94d"
        /> 
    </Stack>
  )
}

export default Loader
