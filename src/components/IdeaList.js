import React, { useContext } from 'react';
import { IdeaContext } from '../contexts/IdeaContext';
import IdeaDetails from './IdeaDetails';

const IdeaList = () => {
    const { ideas } = useContext(IdeaContext)
    return ideas.length ? (
        <div className="idea-list">
            <ul>
                {ideas.map(idea => {
                    return (
                        <IdeaDetails idea={idea} key={idea.id}></IdeaDetails>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            You better get Thinkin'
        </div>
    )
       
}

export default IdeaList