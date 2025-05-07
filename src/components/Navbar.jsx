import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import Logo from '../assets/images/Logo.png'
import navbarback from '../assets/images/navbarback.png'

const Navbar = () => {
  return (
    <Box
      sx={{
              mt: { lg: '50px', xs: '70px' },
              ml: { sm: '50px' },
              position: 'relative',
              p: '20px',
              backgroundImage: `url(${navbarback})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
    >
      <Stack direction="row" 
      justifyContent="space-around" sx={{gap: {sm:'120px', xs: '40px' },
      mt:{ sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20px">
         
          <Stack
              direction="row"
              gap="40px"
              fontSize="24px"
              alignItems="flex-end"
          >
              <Link to="/" style={{ textDecoration:'none',fontFamily:'Arial' , color: '#fff', borderBottom: '3px solid #3268a8'}}>Home</Link>
              <a href="#exercices" style={{textDecoration:'none',fontFamily:'Arial' , color: '#fff'}}>Exercicios</a>
               <Link to="/">
              <img src={Logo} alt="logotipo"  style={{
                  width: '110px',
                  height: '90px',
                  margin: '20px',
                  paddingLeft: '20px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  }}/>
          </Link>
          </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar