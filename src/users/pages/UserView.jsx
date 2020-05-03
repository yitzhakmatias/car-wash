import React from "react";
import UserList from "../components/UserList.jsx";
import user from "../../Data/user.json";

const initialState = {
    user
};
const UserView = () => {
    return (
        <div>
            <UserList users={initialState.user}/>
            <label>Thi is the OK page called Users</label>
        </div>);
};
export default UserView;
