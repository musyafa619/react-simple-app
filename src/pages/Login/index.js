import { useState } from "react/cjs/react.development";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      setLoading(false);
      alert("Error login");
      console.log(error);
    } finally {
      navigate("/");
    }
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
      <button
        disabled={!email || !password}
        onClick={handleLogin}
        className="login-button"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}

export default Login;
