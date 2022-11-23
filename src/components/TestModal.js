import Modal from 'react-modal';
import React, { Component } from 'react'
import { Button } from '@mui/material';

export default class TestModal extends Component {
  render() {
    const { openmodal, closeModal } = this.props;
    return (
      <div>
        <Modal isOpen={openmodal}>
          modal called
          <Button onClick={closeModal} >&nbsp;x&nbsp;</Button>
        </Modal>
      </div>
    )
  }
}
