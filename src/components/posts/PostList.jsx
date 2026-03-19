import React, { useEffect, useState} from 'react'
import axios from 'axios'

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(error => console.log(error))
    })

    const postList = posts.map((post, index) => {
        return (
            <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
                <td>{post.body}</td>
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
