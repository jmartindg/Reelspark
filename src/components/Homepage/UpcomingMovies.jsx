import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { FiChevronRight } from "react-icons/fi";
import ColumnCard from "../Cards/ColumnCard";

const getUpcomingMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const UpcomingMovies = () => {
  const { data, status } = useQuery("upcomingMovies", getUpcomingMovies, { refetchOnWindowFocus: false });

  return (
    <>
      <header className="my-6">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-yellow-500">Upcoming Movies</h2>
          <Link to="/upcoming-movies" title="View more upcoming movies">
            <FiChevronRight size={30} className="text-yellow-500 ml-1 transition hover:text-yellow-400" />
          </Link>
        </div>
        <p className="pt-1 text-zinc-400">Upcoming movies in theatres</p>
      </header>

      {status === "success" && (
        <div className="flex flex-col gap-3 md:gap-5">
          {data
            .map((upcoming) => (
              <ColumnCard
                key={upcoming.id}
                title={upcoming.title}
                date={upcoming.release_date}
                poster={upcoming.poster_path}
              />
            ))
            .slice(0, 4)}
        </div>
      )}
    </>
  );
};

export default UpcomingMovies;
