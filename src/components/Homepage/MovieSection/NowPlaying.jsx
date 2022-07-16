import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { FiChevronRight } from "react-icons/fi";
import MovieColumnCard from "../../Cards/MovieColumnCard";

const getNowPlayingMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&page=1&region=ph`
  );
  return res.data.results;
};

const NowPlaying = () => {
  const { data, status } = useQuery("nowPlayingMovies", getNowPlayingMovies, { refetchOnWindowFocus: false });

  return (
    <>
      <header className="my-6">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-yellow-500">Now Playing</h2>
          <Link to="/now-playing" title="View more playing movies now">
            <FiChevronRight size={30} className="text-yellow-500 ml-1 transition hover:text-yellow-400" />
          </Link>
        </div>
        <p className="pt-1 text-zinc-400">Playing movies in theatres now</p>
      </header>

      {status === "success" && (
        <div className="flex flex-col gap-3 md:gap-5">
          {data
            .map((nowPlaying) => (
              <MovieColumnCard
                key={nowPlaying.id}
                id={nowPlaying.id}
                title={nowPlaying.title}
                date={nowPlaying.release_date}
                poster={nowPlaying.poster_path}
              />
            ))
            .slice(0, 4)}
        </div>
      )}
    </>
  );
};

export default NowPlaying;
