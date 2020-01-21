import React, { Component } from 'react';

export class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <h4>Sign Up</h4>
                    <div className='input-field'>
                        <label htmlFor='firstName'>FirstName</label>
                        <input type='text' id='firstName' onChange={this.handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>LastName</label>
                        <input type='text' id='lastName' onChange={this.handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
