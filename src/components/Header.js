import React, { Component } from 'react'

import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';

export default class Header extends Component {
  render() {
    return (
      <div align="center">
        <Typography width="100%" variant="h2" color={'#0d47a1'} align="center" bgcolor={"white"}>
          {this.props.name}'s To Do List
          {/* <div align="center">
            <Button onClick={this.changeStateData} variant="contained">change user</Button>
          </div> */}
        </Typography>
      </div>
    )
  }
}
