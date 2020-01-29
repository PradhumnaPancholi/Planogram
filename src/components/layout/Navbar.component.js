import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignedInOptions from './SignedInOptions';
import SignedOutOptions from './SignedOutOptions';

const Navbar = () => {
    return(
        <nav>   
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>Planogram</Link>
                <SignedInOptions />
                <SignedOutOptions />
            </div>
        </nav>
    )
}   

const mapStateToProps = (state) => {
    console.log(state.firebase.auth)
    return{

    }
}
 export default connect(mapStateToProps) (Navbar)
