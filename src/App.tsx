import "./App.css";
import SignUp from "./pages/signUp";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showHeader = location.pathname === "/home";
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
