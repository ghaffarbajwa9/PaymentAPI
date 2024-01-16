import React, { useEffect, useState } from "react";

function AccountList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const requestAccounts = async () => {
      const response = await fetch("http://localhost:3000/api/v1/accounts");
      const { data } = await response.json();
      setAccounts(data);
    };
    requestAccounts();
  }, []);

  const ulStyle = {
    border: "2px solid black",
    width: "33%",
    margin: "auto",
    padding: "5px",
};

  return accounts.map(account => <div style={ulStyle}>
    <div>Name:{account.attributes.name}</div>
    <div>Balance:{account.attributes.balance}</div>
    <div>User_id:{account.attributes.user_id}</div>
    </div>);
}

export default AccountList;