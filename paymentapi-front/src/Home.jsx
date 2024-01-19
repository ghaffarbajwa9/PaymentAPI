import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {isLoggedIn ? (
        <>
          <p>Welcome! You are logged in.</p>
        </>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
}

export default Home;