import React, { Component } from 'react'

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import Checkbox from '@mui/material/Checkbox';

export default class ToDoRows extends Component {
  render() {
    return(
      <TableRow key={this.props.key}>
        <TableCell>{this.props.item.action}</TableCell>
        <TableCell align="center">
          <Checkbox
            checked={this.props.item.done}
            onChange={() => this.props.callback(this.props.item)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </TableCell>
      </TableRow>
    )
  }
}
