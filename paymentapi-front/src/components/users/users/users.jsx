import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const requestUsers = async () => {
      const response = await fetch("http://localhost:3000/api/v1/users");
      const { data } = await response.json();
      setUsers(data);
    };
    requestUsers();
  }, []);

  return users.map(user => <div>{user.attributes.name}</div>);
}

export default UserList;