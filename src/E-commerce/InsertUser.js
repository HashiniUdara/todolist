import { Button, Grid, Input, InputLabel, Container, TextField, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

export default class InsertUser extends Component {
  render() {
    const saveUser = () => {
      alert('save clicked');
    }
    return (
      <div>
        {/* <Grid justifyContent={'center'} alignContent={'center'} bgcolor={'blue'} > */}
        <Container width="50%" >
          <Paper>
          <Box alignSelf={'center'} bgcolor={'red'} >
            {/* <InputLabel>Id: </InputLabel>
            <Input type='' id='userid'></Input>
            <InputLabel>Name: </InputLabel>
            <Input type='text' id='username' ></Input>
            <InputLabel>Email: </InputLabel>
            <Input type='email' id='useremail' ></Input> */}
            <TextField label='Name' fullWidth margin='10px' ></TextField>
            <TextField label='Email' fullWidth></TextField>
            <TextField label='ID' fullWidth></TextField>

            <Button onClick={saveUser}>Save</Button>
          </Box>
          </Paper>
        </Container>
        {/* </Grid> */}
      </div>
    )
  }
}
