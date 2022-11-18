import { Box, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Table, TableCell, TableRow, Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default class Popup extends Component {
  render() {
    return (
      <div>
        <Grid container  direction="row" justifyContent="center" alignItems="center"xs={12}>
          <Grid item>
            <Box width={'100%'} >
              <Card sx={{bgcolor:'#ffffff', width:'100%' }}>
                <form>
                <CardContent>
                  <Grid xs={12} container justifyContent="flex-end" ><Button onClick={this.props.onClick} ><CloseIcon/></Button></Grid>
                  <Grid xs={12} container justifyContent="center" alignItems="center">
                    <Typography variant='h5'>Create Filter</Typography>
                  </Grid>
                  <Grid container  xs={12} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={6} flex-wrap>
                      <Box bgcolor='#ffffff' >
                        <Table>
                          <TableRow>
                            <TableCell align='left' >Filter Name : </TableCell>
                            <TableCell align='right' ><input placeholder='Enter filter name'></input></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align='left' >Send Frequency : </TableCell>
                            <TableCell align='right' ><input></input></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align='left' >User : </TableCell>
                            <TableCell align='right' ><input></input></TableCell>
                          </TableRow>  
                          <TableRow>
                            <TableCell align='left' >SourceIP : </TableCell>
                            <TableCell align='right' ><input placeholder='Any'></input></TableCell>
                          </TableRow>  
                          <TableRow>
                            <TableCell align='left' >Destination Port : </TableCell>
                            <TableCell align='right' ><input placeholder='Any'></input></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell align='left' >Protocol : </TableCell>
                            <TableCell align='right' > <input></input></TableCell>
                          </TableRow>
                        </Table>
                      </Box>
                    </Grid>
                    <Grid item xs={6} flex-wrap>
                      <Box bgcolor='#ffffff'>
                        <Table>
                          <tr>
                            <TableCell align="left" >Report Type: </TableCell>
                            <TableCell align="right" ><input></input></TableCell>
                          </tr>
                          <tr>
                            <TableCell align="left" >Duration: </TableCell>
                            <TableCell align="right" > 
                              <input size={9} placeholder='Set start time'></input> 
                              to 
                              <input size={9} placeholder='set end time'></input>
                            </TableCell>
                          </tr>
                          <tr>
                            <TableCell align="left" >Email Profile: </TableCell>
                            <TableCell align="right" ><input></input></TableCell>
                          </tr>
                          <tr>
                            <TableCell align="left" >Destination IP: </TableCell>
                            <TableCell align="right" ><input placeholder='Any'></input></TableCell>
                          </tr>
                          <tr>
                            <TableCell align="left" >Application: </TableCell>
                            <TableCell align="right" ><input placeholder='Any'></input></TableCell>
                          </tr>
                          <tr>
                            <TableCell align="left" >VLAN ID: </TableCell>
                            <TableCell align="right" ><input placeholder='Any'></input></TableCell>
                          </tr>
                        </Table>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid xs={12} container justifyContent="center" alignItems="center">
                    <Box sx={{marginBottom:15}}>
                      <Button type='submit' variant='contained' color='primary'>Add Filter</Button>
                    </Box>
                  </Grid>
                </CardActions>
                </form>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div>
    )
  }
}
