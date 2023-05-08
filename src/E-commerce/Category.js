import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

import Header from './Header'
import CategoryContent from './CategoryContent'

export default class Category extends Component {
  render() {
    return (
      <Grid bgcolor={'#e1f5fe'}>
        <Header/>
        <Typography  variant="h4" sx={{ paddingLeft:1.5}} >Electronics</Typography>
        <CategoryContent/>
        <CategoryContent/>
        <CategoryContent/>
        <CategoryContent/>
      </Grid>
    )
  }
}
