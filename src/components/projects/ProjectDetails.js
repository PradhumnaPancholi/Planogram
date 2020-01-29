import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props

    if (project){
        return(
            <div className='section project-details container'>
                <div className='card'>
                    <div className='card-content'>
                        <span className='card-title'>{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className='card-action grey-text'>
                        <p>Posteed By {project.authorFirstName}</p>
                        {/* <p>{project.createdAt}</p> */}
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div>Loading.....</div>
            )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        project: project
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    ) (ProjectDetails)
