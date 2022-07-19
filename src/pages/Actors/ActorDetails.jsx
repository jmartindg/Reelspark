import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import NoImage from "../../assets/no-image.png";
import ReadMore from "../../components/Details/ReadMore";
import Loader from "../../components/Loader";

const getActorDetails = async (id) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
  );
  return res.data;
};

const ActorDetails = () => {
  let { id } = useParams();
  const { data, status } = useQuery(["actorDetails", id], () => getActorDetails(id), { refetchOnWindowFocus: false });
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const fullDate = { year: "numeric", month: "long", day: "numeric" };
  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  const gender = (gender) => {
    if (gender === 2) {
      return "Male";
    } else if (gender === 1) {
      return "Female";
    } else {
      return "-";
    }
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();

    // Fetch actor details once the page is loaded
  }, [data]);

  return (
    <>
      {status === "loading" && (
        <section className="px-4 lg:px-0">
          <div className="min-h-screen container mx-auto flex items-center justify-center">
            <Loader />
          </div>
        </section>
      )}

      {status === "success" && (
        <section className="min-h-screen container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-8 items-center py-16 lg:py-0">
          {/* Actor profile image */}
          <section className="flex-2">
            {data.profile_path ? (
              <img src={imgUrl + data.profile_path} className="w-64 md:w-80 rounded mx-auto" alt={data.name} />
            ) : (
              <img src={NoImage} className="w-64 md:w-80 rounded mx-auto" alt={data.name} />
            )}
          </section>
          <section className="flex-1">
            <h2 className="font-bold text-2xl lg:text-3xl">{data.name}</h2>
            {/* Actor biography */}
            <div className="my-4">
              <h3 className="text-gray-50 font-semibold text-xl pb-2">Biography</h3>
              <p>
                {data.biography.length < 300 ? (
                  data.biography
                ) : (
                  <ReadMore maxCharacterCount={300}>{data.biography}</ReadMore>
                )}
              </p>
            </div>

            <article className="grid grid-cols-1 md:grid-cols-2">
              <section className="my-4">
                <h3 className="text-white font-semibold text-lg pb-2">Known For</h3>
                <p className="text-white md:text-sm lg:text-base">{data.known_for_department}</p>
              </section>

              <section className="my-4">
                <h3 className="text-white font-semibold text-lg pb-2">Gender</h3>
                <p className="text-white md:text-sm lg:text-base">{gender(data.gender)}</p>
              </section>

              <section className="my-4">
                <h3 className="text-white font-semibold text-lg pb-2">Birthday</h3>
                <p className="text-white md:text-sm lg:text-base">{fullFormatDate(data.birthday)}</p>
              </section>

              <section className="my-4">
                <h3 className="text-white font-semibold text-lg pb-2">Place of Birth</h3>
                <p className="text-white md:text-sm lg:text-base">{data.place_of_birth}</p>
              </section>
            </article>
          </section>
        </section>
      )}
    </>
  );
};

export default ActorDetails;
