import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import navbarback from '../assets/images/navbarback.png'

const Navbar = () => {
  return (
    <Box
      sx={{
              width: '100%',
              position: 'relative',
              p: '20px',
              backgroundImage: `url(${navbarback})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
    >
      <Stack direction="row" justifyContent="space-around">
          <Stack
              direction="row"
              gap="40px"
              fontSize="24px"
              alignItems="flex-end"
          >
              <Link to="/" style={{ textDecoration:'none',fontFamily:'Arial' , color: '#fff', borderBottom: '3px solid #3268a8'}}>Home</Link>
              <a href="#exercices" style={{textDecoration:'none',fontFamily:'Arial' , color: '#fff'}}>Exercicios</a>
               <Link to="/">
              
          </Link>
          </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar