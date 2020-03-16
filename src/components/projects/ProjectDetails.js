import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

import { deleteProject } from '../../store/actions/projectActions';


const ProjectDetails = (props) => {
    const { project, auth } = props
    //redirect handler//
    const redirectHandler = () => {
        return <Redirect to='/' />
    }
    //delete handler//
    const deleteHandler = () => {
        let  { projectId } = props
        //request to delete project//
        props.deleteProject(projectId)
        props.history.push('/')
    }
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
                    <span className='card-action light-text'>
                        <p>Added By: {project.authorFirstName} {project.authorLastName}</p>
                        <p>{moment(project.createdAt.toDate()).format('MMM Do YYYY')}</p>
                    </span>
                    <span>
                        <button className='btn' onClick={redirectHandler}>Close</button>
                        <button className='btn' onClick={deleteHandler}>Delete</button>
                    </span>
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
        projectId: id,
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose( 
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
    ) (ProjectDetails)
