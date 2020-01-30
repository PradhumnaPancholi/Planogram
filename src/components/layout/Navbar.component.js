import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignedInOptions from './SignedInOptions';
import SignedOutOptions from './SignedOutOptions';

const Navbar = (props) => {
    console.log(props)
    //logic to verify auth status and show links accordingly//
    let visibleLinks
    if(props.auth.uid){
        visibleLinks = <SignedInOptions />
    }else{
        visibleLinks = <SignedOutOptions />
    }

    return(
        <nav>   
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>Planogram</Link>
                {visibleLinks}
            </div>
        </nav>
    )
}   

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}
 export default connect(mapStateToProps) (Navbar)
