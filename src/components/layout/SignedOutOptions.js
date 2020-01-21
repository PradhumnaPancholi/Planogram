import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutOptions = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/'>Sign In</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutOptions