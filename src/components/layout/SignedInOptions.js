import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../store/actions/authActions';

const SignedInOptions = (props) => {
    return(
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to='/' className='btn btn-floating white'>U</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut : () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps) (SignedInOptions)