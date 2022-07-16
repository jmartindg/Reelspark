import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import ErrorPage from "./pages/ErrorPage";
import NowPlaying from "./pages/Movies/NowPlaying";
import Upcoming from "./pages/Movies/Upcoming";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />

        {/* Movies */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/upcoming-movies" element={<Upcoming />} />

        {/* TV Shows */}
        <Route path="/tv-shows" element={<TvShows />} />

        {/* 404 Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
