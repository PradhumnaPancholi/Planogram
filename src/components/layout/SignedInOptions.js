import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInOptions = () => {
    return(
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating white'>U</NavLink></li>
        </ul>
    )
}

export default SignedInOptions