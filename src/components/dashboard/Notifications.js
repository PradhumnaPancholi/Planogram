import moment from 'moment';
import React from 'react';

const Notifications = (props) => {
    const {notifications} = props
    return (
        <div className='notification-center section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <div className='card-title'> Notifications</div>
                    <ul className='notifications'>
                        {/* render notifications if exist - may change this with reusable component*/}
                        { notifications && notifications.map(notification => {
                            return(
                                <li key={notification.id}>
                                    <span>{notification.user} </span>
                                    <span>{notification.content}</span>
                                    <div>
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications

