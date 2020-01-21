import React from 'react';

const ProjectDetails = (props) => {

    let id = props.match.params.id
    return (
        <div className='section project-details container'>
            <div className='card'>
                <div className='card-content'>
                    <span className='card-title'>Project Title {id}</span>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className='card-action grey-text'>
                    <p>Posteed By </p>
                    <p>20th Jan, 2:30pm</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
