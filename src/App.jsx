import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import ProtectedRouter from "./router/ProtectedRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRouter />}>
              <Route path="/protected" element={<Test />} />
            </Route>
          </Routes>
        </NavBar>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
