import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../../assets/no-image.png";

const CastCard = ({ id, name, character, profile }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <article>
      <Link to={`/actor-details/${id}`}>
        {profile ? (
          <img
            src={imgUrl + profile}
            className="rounded aspect-[10/14] cursor-pointer transition hover:opacity-60"
            alt={name}
          />
        ) : (
          <img
            src={NoImage}
            className="rounded aspect-[10/14] object-cover cursor-pointer transition hover:opacity-60"
            alt={name}
          />
        )}
      </Link>
      <section className="py-4">
        <Link to={`/actor-details/${id}`}>
          <p className="font-medium hover:underline">{name}</p>
        </Link>
        <p className="text-sm font-light text-gray-300 pt-1">{character}</p>
      </section>
    </article>
  );
};

export default CastCard;
