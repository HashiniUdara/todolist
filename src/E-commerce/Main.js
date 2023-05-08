import { Box, Button, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

import Content from './Content';
import Header from './Header';


export default class Main extends Component {
  render() {
    return (
      <Grid>
        <Header/>

        <Box>
            <Button href='./Category.js' >category</Button>
            <Button href='./Item.js' >item</Button>
            <Button href='./InsertUser.js' >insert user</Button>
        </Box>

        <Grid container justifyContent="flex-start" alignItems="flex-start" bgcolor={'#e1f5fe'} xs={12} sx={{ p:1, paddingBottom:0 }}>
          <Typography variant="h5">Electronics</Typography>
          <Content/>
          <Typography variant="h5">Fashion</Typography>
          <Content/>
          <Typography variant="h5">Sports</Typography>
          <Content/>

        </Grid>
      </Grid>
    )
  }
}