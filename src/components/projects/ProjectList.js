import React from 'react';

const ProjectsList = () => {
    return (
        <div className='section project-list'>
            {/* dummy data for now */}
            <div className='project-summary card'>
                <span className='card-title'>Project Title</span>
                <p>Author</p>
                <p className='grey-text'>20th Jan, 2pm</p>
            </div>

            <div className='project-summary card'>
                <span className='card-title'>Project Title</span>
                <p>Author</p>
                <p className='grey-text'>20th Jan, 2pm</p>
            </div>

            <div className='project-summary card'>
                <span className='card-title'>Project Title</span>
                <p>Author</p>
                <p className='grey-text'>20th Jan, 2pm</p>
            </div>
        </div>
    )
}

export default ProjectsList
