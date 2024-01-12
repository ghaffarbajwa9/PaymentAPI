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

  return accounts.map(account => <div>{account.attributes.name}</div>);
}

export default AccountList;