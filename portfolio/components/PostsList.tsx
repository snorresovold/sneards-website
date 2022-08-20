import React from 'react'
import Post from '../components/Post'


function PostsList({posts}: any) {

  return (
    <div className='grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-4'>
        {posts.map((post: any, index: any) => (
            <Post key={index} post={post}/>
        ))}
    </div>
  )
}
export default PostsList


