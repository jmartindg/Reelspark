import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HomeCard from "../Cards/HomeCard";

const getPopularMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const PopularMovies = () => {
  const { data, status } = useQuery("popularMovies", getPopularMovies, { refetchOnWindowFocus: false });

  return (
    <section className="container mx-auto py-4 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">Popular Movies</h2>
        <p className="pt-3 text-zinc-400">This week's popular movies</p>
      </header>

      {status === "success" && (
        <Splide
          tag="section"
          className=""
          aria-label="Popular Movies"
          options={{
            perPage: 5,
            gap: "1.5rem",
            pagination: false,
            breakpoints: {
              820: {
                perPage: 4,
              },
              640: {
                perPage: 4,
              },
              540: {
                perPage: 3,
                gap: "1rem",
              },
              420: {
                perPage: 2,
                gap: "1rem",
              },
            },
          }}
        >
          {data
            .map((movie) => (
              <SplideSlide key={movie.id}>
                <HomeCard title={movie.title} date={movie.release_date} poster={movie.poster_path} />
              </SplideSlide>
            ))
            .slice(0, 10)}
        </Splide>
      )}
    </section>
  );
};

export default PopularMovies;
