import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from '../../store/actions/authActions';

const SignIn = (props) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.signIn(data)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const { authError, auth } = props
    // redirect if logged in//
    if(auth.uid) return <Redirect to='/'/>
    //else render component//
        return(
            <div className='container'>
                <form onSubmit={handleSubmit} className='sign-in-form'>
                    <h4>Sign In</h4>
                    {/* conditional rendering for error*/}
                    { authError ? <p>{authError}</p> : null} 
                    {/* ------------------------------ */}
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={data.email} id='email' onChange={handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' value={data.password} id='password' onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Login</button>
                    </div>
                </form>
            </div>
        )
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
