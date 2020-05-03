import React from 'react';
import UserItem from "./UserItem";

const UserList = (props) => {
    console.log(props.users);
    if (props.users === undefined) {
        return (
            <div>
                <h2>Not users found </h2>
            </div>
        );
    }
    return (
        <ul>
            {props.users.map(user => {
                return <UserItem key={user.id} user={user} />;
            })}
        </ul>
    );
};

export default UserList;
