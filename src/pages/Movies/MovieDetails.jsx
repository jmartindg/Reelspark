import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  let { id } = useParams();

  return (
    <section>
      <p>Movie Details: {id}</p>
    </section>
  );
};

export default MovieDetails;
