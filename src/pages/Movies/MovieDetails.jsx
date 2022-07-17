import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  let { id } = useParams();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  });

  return (
    <section>
      <p>Movie Details: {id}</p>
    </section>
  );
};

export default MovieDetails;
