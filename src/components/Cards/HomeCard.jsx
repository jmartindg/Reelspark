import React from "react";

const HomeCard = ({ title, date, poster }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const fullDate = { year: "numeric", month: "short", day: "numeric" };
  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  return (
    <article className="bg-[#1A1A1A] rounded overflow-hidden">
      <img src={imgUrl + poster} className="aspect-[10/14]" alt={title} />
      <section className="py-4 px-3">
        <h3 className="font-medium truncate">{title}</h3>
        <span className="text-sm font-light">{fullFormatDate(date)}</span>
      </section>
    </article>
  );
};

export default HomeCard;
