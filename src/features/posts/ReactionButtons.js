import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumsup:'👍',
  wow:'😲',
  heart:'❤️',
  rocket:'🚀',
  coffee:'☕'
}

const ReactionButtons = ({post}) => {

  const dispatch = useDispatch()

  const reactioButtons = Object.entries(reactionEmoji).map(([name, emoji])=>{
    return(
      <Button
        key={name}
        type='button'
        className='reactionButton'
        onClick={()=>
          dispatch(reactionAdded({postId:post.id, reaction:name}))
        }
      >
        {emoji}{post.reactions[name]}
      </Button>
    )
  })

  return (
    <div>
      {reactioButtons}
    </div>
  )
}

export default ReactionButtons
