import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
import axios from "axios";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  posts:[],
  status:'idle',//'idle' 'loading' 'succeeded' 'failed'
  error:null
  // {
  //   id:1, 
  //   title:'title 001', 
  //   content:"content 001", 
  //   date:sub(new Date(), {minutes:10}).toISOString(),
  //   reactions:{
  //     thumsup:0,
  //     wow:0,
  //     heart:0,
  //     rocket:0,
  //     coffee:0
  //   }
  // },
}

//first input argument - string, use as a prefix for the generated action type
//second input argument - payload creater callback, this function returns a promise containing data or rejected promise with an error 
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
  try{
    const response = await axios.get(POST_URL)
    return [...response.data]
  }catch(err){
    return err.message 
  }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async(initialPost) => {
  try{
    const response = await axios.post(POST_URL, initialPost)
    return response.data
  }catch(err){
    return err.message
  }
})

const postSlice  = createSlice({
  name:'posts',
  initialState,
  reducers:{
    postAdded:{
      reducer(state, action){
        state.posts.push(action.payload)
      },
      prepare(title, content, userId){
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions:{
              thumsup:0,
              wow:0,
              heart:0,
              rocket:0,
              coffee:0
            },
          }
        }
      }
    },
    reactionAdded(state, action){   //redux toolkit automatically creates the action creater that we need to export 
      const {postId, reaction} = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if(existingPost){
        existingPost.reactions[reaction] += 1
      }
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        //adding data and reactoins
        let min = 1
        const loadedPosts = action.payload.map(post => {
          post.data = sub(new Date(), {minutes:min++}).toISOString
          post.reactions = {
            thumsup:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
          }
          return post
        })

        //add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId)
        action.payload.date = new Date().toISOString()
        action.payload.reactions = {
          thumsup:0,
          wow:0,
          heart:0,
          rocket:0,
          coffee:0
        }
        console.log(action.payload)
        state.posts.push(action.payload)
      } )
  }
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)

export const { postAdded, reactionAdded } = postSlice.actions

export default postSlice.reducer

//redux does everything synchronous
//So anything asynchronus has to happen outside the store
// this is where redux middleware comes in - 'thunk'