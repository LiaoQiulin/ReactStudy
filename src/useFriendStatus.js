import ReactDOM from "react-dom";
import React, {useEffect, useState, useLayoutEffect} from "react";
import ChatAPI from './ChatAPI'

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    }, []);

    return isOnline;
}


export default () => {

    function FriendStatus(props) {

        const isOnline = useFriendStatus(props.friend.id);

        if (isOnline === null) {
            return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
    }


    function FriendListItem(props) {
        const isOnline = useFriendStatus(props.friend.id);

        return (
            <div style={{color: isOnline ? 'green' : 'black'}}>
                {props.friend.name}
            </div>
        );
    }

    function Black(props) {

  
        return <>{props.children}</>
    }

    class A extends React.Component{

    }

    ReactDOM.render(
        <><Black> <FriendStatus friend={{id: 2}}/>
            <FriendListItem friend={{id: 1, name: 'ls'}}/></Black>

        </>,
        document.getElementById('root')
    );
}
