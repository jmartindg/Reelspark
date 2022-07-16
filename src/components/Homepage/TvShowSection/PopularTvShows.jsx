import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TvShowCard from "../../Cards/TvShowCard";

const getPopularTvShows = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const PopularTvShows = () => {
  const { data, status } = useQuery("popularTvShows", getPopularTvShows, { refetchOnWindowFocus: false });

  return (
    <section className="container mx-auto pt-14 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">Popular TV Shows</h2>
        <p className="pt-3 text-zinc-400">This week's popular tv shows</p>
      </header>

      {status === "success" && (
        <Splide
          tag="section"
          aria-label="Popular Tv Shows"
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
            .map((tvShow) => (
              <SplideSlide key={tvShow.id}>
                <TvShowCard
                  id={tvShow.id}
                  title={tvShow.name}
                  date={tvShow.first_air_date}
                  poster={tvShow.poster_path}
                  rating={tvShow.vote_average}
                />
              </SplideSlide>
            ))
            .slice(0, 10)}
        </Splide>
      )}
    </section>
  );
};

export default PopularTvShows;
