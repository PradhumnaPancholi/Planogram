import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project, auth } = props
    // for route guarding//
    if(!auth.uid) return <Redirect to='/signin'/>
    // -----------------//
    if (project){
        return(
            <div className='section container'>
                <div className='card project-details'>
                    <div className='card-content'>
                        <span className='card-title'>{project.title}</span>
                        <p className='project-description'>{project.content}</p>
                    </div>
                    <div className='card-action light-text'>
                        <p>Added By: {project.authorFirstName} {project.authorLastName}</p>
                        <p>{moment(project.createdAt.toDate()).format('MMM Do YYYY')}</p>
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
        project: project,
        auth: state.firebase.auth
    }
}

export default compose( 
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    ) (ProjectDetails)
