import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addProject } from '../../store/actions/projectActions';

const CreateProject = (props) => {

    //for state of form//
    const [data, setData] = useState({
        title: '',
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addProject(data)
        props.history.push('/')
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setData({
            //to avoid mutating//
            ...data,
            //to set values//
            [name]: value
        })
    }
    const {auth} = props
    // for route guarding//
    if(!auth.uid) return <Redirect to='/signin'/>
    
        return(
            <div className='container'>
                <form onSubmit={handleSubmit} className='create-project-form'>
                    <h4 className='text-center'>Create Project</h4> 
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' value={data.title} name='title' id='title' onChange={handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea id='content' value={data.content} name='content' className='materialize-textarea' onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Save</button>
                    </div>
                </form>
            </div>
        )
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
