import React, { Component } from 'react'

import { Box, CardActionArea, CardActions, Grid, IconButton, Link, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default class CategoryContent extends Component {
  constructor(){
    super();

    this.state={
      Items:[
        
      ]
    }
  }
  render() {
    return (
      <Grid container direction="row" justifyContent="center" alignItems="center" bgcolor={''}>
        <Box sx={{ p:3, width: 325, height: 300, }} >
            <Card  >
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                width="140"
                image={require('./assets/Blender-PNG-Picture.png')} //"/assets/Blender-PNG-Picture.png"
                alt="blender"
                />
                <CardContent>
                  <Typography variant="subtitle1">Your Item Title Here</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton>
                  <FavoriteBorderIcon fontSize='small' />
                </IconButton>
                <IconButton>
                  <ShareIcon fontSize='small' />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <Box sx={{ p:3, width: 325, height: 300, }} >
            <Card  >
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                width="140"
                image={require('./assets/blender.jpg')}
                alt="blender"
                />
                <CardContent>
                  <Typography variant="subtitle1">Your Item Title Here</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton>
                  <FavoriteBorderIcon fontSize='small' />
                </IconButton>
                <IconButton>
                  <ShareIcon fontSize='small' />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <Box sx={{ p:3, width: 325, height: 300, }} >
            <Card  >
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                width="140"
                image={require('./assets/Blender-PNG-Picture.png')} //"/assets/Blender-PNG-Picture.png"
                alt="blender"
                />
                <CardContent>
                  <Typography variant="subtitle1">Your Item Title Here</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton>
                  <FavoriteBorderIcon fontSize='small' />
                </IconButton>
                <IconButton>
                  <ShareIcon fontSize='small' />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <Box sx={{ p:2, width: 325, height: 300, }} >
            <Card  >
              <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                width="140"
                image={require('./assets/blender.jpg')} //"/assets/Blender-PNG-Picture.png"
                alt="blender"
                />
                <CardContent>
                  <Typography variant="subtitle1">Your Item Title Here</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton>
                  <FavoriteBorderIcon fontSize='small' />
                </IconButton>
                <IconButton>
                  <ShareIcon fontSize='small' />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Grid>
    )
  }
}
