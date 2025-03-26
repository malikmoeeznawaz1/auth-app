import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData.email, formData.password);

    if (response.token) {
      localStorage.setItem("token", response.token);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } else {
      setMessage(response.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block w-full p-2 mb-4 border" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
