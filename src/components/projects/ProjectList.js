import React from 'react';
import { Link } from 'react-router-dom';

import ProjectsListItem from './ProjectListItem';

const ProjectsList = ({projects}) => {
    return (
        <div className='section project-list'>
            { projects && projects.map(project => {
                return(
                    <Link to={'/projects/' + project.id}>
                        <ProjectsListItem project={project}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectsList
