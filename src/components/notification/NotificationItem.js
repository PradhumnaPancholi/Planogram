import moment from 'moment';
import React from 'react';

const NotificationItem = (props) => {
    let {notification} = props 
    return(
        <div className='notification'>
            <span>{notification.user} </span>
            <span>{notification.content}</span>
            <div>
                {moment(notification.time.toDate()).fromNow()}
            </div>
        </div>

    )
}

export default NotificationItem