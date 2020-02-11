import React from 'react';

import NotificationItem from '../notification/NotificationItem';

const Notifications = (props) => {
    const {notifications} = props
    return (
        <div className='notification-center section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <div className='card-title'> Notifications</div>
                    <div className='notifications'>
                        {/* render notifications if exist - may change this with reusable component*/}
                        { notifications && notifications.map(notification => {
                            return(
                                <NotificationItem key={notification.id} notification={notification}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications

