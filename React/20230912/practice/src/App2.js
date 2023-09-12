import React from 'react'


function UserItem({user}){
    return(
        <li>
            {user.name}
            <div>
                <div>email: {user.email}</div>
                <div>job: {user.job}</div>
            </div>
        </li>
    )
}

function UserList ({users}){
    return(
        <ul>
            {users.map((item) => {
                return <UserItem key={item.id} user={item} /> 
            })}
        </ul>
    )
}


export default function App2() {

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ];
    return (
        <div>
            <h1>User list</h1>
            <UserList users={users} />
        </div>
    )
}
