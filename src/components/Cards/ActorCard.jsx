import React from "react";

const ActorCard = ({ name, profile }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <article className="bg-[#1A1A1A] rounded overflow-hidden">
      <img src={imgUrl + profile} alt={name} />
      <section className="py-4 px-3">
        <p className="truncate">{name}</p>
      </section>
    </article>
  );
};

export default ActorCard;
