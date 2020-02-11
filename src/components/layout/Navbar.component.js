import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignedInOptions from './SignedInOptions';
import SignedOutOptions from './SignedOutOptions';

const Navbar = (props) => {
    //logic to verify auth status and show links accordingly//
    let visibleLinks

    if(props.auth.uid){
        // get user data to display initials in navbar //
        let userFirstName = props.userProfile.firstName
        let userInitial = userFirstName ? userFirstName.charAt(0) : 'U'

        visibleLinks = <SignedInOptions userInitial={userInitial}/>
    }else{
        visibleLinks = <SignedOutOptions />
    }

    return(
        <nav>   
            <div className='nav-wrapper'>
                <Link to='/' className=' left brand-logo'>Planogram</Link>
                {visibleLinks}
            </div>
        </nav>
    )
}   

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        userProfile: state.firebase.profile
    }
}
 export default connect(mapStateToProps) (Navbar)
