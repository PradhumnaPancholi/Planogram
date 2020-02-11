import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addProject } from '../../store/actions/projectActions';

export class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addProject(this.state)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    }

    render() {
        const {auth} = this.props
        // for route guarding//
        if(!auth.uid) return <Redirect to='/signin'/>
        // -----------------//
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='create-project-form'>
                    <h4 className='text-center'>Create Project</h4>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
//connecting with action-creators//
const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (project) => dispatch(addProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
