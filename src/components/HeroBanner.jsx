import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '50px', xs: '70px' },
        ml: { sm: '50px' },
        position: 'relative',
        p: '20px',
        backgroundImage: `url(${HeroBannerImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography color="#3268a8" fontSize="26px" fontWeight="600">
        Vila Flor Fitness
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="20px" mt="30px">
        Suar, Sorrir <br /> e Repetir
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Descobre os melhores exercícios para ti...
      </Typography>
      <Button variant="contained" color="secondary" href="#exercises" sx={{ backgroundColor: '#3268a8', padding: '10px' }}>
        Explorar Exercícios
      </Button>
      <Typography
        fontWeight={600}
        color="primary"
        sx={{
          opacity: 0.2,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize="180px"
      >
        Vila Flor
      </Typography>
      
    </Box>
  );
};

export default HeroBanner;
