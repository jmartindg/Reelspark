import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import TvShowCard from "../../components/Cards/TvShowCard";

const getTopRatedTvShows = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const TopRatedTvShows = () => {
  const { data, status } = useQuery("topRatedTvShows", getTopRatedTvShows, { refetchOnWindowFocus: false });

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  });

  return (
    <section className="container mx-auto py-10 px-4 lg:px-0">
      <header className="mb-6">
        <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2">Top Rated</h2>
        <p className="pt-3 text-zinc-400">Top rated TV shows</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {status === "success" &&
          data.map((tvShow) => (
            <TvShowCard
              id={tvShow.id}
              title={tvShow.name}
              date={tvShow.first_air_date}
              poster={tvShow.poster_path}
              rating={tvShow.vote_average}
            />
          ))}
      </section>
    </section>
  );
};

export default TopRatedTvShows;
