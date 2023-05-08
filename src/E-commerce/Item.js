import { Box, Button, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

import Header from './Header'
import CategoryContent from './CategoryContent'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'mui-image'

export default class Item extends Component {
  render() {
    return (
      <Grid bgcolor={'#e1f5fe'}>
        <Header/>
        <Typography  variant="h7" sx={{ paddingLeft:1.5}} >{'Your>Item>Title>Here'}</Typography>
        <Grid container direction={'row'} padding={1} paddingTop={2}>
          <Grid direction={'column'} justifyContent="center"  sx={{ border:0, width:'5%', height:'30%', paddingRight:1 }}>
            <Grid sx={{ paddingBottom:2, paddingTop:0}}>
              <Image
                src={require('./assets/blender.jpg')}
                height='100%'
                width='100%'
                showLoading={ false }
                fit='scale-down'
              />
            </Grid>
            <Grid sx={{ paddingBottom:2, paddingTop:1.5}}>
              <Image
                src={require('./assets/blender.jpg')}
                height='100%'
                width='100%'
                showLoading={ false }
                fit='scale-down'
              />
            </Grid>
            <Grid sx={{ paddingBottom:2, paddingTop:1.5}}>
              <Image
                src={require('./assets/blender.jpg')}
                height='100%'
                width='100%'
                showLoading={ false }
                fit='scale-down'
              />
            </Grid>
            <Grid sx={{ paddingBottom:2, paddingTop:1.5}}>
              <Image
                src={require('./assets/blender.jpg')}
                height='100%'
                width='100%'
                showLoading={ false }
                fit='scale-down'
              />
            </Grid>
            <Grid sx={{ paddingBottom:0, paddingTop:2}}>
              <Image
                src={require('./assets/blender.jpg')}
                height='100%'
                width='100%'
                showLoading={ false }
                fit='scale-down'
              />
            </Grid>
          </Grid>
          <Grid border='black' sx={{ border:1, width:'30%', height:'30%' }}>
            <Image
              src={require('./assets/blender.jpg')}
              height='100%'
              width='100%'
              showLoading={ false }
              fit='scale-down'
            />
          </Grid>
          <Grid direction={'column'} sx={{ paddingLeft:1.5}} >
            <Typography variant="h4" sx={{ paddingBottom:2 }} >Your Item Title Here</Typography>
            <Typography variant="h6" paddingBottom={1} >Condition : new</Typography>
            <Typography variant="h6" paddingBottom={1} bgcolor='yellow' >Quantity : 10 Available</Typography>
            <Typography variant="h5" paddingBottom={1} >Price: $2.00</Typography>
            <Typography variant="h6" paddingBottom={1} >Shipping: </Typography>
            <Typography variant="h6" paddingBottom={1} >Delivery: </Typography>
            <Box bgcolor={'yellow'} >
              <Typography variant="h6" paddingBottom={1}>Payments : </Typography>
              <Image
                src={require('./assets/Gpay.png')}
                height='6%'
                width='7%'
              />
              <Image
                src={require('./assets/paypal.png')}
                height='6%'
                width='7%'
              />
              <Image
                src={require('./assets/visa.png')}
                height='6%'
                width='7%'
              />
            </Box>
            <Typography variant="h6" paddingBottom={1} >Return : </Typography>
          </Grid>
          <Grid>
          <Box display={'grid'} justifyContent={'end'} bgcolor='' paddingLeft={15} paddingTop={38} width={'150%'} >
              <Button variant='contained' sx={{ m:1, width:200 }} >
                Buy now
              </Button>
              <Button variant='contained' sx={{ m:1 }} >
                Add to cart
              </Button>
              <Button variant='contained' sx={{ m:1 }} >
                <FavoriteBorderIcon fontSize='small' />
                save
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box paddingLeft={2} >
          <Typography variant="h5" paddingBottom={1} >Description</Typography>
          <Box width={'100%'} >
            <Typography variant="h6" paddingBottom={1} >Description Description Description Description Description </Typography>
          </Box>
        </Box>
      </Grid>
    )
  }
}
