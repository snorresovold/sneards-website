import React from 'react'
import Post from '../components/Post'


function PostsList({posts}: any) {

  return (
    <div className='posts'>
        {posts.map((post: any, index: any) => (
            <Post key={index} post={post} />
        ))}
        
    </div>
  )
}
export default PostsList


