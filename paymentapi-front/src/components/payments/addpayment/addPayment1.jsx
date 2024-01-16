import React from "react";
import {useNavigate as navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

function AddPayment() {
  const handleSubmit = values => {
    const requestPayments = async () => {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      const response = await fetch("http://localhost:3000/api/v1/payments", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: values })
      });
      if (response.status === 201) {
        navigate("/");
      }
      else{
        console.log("Data is not submitted")
      }
    };
    requestPayments();
  };

  return (
    <div>
      <h2>Add your Payment</h2>
      <Formik
        initialValues={{
          type: "payments",
          attributes: {
            amount: "",
            date: Date.now(),
            account_id: "",
            user_id: ""
          }
        }}
        onSubmit={handleSubmit}
      >{() => (
        <Form>
          <label htmlFor="Amount">Amount:</label>
          <Field type="text" name="attributes.amount" /><br/>
          <label htmlFor="Date">Date:</label>
          <Field type="text" name="attributes.date" /><br/>
          <label htmlFor="Account_id">Account_id:</label>
          <Field type="text" name="attributes.account_id" /><br/>
          <label htmlFor="user_id">user_id:</label>
          <Field type="text" name="attributes.user_id" /><br/>

          <button type="button">Create</button>
        </Form>
      )}</Formik>
    </div>
  );
}

export default AddPayment;