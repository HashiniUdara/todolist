import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import React from 'react'
import { useEffect } from 'react';

import PostsExcerpt from './PostsExcerpt';

const PostList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if(postsStatus === 'idle'){
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  // //slice returns a shallow copy of the array (creating a new array)

  // const renderedPosts = orderedPosts.map(post => (
    
  // ))

  let content
  if(postsStatus === 'loading'){
    content = <p>'Loading...</p>
  }else if(postsStatus === 'succeeded'){
    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = /*orderedPosts*/posts.map(post => <PostsExcerpt key={post.id} post={post} />)
  }else if(postsStatus === 'failed'){
    content = <p>{error}</p>
  }

  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  )
}

export default PostList
