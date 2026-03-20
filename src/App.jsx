import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Student from './components/Student'
import List from './components/List'
import Tables from './components/Tables'
import Form from './components/Form'
import Events from './components/Events'
import State from './components/State'
import Conditional from './components/Conditional'
import Task1 from './tasks/Task1'
import ListRendering from './components/ListRendering'
import Reference from './components/Reference'

import Navbar from './components/Navbar'

import PostList from './components/posts/PostList'
import PostView from './components/posts/PostView'
import PostUpdate from './components/posts/PostUpdate'

const App = () => {

    return (
        <div>

            <Navbar />

            <Routes>

                <Route path='/student' element={<Student />} />
                <Route path='/list/rendering' element={<ListRendering  />} />
                <Route path='/tables' element={<Tables />} />
                <Route path='/state' element={<State />} />
                <Route path='/reference' element={<Reference />} />

                <Route path='/post/list' element={<PostList />} />
                <Route path='/post/view/:id' element={<PostView />} />
                <Route path='/post/update/:id' element={<PostUpdate />} />

            </Routes>
        </div>
    )
}

export default App