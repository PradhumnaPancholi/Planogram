import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from '../../store/actions/authActions';

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    }

    render() {
        const { authError, auth } = this.props
        // redirect if logged in//
        if(auth.uid) return <Redirect to='/'/>
        //else render component//
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='sign-in-form'>
                    <h4>Sign In</h4>
                    {/* conditional rendering for error*/}
                    { authError ? <p>{authError}</p> : null} 
                    {/* ------------------------------ */}
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

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SignIn)
