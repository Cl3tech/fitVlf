import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = ({setExercises, bodyPart ,setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect( () => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  },[] )

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.badyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{ lg:'44px', xs:'30px'}}}mb='50px' textAlign='center'>
        Exercicios que precisas de conhecer
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
            input: { fontWeight: '500', border:'none', borderRadius:'4px'},
            width: {lg:'800px', xs:'350px'},
            backgroundColor:"#fff",
            borderRadius:'4px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Procurar exercicios"
         
        />
        <Button className="search-btn"
          sx={{
            bgcolor:'#3268a8',
            color: '#fff',
            textTransform:'none',
            width:{ lg:'175px', xs: '80px'},
            fontSize:{ lg:'20px', xs:'14px'},
            height:'56px',
            position: 'absolute',
            right:'0',
          }}
          onClick={handleSearch}
        >
          Ver
        </Button>
      </Box>
      <Box sx={{ position:'relative', width:'100%', p: '20px' }}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises