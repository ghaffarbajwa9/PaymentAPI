import React, { useEffect, useState } from "react";

function PaymentList() {
  const [payments, setPayments] = useState([]);


  useEffect(() => {
    const requestPayments = async () => {
      const response = await fetch("http://localhost:3000/api/v1/payments");
      const { data } = await response.json();
      setPayments(data);
    };
    
    requestPayments();
  }, []);
  const ulStyle = {
    border: "2px solid black",
    width: "33%",
    margin: "auto",
    padding: "5px",
};

  return payments.map(payment => <div style={ulStyle}>
    <div>Amount:{payment.attributes.amount}</div>
    <div>Date:{payment.attributes.date}</div>
    <div>Account:{payment.attributes.account_id}</div>
    <div>User:{payment.attributes.user_id}</div>
    </div>);
}

export default PaymentList;