import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";
import ChatAPI from './ChatAPI'

export default () => {
    function FriendStatus(props) {
        const [isOnline, setIsOnline] = useState(null);
        useEffect(() => {
            function handleStatusChange(status) {
                setIsOnline(status.isOnline);
            }

            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
                ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
        },[]);


        if (isOnline === null) {
            return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
    }


    function FriendListItem(props) {
        const [isOnline, setIsOnline] = useState(null);
        useEffect(() => {
            function handleStatusChange(status) {
                console.log(status)
                setIsOnline(status.isOnline);
            }
            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
                ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
        },[]);



        return (
            <div style={{ color: isOnline ? 'green' : 'black' }}>
                {props.friend.name}
            </div>
        );
    }

    ReactDOM.render(
        <><FriendStatus friend={{id: 2}}/>
        <FriendListItem  friend={{id: 1,name:'zs'}}/></>,
        document.getElementById('root')
    );
}
