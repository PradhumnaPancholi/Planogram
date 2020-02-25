import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUp } from '../../store/actions/authActions';

const SignUp = (props) => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.signUp(data)
    }

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const { auth } = props
    // redirect if logged in//
    if(auth.uid) return <Redirect to='/'/>
    //else render component//
    return(
            <div className='container'>
                <form onSubmit={handleSubmit} className='sign-up-form'>
                    <h4>Sign Up</h4>
                    <div className='input-field'>
                        <label htmlFor='firstName'>FirstName</label>
                        <input type='text' value={data.firstName} name='firstName' id='firstName' onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>LastName</label>
                        <input type='text' value={data.lastNme} name-='lastName' id='lastName' onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' value={data.email} name='email' id='email' onChange={handleInputChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' value={data.password} name='password' id='password' onChange={handleInputChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn lighten-1'>Sign Up</button>
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
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
