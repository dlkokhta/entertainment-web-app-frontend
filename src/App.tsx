import "./App.css";
import SignUp from "./pages/signUp";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import Movies from "./pages/movies";
import TVSeries from "./pages/tvSeries";
import Bookmarked from "./pages/bookmarked";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllMovies } from "./store/allMovieSlice.js";

function App() {
  const location = useLocation();
  const showHeader = location.pathname ? "/home" || "/movies" : "";

  const token = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  const url = "http://localhost:3000/api/allMovies";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setAllMovies(response.data));
    };
    fetchMovies();
  }, [token]);
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvSeries" element={<TVSeries />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </>
  );
}

export default App;
