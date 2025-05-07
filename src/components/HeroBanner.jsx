import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import navbarback from '../assets/images/navbarback.png';
import worker from '../assets/images/worker.png';
import Logo from '../assets/images/Logo.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        width:'100%',
        position: 'relative',
        display: 'flex',
        flexDirection:'row',
        p: ' 20px',
        backgroundImage: `url(${navbarback})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        }}
      >
        <img src={Logo} alt="logotipo"  style={{
                           
                            width: '60%',
                            height: '40%',
                            margin: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}/>                 
        <Typography fontWeight={700} color='#fff' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="20px" mt="30px">
          Suar, Sorrir <br /> e Repetir
        </Typography>
        <Typography fontSize="22px" color='#fff' lineHeight="35px" mb={4}>
          Descobre os melhores exercícios para ti...
        </Typography>
        <Button variant="contained" color="secondary" href="#exercises" sx={{ 
          backgroundColor: 'red', 
          padding: '10px',
          width: '70%',
        
          }}>
          Explorar Exercícios
        </Button>
        
        
      </Box>
      <Box
        sx={{ 
          display: 'flex',
          with: '50%',
        }}
      >
         <img src={worker} alt="logotipo"  style={{
                            width: '100%',
                            height: '100%',
                            margin: '20px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            }}/>
      </Box>
    </Box>
  );
};

export default HeroBanner;
