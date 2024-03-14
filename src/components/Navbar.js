import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import deepakImage from "../assets/deepak.png"
import styled from '@emotion/styled'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between"
})

const Navbar = () => {
   return (
      <AppBar position='sticky'>
         <StyledToolbar>
          <Typography variant='h5'>Tours</Typography>
          <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
            <Badge badgeContent={4} color="primary">
               <MailIcon color="action" />
            </Badge>
            {/* Badge is for upper messages notifications */}
            <Badge badgeContent={101} color="error">
            <NotificationsActiveIcon color="action"/>
            </Badge>

            <Avatar alt="Travis Howard" src={deepakImage} />

          </Box>
         </StyledToolbar>
      </AppBar>
   )
}

export default Navbar