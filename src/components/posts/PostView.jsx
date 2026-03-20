import React, { use } from 'react'
import { useLocation } from 'react-router-dom'

const PostView = () => {

    const location = useLocation()

    const post_data = location.state

    return (
        <div>
            <h1>Title: {post_data.title} </h1>
            <h1>Created By: {post_data.userId} </h1>
            <p>Content: {post_data.body}</p>
        </div>
    )
}

export default PostView
