import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { FiChevronRight } from "react-icons/fi";
import ColumnCard from "../../Cards/ColumnCard";

const getOnTheAirTvShows = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

const OnTheAir = () => {
  const { data, status } = useQuery("onTheAirTvShows", getOnTheAirTvShows, { refetchOnWindowFocus: false });

  return (
    <>
      <header className="my-6">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-yellow-500">On the Air</h2>
          <Link to="/on-the-air-tv-shows" title="View more playing movies now">
            <FiChevronRight size={30} className="text-yellow-500 ml-1 transition hover:text-yellow-400" />
          </Link>
        </div>
        <p className="pt-1 text-zinc-400">TV shows currently on air</p>
      </header>

      {status === "success" && (
        <div className="flex flex-col gap-3 md:gap-5">
          {data
            .map((onTheAir) => (
              <ColumnCard
                key={onTheAir.id}
                title={onTheAir.name}
                date={onTheAir.first_air_date}
                poster={onTheAir.poster_path}
              />
            ))
            .slice(0, 4)}
        </div>
      )}
    </>
  );
};

export default OnTheAir;
