import React from "react";
import Hero from "../components/Homepage/Hero";
import NowPlaying from "../components/Homepage/MovieSection/NowPlaying";
import PopularMovies from "../components/Homepage/MovieSection/PopularMovies";
import PopularTvShows from "../components/Homepage/TvShowSection/PopularTvShows";
import UpcomingMovies from "../components/Homepage/MovieSection/UpcomingMovies";
import OnTheAir from "../components/Homepage/TvShowSection/OnTheAir";
import TopRatedTvShows from "../components/Homepage/TvShowSection/TopRatedTvShows";

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
      <PopularTvShows />
      <section className="container mx-auto flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-6 px-4 pt-5 lg:px-0">
        <div className="flex-1">
          <OnTheAir />
        </div>
        <div className="flex-1">
          <TopRatedTvShows />
        </div>
      </section>
    </main>
  );
};

export default Home;
