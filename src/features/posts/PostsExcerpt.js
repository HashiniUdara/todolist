import React from 'react'
import { Box } from '@mui/material';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({post}) => {
  return (
    <Box width={'50%'} bgcolor='InfoBackground' paddingLeft={'40px'} >
      <article >
        <h2>{post.title}</h2>
        <h4>{post.body.substring(0, 100)}</h4>
        <h6 className='postCredit'
        >
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </h6>
        <ReactionButtons post={post} />
      </article>
    </Box>
  )
}

export default PostsExcerpt
