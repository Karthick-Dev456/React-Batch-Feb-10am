import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostList = () => {

    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    const postList = posts.map((post, index) => {
        return (
            <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
                <td>{post.body}</td>
                <td>
                    <button onClick={() => navigate(`/post/view/${post.id}`, {state: post})}>View</button>
                    <button onClick={() => navigate(`/post/update/${post.id}`, {state: post})}>Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>User Id</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {postList}
                </tbody>
            </table>
        </div>
    )
}

export default PostList
