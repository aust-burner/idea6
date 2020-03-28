import React, { useContext } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';


const NavBar = () => {
    const { ideas } = useContext(IdeaContext)
    return (
        <div className="navbar">
            <h1>Idea List</h1>
            <p>You have { ideas.length } Ideas. Get Thinkin! </p>
        </div>
    )
}

export default NavBar