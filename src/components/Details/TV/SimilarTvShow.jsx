import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TvShowCard from "../../../components/Cards/TvShowCard";

const getSimilarTvShows = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
  );
  return res.data.results;
};

const SimilarTvShow = () => {
  let { id } = useParams();
  const { data, status } = useQuery(["similarTvShows", id], () => getSimilarTvShows(id), { refetchOnWindowFocus: false });

  return (
    <section className="container mx-auto px-4 lg:px-0">
      <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2 mb-7 mt-12">You may also like</h2>

      {status === "success" && (
        <Splide
          tag="section"
          aria-label="Similar Movies"
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
          {data.map((movie) => (
            <SplideSlide key={movie.id}>
              <TvShowCard
                id={movie.id}
                title={movie.name}
                date={movie.first_air_date}
                poster={movie.poster_path}
                rating={movie.vote_average.toFixed(1)}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
};

export default SimilarTvShow;
