import React, { Component } from 'react';

export class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='sign-in-form'>
                    <h4>Create Project</h4>
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

export default CreateProject
