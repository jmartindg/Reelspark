import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import MovieCard from "../../components/Cards/MovieCard";
import Loader from "../../components/Loader";

const getPopularMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const Movies = () => {
  const { data, status } = useQuery("popularMovies", getPopularMovies, { refetchOnWindowFocus: false });

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, []);

  return (
    <section className="container mx-auto py-10 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">Movies</h2>
      </header>

      {status === "loading" && (
        <section className="px-4 lg:px-0">
          <div className="min-h-screen container mx-auto flex items-center justify-center">
            <Loader />
          </div>
        </section>
      )}

      {status === "success" && (
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {status === "success" &&
            data.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                date={movie.release_date}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            ))}
        </section>
      )}
    </section>
  );
};

export default Movies;
