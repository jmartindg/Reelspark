import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../../assets/no-image.png";

const ActorCard = ({ id, name, profile }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <article className="bg-[#1A1A1A] rounded overflow-hidden">
      <Link to={`/actor-details/${id}`}>
        {profile ? (
          <img src={imgUrl + profile} className="aspect-[10/14] cursor-pointer transition hover:opacity-60" alt={name} />
        ) : (
          <img src={NoImage} className="aspect-[10/14] object-cover cursor-pointer transition hover:opacity-60" alt={name} />
        )}
      </Link>
      <section className="py-4 px-3">
        <Link to={`/actor-details/${id}`}>
          <p className="font-medium truncate hover:underline">{name}</p>
        </Link>
      </section>
    </article>
  );
};

export default ActorCard;
