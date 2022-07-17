import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import BrowseCard from "../components/Cards/BrowseCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import StartSearching from "../components/StartSearching";
import SearchBar from "../components/SearchBar";

const multiSearch = async (searchValue) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&query=${searchValue}&page=1&include_adult=false`
  );
  return res.data.results;
};

const Browse = () => {
  // Set search value
  const [searchValue, setSearchValue] = useState("");

  const { data, status, error } = useQuery(["search", searchValue], () => multiSearch(searchValue), {
    refetchOnWindowFocus: false,
    enabled: searchValue.length > 3 || searchValue.length === 3,
  });

  // Handle search input results
  const submit = (event) => {
    event.preventDefault();
    const search = new FormData(event.target).get("search");

    if (search) {
      setSearchValue(search);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="container mx-auto py-10 px-4 lg:px-0">
      <header className="mb-6">
        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <h2 className="font-semibold text-2xl text-yellow-500 pb-2 md:pb-0">Browse</h2>
          <SearchBar submit={submit} searchValue={searchValue} handleChange={handleChange} />
        </div>
      </header>

      {status === "idle" && <StartSearching />}

      {status === "loading" && <Loader />}

      {status === "error" && <ErrorMessage error={error.message} />}

      {status === "success" && (
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {data.map((result) => (
            <BrowseCard
              key={result.id}
              id={result.id}
              title={result.name || result.title}
              date={result.first_air_date || result.release_date}
              poster={result.poster_path || result.profile_path}
              rating={result.vote_average}
              media={result.media_type}
              known={result.known_for_department}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default Browse;
