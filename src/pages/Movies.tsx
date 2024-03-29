import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Title from "../components/Title";
import Loader from "../components/placeholders/Loader";
import Card from "../components/cards/Card";

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const getPopularMovies = async (page: number) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`
  );
  return res.data.results;
};

const Movies = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["popularMovies", page], () => getPopularMovies(page), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const nextPage = (page: number) => {
    setPage(page + 1);
    scrollToTop();
  };

  const previousPage = (page: number) => {
    setPage(page - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
    document.title = "Reelspark - Movies";
  }, []);

  return (
    <section className="container px-4 py-10">
      <header className="mb-6">
        <Title title="Movies" />
      </header>

      {status === "loading" && (
        <section className="px-4 lg:px-0">
          <div className="container mx-auto flex min-h-screen items-center justify-center">
            <Loader />
          </div>
        </section>
      )}

      {status === "success" && (
        <>
          <section className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
            {status === "success" &&
              data.map((movie: MovieProps) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  date={movie.release_date}
                  poster={movie.poster_path}
                  rating={movie.vote_average}
                  path="movie-details"
                />
              ))}
          </section>
          <section className="mt-12 flex items-center justify-center space-x-4">
            <button
              aria-label="Previous"
              type="button"
              className="rounded bg-yellow-500 px-3 py-2 hover:bg-yellow-400 disabled:cursor-not-allowed"
              onClick={() => previousPage(page)}
              disabled={page === 1}
            >
              <FiChevronLeft size={20} color="#000" />
            </button>
            <button
              aria-label="Next"
              type="button"
              className="rounded bg-yellow-500 px-3 py-2 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-yellow-300"
              onClick={() => nextPage(page)}
            >
              <FiChevronRight size={20} color="#000" />
            </button>
          </section>
        </>
      )}
    </section>
  );
};

export default Movies;
