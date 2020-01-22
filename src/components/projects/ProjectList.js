import React from 'react';

import ProjectsListItem from './ProjectListItem';

const ProjectsList = ({projects}) => {
    return (
        <div className='section project-list'>
            { projects && projects.map(project => {
                return(
                    <ProjectsListItem project={project}/>
                )
            })}
        </div>
    )
}

export default ProjectsList
