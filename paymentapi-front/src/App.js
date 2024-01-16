import React, { Component } from 'react';
import axios from 'axios';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {AccountList, UserList, PaymentList} from './components';
import  AddPayment  from './components/payments/addpayment/AddPayment';
import ErrorPage from './error-page';
import Login from './components/users/Login';
import Signup from './components/users/Signup';



const rout = createBrowserRouter([
    {
        path: "/",
        element: <UserList />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/users",
        element: <UserList />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/accounts",
        element: <AccountList />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/payments",
        element: <PaymentList />,
        errorElement:<ErrorPage />,
      },
      {
        path: "/addpayment",
        element: <AddPayment />,
        errorElement:<ErrorPage />,
      },
])
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false,
            user: {}
        };}
        componentDidMount=()=>{
            this.loginStatus()
          };
        loginStatus = () => {
            axios.get('http://localhost:3000/api/v1/logged_in', 
           {withCredentials: true})    
        .then(response => {
              if (response.data.logged_in) {
                this.handleLogin(response)
              } else {
                this.handleLogout()
              }
            })
            .catch(error => console.log('api errors:', error))
          };
        handleLogin = (data) => {
            this.setState({
              isLoggedIn: true,
              user: data.user
            })
          }
        handleLogout = () => {
            this.setState({
            isLoggedIn: false,
            user: {}
            })

  };
render() {
    return (
      <div>
        <RouterProvider router={rout} />
      </div>
    );
  }
};
export default App;