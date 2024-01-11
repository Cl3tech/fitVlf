import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg:'212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#3268a8" 
      fontSize="26px"
      fontWeight="600" >
        Vila Flor Fitness
      </Typography>
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px' , xs: '40px'}}} mb="20px" mt="30px">
        Suar, Sorrir <br /> e Repetir
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Descobre os melhores exercicios para ti...
      </Typography>
      <Button variant="contained" color='secondary' href='#exercises' sx={{ backgroundColor:'#3268a8', padding:'10px' }} >Explorar Exercicos</Button>
      <Typography fontWeight={600} color="primary" 
        sx={{ 
          opacity: 0.2,
          display: { lg: 'block', xs:'none' }
        }}
        fontSize='180px'
      >
        Exercicios
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner