import "./App.css";
import SignUp from "./pages/signUp";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/blog/:id" element={<BlogByID />} /> */}
      </Routes>
    </>
  );
}

export default App;
