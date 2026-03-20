import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostUpdate = () => {

    const location = useLocation()
    const post_data = location.state

    const { id } = useParams()

    const [title, setTitle] = useState(post_data.title)
    const [content, setContent] = useState(post_data.body)

    const UpdatePost = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: title,
            body: content
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }


    return (
        <div>
            <form>
                <label>Title</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

                <label>Content</label>
                <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />

                <input type="button" value="Update" onClick={UpdatePost} />
            </form>
        </div>
    )
}

export default PostUpdate
