import "./App.css";
import SignUp from "./pages/signUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/blog/:id" element={<BlogByID />} /> */}
      </Routes>
    </>
  );
}

export default App;
