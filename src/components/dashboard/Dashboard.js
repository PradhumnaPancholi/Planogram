import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component{
    render(){
        const {projects, notifications, auth} = this.props

        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div className='container dashboard'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <ProjectList projects={projects}/>
                    </div>
                    <div className='col s12 m5'>
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

//to get state from reducer//
const mapStateToProps = (state) => {
    console.log(state)
    return { 
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'},
        { notifications: 'notifications', limit: 5}
    ])
)(Dashboard)