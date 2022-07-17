import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ActorCard from "../Cards/ActorCard";

const getPopularActors = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const ActorsAvatar = () => {
  const { data, status } = useQuery("popularActors", getPopularActors, { refetchOnWindowFocus: false });

  return (
    <section className="container mx-auto pt-12 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">Popular Actors</h2>
        <p className="pt-3 text-zinc-400">Popular actors today</p>
      </header>

      {status === "success" && (
        <Splide
          tag="section"
          aria-label="Popular Actors"
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
          {data.map((actor) => (
            <SplideSlide key={actor.id}>
              <ActorCard name={actor.name} profile={actor.profile_path} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
};

export default ActorsAvatar;
