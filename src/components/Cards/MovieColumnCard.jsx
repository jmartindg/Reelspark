import React from "react";
import { Link } from "react-router-dom";

const ColumnCard = ({ id, title, date, poster }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const fullDate = { year: "numeric", month: "short", day: "numeric" };
  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  return (
    <Link to={`/movie-details/${id}`}>
      <article className="bg-[#1A1A1A] flex items-center rounded overflow-hidden transition hover:bg-opacity-60">
        <img src={imgUrl + poster} className="w-16 h-24 object-cover" alt={title} />
        <section className="pl-4">
          <h3 className="font-medium">{title}</h3>
          <span className="text-sm font-light">{fullFormatDate(date)}</span>
        </section>
      </article>
    </Link>
  );
};

export default ColumnCard;
