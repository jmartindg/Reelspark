import React from "react";
import { AiFillStar } from "react-icons/ai";

const HomeCard = ({ title, date, poster, rating }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const fullDate = { year: "numeric", month: "short", day: "numeric" };
  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  if (rating === 0) {
    rating = "No Ratings Yet";
  }

  return (
    <article className="bg-[#1A1A1A] rounded overflow-hidden">
      <img src={imgUrl + poster} className="aspect-[10/14]" alt={title} />
      <section className="py-4 px-3">
        <div className="flex items-center pb-1">
          <AiFillStar size={18} className="text-yellow-500 mr-1" />{" "}
          <span className="text-gray-300 text-sm md:text-base truncate">{rating}</span>
        </div>
        <h3 className="font-medium truncate">{title}</h3>
        <span className="text-sm font-light">{fullFormatDate(date)}</span>
      </section>
    </article>
  );
};

export default HomeCard;
