import { Button, Grid, Input, InputLabel } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { checkUserName } from './LoginScice'

function Login(props) {

  const dispatch = useDispatch()

  const onclickLogin = () => {
    dispatch(checkUserName())
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" >
      <Grid item >
        <InputLabel>Name: </InputLabel>
        <Input type='text' ></Input>
        <InputLabel>Password: </InputLabel>
        <Input type='text' ></Input>
        <br/><br/>
        <Button onClick={onclickLogin} variant='outlined' >Login</Button>
      </Grid>
    </Grid>
  )
}
export default Login

