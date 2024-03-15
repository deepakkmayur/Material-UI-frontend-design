import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import image1 from "../assets/1.jpg"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const TourCard = () => {
   return (
      <div>

         <Card sx={{ maxWidth: 600, marginBottom: "30px" }}>
            <CardHeader
               // avatar={
               //    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
               //       R
               //    </Avatar>
               // }
               // action={
               //    <IconButton aria-label="settings">
               //       <MoreVertIcon />
               //    </IconButton>
               // }
               title="A perfect holiday trip"
            // subheader="September 14, 2016"
            />
            <CardMedia
               component="img"
               height="194"
               //   image="/static/images/cards/paella.jpg"
               image={require("../assets/2.png")}
               alt="Paella dish"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
               </IconButton>
               <IconButton aria-label="share">
                  <ShareIcon />
               </IconButton>
               {/* <IconButton aria-label="ratings">
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </IconButton> */}
               <Rating
                  name="simple-controlled"
                  value={3}
                  // onChange={(event, newValue) => {
                  //    setValue(newValue);
                  // }}
               />
            </CardActions>
         </Card>




      </div>
   )
}

export default TourCard
