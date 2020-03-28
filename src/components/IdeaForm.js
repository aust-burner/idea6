import React, { useContext, useState } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';

const IdeaForm = () => {
    const { addIdea } = useContext(IdeaContext)
    const [description, setDescription] = useState('')
    const [creator, setCreator] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addIdea(description, creator)
        setDescription('')
        setCreator('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Idea Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Idea Creator"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
            />
            <input type="submit" value='Add Idea'/>
        </form>
    )
}

export default IdeaForm