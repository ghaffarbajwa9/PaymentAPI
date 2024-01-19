import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {email: email, password: password}
          const jwtToken = "fake-jwt-token";
          axios.post('http://localhost:3000/api/v1/login', {user}, {withCredentials: true})
               .then(response=>{
                if(response.data.logged_in){
                  navigate("/profile", {replace: true})
                  login(jwtToken)
                }else{
                  logout()
                }
               })
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
