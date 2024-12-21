import React, { useContext, useState } from "react";
import "./Login.css"; // Import custom styles
import { AuthProvider } from "../store/Auth";


const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const {handleLogin} = useContext(AuthProvider);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData)
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
    )
};

export default Login;
