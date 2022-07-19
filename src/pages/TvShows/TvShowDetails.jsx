import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import NoImage from "../../assets/no-image.png";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import TvShowCast from "../../components/Details/TV/TvShowCast";
import TvShowMoreInfo from "../../components/Details/TV/TvShowMoreInfo";
import TvShowReview from "../../components/Details/TV/TvShowReview";

const getTvShowDetails = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
  );
  return res.data;
};

const TvShowDetails = () => {
  let { id } = useParams();
  const { data, status } = useQuery(["tvShowDetails", id], () => getTvShowDetails(id), { refetchOnWindowFocus: false });
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const shortDate = { year: "numeric" };
  const fullDate = { year: "numeric", month: "long", day: "numeric" };

  const shortFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", shortDate);
  };

  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();

    // Fetch tv show details once the page is loaded
  }, [data]);

  return (
    <section>
      {status === "error" && <ErrorMessage />}

      {status === "loading" && (
        <section className="px-4 lg:px-0">
          <div className="min-h-screen container mx-auto flex items-center justify-center">
            <Loader />
          </div>
        </section>
      )}

      {/* Hero section */}
      {status === "success" && (
        <section
          style={{ backgroundImage: `url(${imgUrl + data.backdrop_path})` }}
          className="relative bg-gray-800 bg-no-repeat bg-cover"
        >
          <div className="absolute inset-x-0 bg-[#131312] bg-opacity-80 w-full h-full"></div>
          <div className="min-h-screen container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-8 items-center py-16 lg:py-0">
            {/* TV Show poster image */}
            <section className="flex-2 z-10">
              {data.poster_path ? (
                <img src={imgUrl + data.poster_path} className="w-64 md:w-80 rounded mx-auto" alt={data.title} />
              ) : (
                <img src={NoImage} className="w-64 md:w-80 rounded mx-auto" alt={data.title} />
              )}
            </section>
            <section className="flex-1 z-10">
              {/* TV Show title & release year */}
              <h2 className="font-bold text-2xl lg:text-3xl">
                {data.name} <span className="font-normal text-gray-300">({shortFormatDate(data.first_air_date)})</span>
              </h2>

              {/* TV Show full release date, genre, and runtime */}
              <p className="pt-2 font-light tracking-wide text-sm md:text-base">
                {fullFormatDate(data.first_air_date)} &bull;{" "}
                {data.genres.map((genre, index) => (
                  <span key={genre.id}>{(index ? ", " : "") + genre.name}</span>
                ))}{" "}
                &bull; <span>{data.episode_run_time}m</span>
              </p>

              {/* TV Show rating */}
              <div className="flex items-center my-4">
                <AiFillStar size={25} className="text-yellow-500 mr-1" />{" "}
                <span className="text-gray-300 text-base md:text-lg truncate">{data.vote_average}</span>
              </div>

              {/* TV Show tagline */}
              {data.tagline && <span className="text-gray-300 text-lg italic">{data.tagline}</span>}

              {/* TV Show overview */}
              <div className="my-4">
                <h3 className="text-gray-50 font-semibold text-xl pb-2">Overview</h3>
                <p className="text-gray-50">{data.overview}</p>
              </div>

              {/* TV Show producers */}
              <div className="my-4">
                <h3 className="text-white font-semibold text-lg pb-2">Producers</h3>
                <p className="text-white md:text-sm lg:text-base">
                  {data.production_companies.map((production, index) => (
                    <span key={index}>{(index ? ", " : "") + production.name}</span>
                  ))}
                </p>
              </div>

              {/* TV Show spoken languages */}
              <div>
                <h3 className="text-white font-semibold text-lg pb-2">Spoken Languages</h3>
                <p className="text-white md:text-sm lg:text-base">
                  {data.spoken_languages.map((language, index) => (
                    <span key={index}>{(index ? ", " : "") + language.english_name}</span>
                  ))}
                </p>
              </div>
            </section>
          </div>
        </section>
      )}

      {/* TV Show cast */}
      <TvShowCast />

      <section className="container mx-auto px-4 lg:px-0 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          {/* TV Show reviews */}
          <TvShowReview />
        </div>
        <div className="md:col-span-4">
          {/* TV Show info */}
          {status === "success" && (
            <TvShowMoreInfo
              website={data.homepage}
              first_air={data.first_air_date}
              last_air={data.last_air_date}
              status={data.status}
              type={data.type}
              networks={data.networks}
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default TvShowDetails;
