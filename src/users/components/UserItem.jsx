import React from 'react';


const UserItem = (props) => {

    return (
        <li>
            <div><h2 className="title"> {props.user.firstName}</h2></div>
            <div>{props.user.phone}</div>
            <div>{props.user.company}</div>
        </li>
    );
};

export default UserItem;
