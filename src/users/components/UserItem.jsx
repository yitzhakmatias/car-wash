import React from 'react';


const UserItem = (props) => {

    return (
        <li>
            <div><h2 className="title"> {props.user.name}</h2></div>
            <div>{props.user.lastName}</div>
            <div>{props.user.phone}</div>
        </li>
    );
};

export default UserItem;
