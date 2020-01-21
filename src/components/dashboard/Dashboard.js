import React, { Component } from 'form';

import Notifications from './Notifications';

export default class Dashboard extends Component(){
    render(){
        return(
            <div className='container dashboard'>
                <div className='row'>
                    <div className='col s12 m6'></div>
                    <div className='col s12 m5'>
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}