import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Auth App</h1>
      <div>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/signup" className="mx-2">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
