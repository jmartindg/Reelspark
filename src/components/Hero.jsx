import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const getBackdropImage = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results[Math.floor(Math.random() * 21)].backdrop_path;
};

const Hero = () => {
  const { data } = useQuery("backdrop", getBackdropImage, { refetchOnWindowFocus: false });
  const imgUrl = "https://image.tmdb.org/t/p/original/" + data;

  return (
    <section className="px-4 lg:px-0">
      <div style={{ backgroundImage: `url(${imgUrl})` }} className="hero-container">
        <div className="absolute w-full h-full top-0 inset-x-0 bg-black opacity-60"></div>
        <h1 className="hero-text z-10">Browse and Discover collections of Movies and TV Shows for free.</h1>
        <div className="text-center lg:text-left z-10">
          <Link to="/browse" className="hero-cta">
            Browse
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
