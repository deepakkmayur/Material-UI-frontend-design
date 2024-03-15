import { Box, List, ListItemButton, ListItemIcon, ListItemText,ListItem } from '@mui/material'
import React from 'react'
import FlightIcon from '@mui/icons-material/Flight';
import TocIcon from '@mui/icons-material/Toc';
import ExploreIcon from '@mui/icons-material/Explore';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import InfoIcon from '@mui/icons-material/Info';

const Menu = () => {
  return (
   //  <Box backgroundColor="yellowgreen" flex={1}>
    <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}} >
      <Box position='fixed'>
    <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FlightIcon />
              </ListItemIcon>
              <ListItemText primary="Plan your trip" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TocIcon />
              </ListItemIcon>
              <ListItemText primary="InbThings to do" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Facts"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Places"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Help"/>
            </ListItemButton>
          </ListItem>
          
      </List>
      </Box>
      </Box>
  )
}

export default Menu