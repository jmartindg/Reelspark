import React from "react";
import Hero from "../components/Homepage/Hero";
import NowPlaying from "../components/Homepage/NowPlaying";
import PopularMovies from "../components/Homepage/PopularMovies";
import UpcomingMovies from "../components/Homepage/UpcomingMovies";

const Home = () => {
  return (
    <main>
      <Hero />
      <PopularMovies />
      <section className="container mx-auto flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-6 px-4 lg:px-0">
        <div className="flex-1">
          <NowPlaying />
        </div>
        <div className="flex-1">
          <UpcomingMovies />
        </div>
      </section>
    </main>
  );
};

export default Home;
