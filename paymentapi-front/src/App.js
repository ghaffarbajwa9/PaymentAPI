import {AccountList, UserList, PaymentList, Login} from './components';
import  AddPayment  from './components/payments/addpayment/addPayment';
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './error-page';


const root = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
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
  {
    path: "/login",
    element: <Login />,
    errorElement:<ErrorPage />,
  }
]);

function App() {
  return (
        <RouterProvider router={root} />   
  );
}

export default App;