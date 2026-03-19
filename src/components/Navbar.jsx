import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/student'>Student</NavLink>
                </li>
                <li>
                    <NavLink to='/list/rendering'>List Rendering</NavLink>
                </li>
                <li>
                    <NavLink to='/state'>State</NavLink>
                </li>
                <li>
                    <NavLink to='/tables'>Tables</NavLink>
                </li>
                <li>
                    <NavLink to='/reference'>Reference</NavLink>
                </li>
                <li>
                    <NavLink to='/post/list'>All-Posts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
