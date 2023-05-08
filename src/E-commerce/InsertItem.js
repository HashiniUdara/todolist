import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import { useState } from "react";

export default function InsertItem() {
  // export default class InsertItem extends Component {
  // render() {
  const [name, setName] = useState("");
  const [itemLocation, setItemLocation] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    const item = {name,itemLocation}
    // console.log(item)
    fetch("http://localhost:8080/item/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(item)
    }).then(()=>{
      console.log("new item successfully added.")
    })
  }

  return (
    <div>
      <Container>
        <Paper elevation={3} style={{ width: "50%", margin: "20px auto" }}>
          <Typography variant="h4">Add Item</Typography>
          <form noValidate autoComplete="off">
            <TextField
              id=""
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id=""
              label="Item Location"
              variant="outlined"
              fullWidth
              value={itemLocation}
              onChange={(e) => setItemLocation(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick} >
              Add
            </Button>
          </form>
          {name}
          {itemLocation}
        </Paper>
      </Container>
    </div>
  );
  // }
}
