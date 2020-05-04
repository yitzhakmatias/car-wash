import React, {useState, useEffect} from "react";
import UserList from "../components/UserList.jsx";
import user from "../../Data/user.json";
import axios from 'axios';


const initialState = {
    user
};
const UserView = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {

        return await axios.get(`https://car-wash-services.herokuapp.com/api/user`)
            .then(res => {

                const userData =res.data;
                setUsers(userData);
              //  console.log("PEPE this is Sparta " + users);
            })
    };
    useEffect(() => {
        //console.log("init data");
        getUsers();
    }, []);

    return (
        <div>
            <UserList users={users}/>
            <label>Thi is the OK page called Users</label>
        </div>);
};
export default UserView;
