import React, { Component } from 'react'

import { Avatar, Box, CardActionArea, CardActions, Grid, IconButton, Input, Link, OutlinedInput, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Grid container direction="row">
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" bgcolor={'#1a237e'} xs={2} sx={{ paddingLeft:1 }}><Typography color={'#00b0ff'} variant="h4" gutterBottom fontFamily={'cursive'} >E-com</Typography></Grid>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center" bgcolor={'#1a237e'} xs={10}>
          <Grid xs={1}><Link href="#" color="inherit" underline="none"><Typography color={'white'} >Home</Typography></Link></Grid>
          <Grid xs={1}><Link href="#" color="inherit" underline="none"><Typography color={'white'} >About</Typography></Link></Grid>
          <Grid xs={1}><Link href="#" color="inherit" underline="none"><Typography color={'white'} >Contact us</Typography></Link></Grid>
          <Grid xs={0.5} >
            <Link href="#" color="inherit" underline="none">
              <Avatar sx={{  }} alt="profile" src={require('./assets/profileImage.jpg')} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" bgcolor={'#e1f5fe'} xs={12}>
        <Grid container justifyContent="center" alignItems="center" bgcolor={''} xs={8} >
          <Grid container justifyContent="center" alignItems="center" bgcolor={''} xs={5.5}>
            <Input
              placeholder='Search...'
              size='small'
              fontSize='small'
              fullWidth
            />
          </Grid> 
          <IconButton><PageviewIcon fontSize='large'/></IconButton>
        </Grid> 
        <Grid container justifyContent="center" alignItems="center" bgcolor={''} xs={0.5}>
          <IconButton>
            <NotificationsIcon fontSize='medium' />
          </IconButton>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" bgcolor={''} xs={1}>
          saved 
          <IconButton>
            <FavoriteIcon fontSize='small' />
          </IconButton>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" bgcolor={''} xs={0.5}>
          <IconButton>
            <ShoppingCartIcon/>
          </IconButton>
        </Grid>
      </Grid>
      </div>
    )
  }
}
