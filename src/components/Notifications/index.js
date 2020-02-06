import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="764ba2" size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notification unread>
                        <p> 10 </p>
                        <time>2 days ago</time>
                        <button type="button">Mark as read</button>
                    </Notification>
                    <Notification>
                        <p> 10 </p>
                        <time>2 days ago</time>
                        <button type="button">Mark as read</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
