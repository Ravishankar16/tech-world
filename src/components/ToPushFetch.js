import React, { useState, useEffect } from 'react';
import data from '../data.json'

const ToPushFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the data.json file
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data.json');
        const jsonData = await response.json();
        setUsers(jsonData.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const createNewUser = async () => {
    const newUser = {
    //   id: `u${Date.now()}`,
      id: `u${users.length + 1}`,
      username: 'new_user',
      displayName: 'New User',
    };

    // Update the state with the new user
    setUsers([...users, newUser]);
  };

  const renderUsernames = () => {
    const sortedUsers = [...users].sort((a, b) => b.username.localeCompare(a.username));
    return sortedUsers.map((user) => (
      <li key={user.id}>{user.username}</li>
    ));
  };

  return (
    <div>
      <button onClick={createNewUser}>Create New User</button>
      <h2>Usernames (Descending Order)</h2>
      <ul>
        {renderUsernames()}
      </ul>
    </div>
  );
};

export default ToPushFetch;
