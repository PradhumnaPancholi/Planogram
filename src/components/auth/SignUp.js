import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authActions';

export class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    }

    render() {
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

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(null, mapDispatchToProps)(SignUp)
