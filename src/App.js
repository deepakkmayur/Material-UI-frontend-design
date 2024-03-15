import  Stack  from '@mui/material/Stack'
import React, { useState } from 'react'
import Menu from './components/Menu'
import Content from './components/Content'
import RightBar from './components/RightBar'
import { Box, Container } from '@mui/material'
import Navbar from './components/Navbar'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const App = () => {
const [theme,setTheme]=useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode:theme,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
  <Box>
    <Navbar/>
      <Container maxWidth="xl">
    <Stack direction="row" spacing={2} justifyContent="space-between">   
      <Menu/>
      <Content/>
      <RightBar/>
    </Stack>
    </Container>
  </Box>
  </ThemeProvider>
  )
}

export default App