import { useState } from "react/cjs/react.development";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "1234555555");
    navigate("/");
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="text"
        className="login-input"
        name="search"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="text"
        className="login-input"
        name="search"
        placeholder="Password"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default Login;
