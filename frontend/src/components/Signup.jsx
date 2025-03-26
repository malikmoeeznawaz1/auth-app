import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(formData.email, formData.password, formData.confirmPassword);

    if (response.success) {
      setMessage("Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage(response.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Signup</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="block w-full p-2 mb-2 border" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="block w-full p-2 mb-4 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
