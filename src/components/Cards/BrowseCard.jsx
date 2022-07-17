import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import NoImage from "../../assets/no-image.png";

const HomeCard = ({ id, title, date, poster, rating, media, known }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";

  // Format date - MMMM/DD/YYYY
  const fullDate = { year: "numeric", month: "short", day: "numeric" };
  const fullFormatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", fullDate);
  };

  // Check movie or tv show rating
  if (rating === 0) {
    rating = "No Ratings Yet";
  }

  // Check if media is movie or tv show or person
  const checkMediaType = (media) => {
    switch (media) {
      case "movie":
        return "/movie-details/" + id;
        break;
      case "tv":
        return "/tv-show-details/" + id;
        break;
      default:
        return "/actor-details/" + id;
    }
  };

  return (
    <article className="bg-[#1A1A1A] rounded overflow-hidden">
      <Link to={checkMediaType(media)}>
        {poster ? (
          <img src={imgUrl + poster} className="aspect-[10/14] cursor-pointer transition hover:opacity-60" alt={title} />
        ) : (
          <img
            src={NoImage}
            className="aspect-[10/14] object-cover cursor-pointer transition hover:opacity-60"
            alt={title}
          />
        )}
      </Link>
      <section className="py-4 px-3">
        {rating ? (
          <div className="flex items-center pb-1">
            <AiFillStar size={18} className="text-yellow-500 mr-1" />{" "}
            <span className="text-gray-300 text-sm md:text-base truncate">{rating}</span>
          </div>
        ) : (
          ""
        )}
        <Link to={checkMediaType(media)}>
          <h3 className="font-medium truncate hover:underline">{title}</h3>
        </Link>
        {rating ? (
          <span className="text-sm font-light">{fullFormatDate(date)}</span>
        ) : (
          <span className="text-sm font-light">{known}</span>
        )}
      </section>
    </article>
  );
};

export default HomeCard;
