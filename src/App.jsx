import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box sx={{ 
      width: { xs: '95%', sm: '90%', xl: '1488px' }, 
      m: 'auto',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App