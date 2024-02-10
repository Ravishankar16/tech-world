import React, { useState } from 'react';
import data from '../data.json'


const UserComponent = () => {
  const [users, setUsers] = useState([
    // {
    //   "id": "u1",
    //   "username": "john_doe",
    //   "displayName": "John Doe"
    // },
    // {
    //   "id": "u2",
    //   "username": "jane_smith",
    //   "displayName": "Jane Smith"
    // }
  ]);

  const addUser = () => {
    const newUser = {
      "id": `u${users.length + 1}`, // Generate a unique ID
      "username": "new_user",
      "displayName": "New User"
    };



    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.displayName}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add New User</button>
    </div>
  );
};

export default UserComponent;







