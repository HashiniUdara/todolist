import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { Box } from '@mui/material';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const SinglePostPage = () => {
  //retrieve postId

  const post = useSelector((state) => selectPostById(state, postId))

  if(!post){
    return(
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return(
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

export default SinglePostPage