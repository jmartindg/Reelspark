import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import ErrorPage from "./pages/ErrorPage";
import NowPlaying from "./pages/Movies/NowPlaying";
import Upcoming from "./pages/Movies/Upcoming";
import OnTheAir from "./pages/TvShows/OnTheAir";
import TopRated from "./pages/TvShows/TopRatedTvShows";
import MovieDetails from "./pages/Movies/MovieDetails";
import TvShowDetails from "./pages/TvShows/TvShowDetails";
import ActorDetails from "./pages/Actors/ActorDetails";

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
        <Route path="/on-the-air-tv-shows" element={<OnTheAir />} />
        <Route path="/top-rated-tv-shows" element={<TopRated />} />

        {/* Details Pages */}
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/tv-show-details/:id" element={<TvShowDetails />} />

        {/* Actors */}
        <Route path="/actor-details/:id" element={<ActorDetails />} />

        {/* 404 Page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
