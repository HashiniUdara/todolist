import Counter from "./features/counter/Counter";
import React from 'react';
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

export default function ReduxPractice() {
  return (
    <div>
      <main className="ReduxPractice">
        <AddPostForm/>
        <PostList/>
        {/* <Counter/> */}
      </main>
    </div>
  )
}
