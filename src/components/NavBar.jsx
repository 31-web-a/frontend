import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>NavBar</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/protected">protected</Link>
        </li>
      </ul>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      <div>{children}</div>
    </div>
  );
};

export default NavBar;
