import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const IdeaContext = createContext()

const localStorageIdeas = JSON.parse(localStorage.getItem('ideas'))

const IdeaContextProvider = (props) => {

    const [ideas, setIdeas] = useState(localStorageIdeas || [])

    useEffect(() => {
        localStorage.setItem('ideas',JSON.stringify(ideas))
    }, [ideas])

    const addIdea = (description, creator) => {
        setIdeas([...ideas, {description: description, creator: creator, id: uuidv4()}])
    }

    const removeIdea = (id) => {
        setIdeas(ideas.filter(idea => idea.id !== id))
    }
    return (
        <IdeaContext.Provider value={{ideas, addIdea: addIdea, removeIdea: removeIdea}}>
            {props.children}
        </IdeaContext.Provider>
    )
}

export default IdeaContextProvider