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

  const ulStyle = {
    border: "2px solid black",
    width: "33%",
    margin: "auto",
    padding: "5px",
};

  return users.map(user => <div style={ulStyle}>
    <div>Name:{user.attributes.name}</div>
    <div>Email:{user.attributes.email}</div>
    </div>
    );
}

export default UserList;