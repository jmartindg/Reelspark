import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CastCard from "../Cards/CastCard";

const getTvShowCast = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
  );
  return res.data.cast;
};

const TvShowCast = () => {
  let { id } = useParams();
  const { data, status } = useQuery(["tvShowCast", id], () => getTvShowCast(id), { refetchOnWindowFocus: false });

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();

    // Fetch cast once the page is loaded
  }, [data]);

  return (
    <section className="container mx-auto px-4 lg:px-0 py-12">
      <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2 mb-4">Cast</h2>

      {status === "success" && (
        <Splide
          tag="section"
          aria-label="Cast"
          options={{
            perPage: 7,
            gap: "1rem",
            pagination: false,
            breakpoints: {
              950: {
                perPage: 6,
              },
              820: {
                perPage: 5,
              },
              640: {
                perPage: 4,
              },
              540: {
                perPage: 3,
              },
              420: {
                perPage: 2,
              },
            },
          }}
        >
          {data.map((actor) => (
            <SplideSlide key={actor.id}>
              <CastCard id={actor.id} name={actor.name} character={actor.character} profile={actor.profile_path} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
};

export default TvShowCast;
