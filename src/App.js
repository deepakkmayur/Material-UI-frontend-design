import  Stack  from '@mui/material/Stack'
import React from 'react'
import Menu from './components/Menu'
import Content from './components/Content'
import RightBar from './components/RightBar'
import { Box, Container } from '@mui/material'
import Navbar from './components/Navbar'

const App = () => {

  return (
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
  )
}

export default App