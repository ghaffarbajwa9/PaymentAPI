import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jwt, setJwt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");
    if (storedJwt) {
      setIsLoggedIn(true);
      setJwt(storedJwt);
    }
    setIsLoading(false);
  }, []);

  function login(token) {
    setIsLoggedIn(true);
    setJwt(token);
    localStorage.setItem("jwt", token);
    console.log("This token"+token)
  }

  function logout() {
    setIsLoggedIn(false);
    setJwt(null);
    localStorage.removeItem("jwt");
  }

  const authValue = {
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };