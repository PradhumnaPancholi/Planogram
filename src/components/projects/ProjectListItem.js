import moment from 'moment';
import React from 'react';

const ProjectListItem = ({project}) => {
    return (
        <div className='project-list-item card'>
            <span className='card-title'>{project.title}</span>
            <p>Added By: {project.authorFirstName}</p>
            <p className='light-text'>{moment(project.createdAt.toDate()).format('MMM Do YYYY')}</p>
        </div>
    )
}

export default ProjectListItem
