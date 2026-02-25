import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Enter valid email");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters");
      return;
    }

    navigate("/user");
  };

  return (
    <div className="center-container">
      <h2>Smart City Login</h2>

      <input
        className="input-box"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input-box"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn" onClick={validateLogin}>
        Login as User
      </button>

      <button className="btn admin-btn" onClick={() => navigate("/admin")}>
        Login as Admin
      </button>
    </div>
  );
}

export default Login;