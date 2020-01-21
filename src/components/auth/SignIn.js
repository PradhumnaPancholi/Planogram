import React, { Component } from 'react';

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
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
                    <h4>Sign In</h4>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
