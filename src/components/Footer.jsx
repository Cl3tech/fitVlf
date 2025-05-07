import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import logocl from '../assets/images/logocl.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#f2f2f2">
    <Typography variant="h5"color="purple" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="20px" textAlign="center" pb="40px">Powered by</Typography>
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logocl} alt="logo" style={{ width: '200px', height: '50px' }} />
    </Stack>
    
  </Box>
);

export default Footer;