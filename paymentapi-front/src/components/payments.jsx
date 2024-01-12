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

  return payments.map(payment => <div>{payment.attributes.amount}</div>);
}

export default PaymentList;