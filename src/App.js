import React, { Component } from "react";

import Button from '@mui/material/Button';

// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AddIcon from '@mui/icons-material/Add';

import { OutlinedInput } from '@mui/material';

//components
import Header from "./components/Header";
import ToDoRows from "./components/ToDoRows";
import Popup from "./components/Popup";
import PopupDialog from "./components/PopupDialog";
import TestModal from "./components/TestModal";


export default class App extends Component{
  constructor (props){
    super(props);

    this.state={
       userName:"Hashini",//can dynamically change this data
       todoitems:[
        {action:"prepare breakfast",done:false},
        {action:"have a wash",done:false},
        {action:"take breakfast",done:false},
        {action:"get ready for the work",done:false},
        {action:"departure",done:false},
       ],
       newtodo:'',
       openpopup:false,
       openmodal:false,
    };
  }

  toggleDone = (todo) => 
    this.setState({
      todoitems:this.state.todoitems.map((item)=>
        item.action === todo.action ? {...item, done: !item.done} : item
      ),
    });

  // todoRows =()=>
  //   this.state.todoitems.map((item)=>(
  //     <TableRow key={item.action}>
  //       <TableCell>{item.action}</TableCell>
  //       <TableCell align="center">
  //         <Checkbox
  //           checked={item.done}
  //           onChange={() => this.toggleDone(item)}
  //           inputProps={{ 'aria-label': 'controlled' }}
  //         />
  //       </TableCell>
  //     </TableRow>
  //   ));

  todoRows =()=>
    this.state.todoitems.map((item)=>(
      <ToDoRows key={item.action} item={item} callback={this.toggleDone}/>
    ));

  changeStateData= () => {
    this.setState({
      userName:this.state.userName === "Hashini" ? "Sanju" : "Hashini",
    })
  };

  updateValue  = (event) => {
    this.setState({newtodo:event.target.value});
  };

  addNewTodo = () => {
    this.setState({
      todoitems:[
        ...this.state.todoitems,
        {action:this.state.newtodo, done:false}
      ],
    });
  };

  displayPopup = () => {
    this.setState({
      openpopup:true
    });
  }
  handleClick = () => {
    this.setState({
      openpopup:false
    });
  }

  displayModal = () => {
    this.setState({
      openmodal:true
    });
  }
  closeModal = () => {
    this.setState({
      openmodal:false
    });
  }

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-l2">
          <Header name={this.state.userName}/>
          <div align="center">
            <Button onClick={this.changeStateData} variant="contained">change user</Button>
          </div>
          <br/>
          <div align="center">
            <Button onClick={this.displayPopup} variant="contained">POP UP</Button>
          </div>
          <br/>
          <div align="center">
            <Button onClick={this.displayModal} variant="contained">MODAL</Button>
          </div>
          <br/>
          <div align="center" hei>
            {/* <input type="text" name="newtodo" width={'500px'}></input> */}
            <OutlinedInput type="text" name="newtodo" value={this.state.newtodo} sx={{width:"75.5%"}} onChange={this.updateValue}/>
            <Button onClick={this.addNewTodo} variant="contained" size="large"><AddIcon/></Button>
          </div>
          <br/>
          <TableContainer >
            <Table aria-label="simple table" sx={{width:"80%"}} align="center">
              <TableHead bgcolor="#64b5f6">
                <TableRow>
                  <TableCell>task</TableCell>
                  <TableCell align="center">complete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {this.state.todoitems.map((item)=>(
                  <TableRow>
                    <TableCell>{item.action}</TableCell>
                    <TableCell>{item.done}</TableCell>
                  </TableRow>
                ))} */}
                {this.todoRows()}
              </TableBody>
            </Table>
          </TableContainer>
          <PopupDialog
            openpopup = {this.state.openpopup}
            onClick={this.handleClick}
          >
          </PopupDialog>
          <TestModal openmodal = {this.state.openmodal} closeModal = {this.closeModal}></TestModal>
        </div>

      </div>

    </div>
  );
}