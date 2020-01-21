import React from 'react';
import { Link } from 'react-router-dom';

import SignedInOptions from './SignedInOptions';

const Navbar = () => {
    return(
        <nav>   
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>Planogram</Link>
                <SignedInOptions />
            </div>
        </nav>
    )
}   

export default Navbar
