import React from 'react';
import UserItem from "./UserItem";

const UserList = (props) => {
    console.log("WTF");
    if (props.items === undefined) {
        return (
            <div>
                <h2>Not users found </h2>
            </div>
        );
    }
    return (
        <ul>
            {props.items.users.map(user => {
                return <UserItem key={user.id} />;
            })}
        </ul>
    );
};

export default UserList;
