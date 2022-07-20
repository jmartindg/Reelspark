import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import TvShowCard from "../../components/Cards/TvShowCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const getPopularTvShows = async (page) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${page}`
  );
  return res.data.results;
};

const TvShows = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["popularTvShows", page], () => getPopularTvShows(page), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const nextPage = (page) => {
    setPage(page + 1);
    scrollToTop();
  };

  const previousPage = (page) => {
    setPage(page - 1);
    scrollToTop();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="container mx-auto py-10 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">TV Shows</h2>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {status === "success" &&
          data.map((tvShow) => (
            <TvShowCard
              key={tvShow.id}
              id={tvShow.id}
              title={tvShow.name}
              date={tvShow.first_air_date}
              poster={tvShow.poster_path}
              rating={tvShow.vote_average}
            />
          ))}
      </section>

      <section className="flex items-center justify-center mt-12 space-x-4">
        <button
          type="button"
          className="px-3 py-2 rounded disabled:cursor-not-allowed"
          onClick={() => previousPage(page)}
          disabled={page === 1}
        >
          <FiChevronLeft size={20} />
        </button>
        <span className="font-semibold">{page}</span>
        <button
          type="button"
          className="px-3 py-2 rounded disabled:cursor-not-allowed"
          onClick={() => nextPage(page)}
          disabled={page === 10}
        >
          <FiChevronRight size={20} />
        </button>
      </section>
    </section>
  );
};

export default TvShows;
