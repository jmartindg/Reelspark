import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const TvShowDetails = () => {
  let { id } = useParams();

  return (
    <section>
      <p>TV Show Details: {id}</p>
    </section>
  );
};

export default TvShowDetails;
