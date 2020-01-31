import React from 'react';

const ProjectListItem = ({project}) => {
    return (
        <div className='project-list-item card'>
            <span className='card-title'>{project.title}</span>
            <p>Added By: {project.authorFirstName}</p>
            <p className='grey-text'>20th Jan, 2pm</p>
        </div>
    )
}

export default ProjectListItem
