import React, { useEffect, useState } from 'react';

const UsersComponent = () => {
    const [users ,setUsers] = useState([])
    async function fetchUsers() {
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        setUsers(data.users)
        console.log(users);
    }
    useEffect(()=>{
         fetchUsers()
    },[users])
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
};

export default UsersComponent;