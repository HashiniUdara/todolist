import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; //generate random id

import { addNewPost, postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

import React from 'react'
import { Button } from "@mui/material";
import { add } from "date-fns";

const AddPostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = () => {
    if(canSave){
      try{
        setAddRequestStatus('pending')
        dispatch(addNewPost({title, body:content, userId})).unwrap()

        setTitle('')
        setContent('')
        setUserId('')
      }catch(err){
        console.error('Failed to save the post',err)
      }finally{setAddRequestStatus('idle')}
    }
  }


  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id} >
      {user.name}
    </option>
  ))

  return (
    <div>
      <section>
        <h2>Add a new post</h2>
        <form>
          <label htmlFor="postTitle" >post title : </label>
          <input
            type='text'
            id='posttitle'
            name='posttitle'
            value={title}
            onChange={onTitleChanged}
          />
          <br/><br/>
          <label htmlFor="postAuthor" >Author: </label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged} >
            <option value='' ></option>
            {usersOptions}
          </select>
          <br/><br/>
          <label htmlFor="postContent" >post content : </label>
          <textarea
            id="postcontent"
            name="postcontent"
            value={content}
            onChange={onContentChanged}
          />
          <br/><br/>
          <Button 
            onClick={onSavePostClicked} 
            type="submit" 
            variant="contained"
            size="small"
            disabled={!canSave}
            >save post</Button>
          <br/>
        </form>
      </section>
    </div>
  )
}

export default AddPostForm
