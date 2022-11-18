import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

import React, { Component } from 'react'
import Popup from './Popup';

export default class PopupDialog extends Component {
  render() {

  const {title, children, openpopup, onClick} = this.props;

    return (
      <div>
      <Dialog open={openpopup} maxWidth="xl" >
        <DialogContent>
          <Popup onClick={onClick} />
        </DialogContent>
      </Dialog>
    </div>
    )
  }
}
