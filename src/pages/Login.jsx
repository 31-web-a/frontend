import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Mandar llamara a nuestro back /auth/login

    if (formData.email != "" && formData.password != "") {
      try {
        const response = await api.post("/auth/login", formData);
        login(response.data.token);
        navigate("/protected");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/protected");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <form>
        <label>Correo</label>
        <input
          autoComplete="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <label>Contraseña</label>
        <input
          autoComplete="current-password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
