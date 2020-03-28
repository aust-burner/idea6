import React, { useContext } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';

const IdeaDetails = (props) => {
    const { removeIdea } = useContext(IdeaContext)
    return (
        <li onClick={() => removeIdea(props.idea.id)}>
            <div className="description">{props.idea.description}</div>
            <div className="creator">{props.idea.creator}</div>
        </li>
    )
}

export default IdeaDetails