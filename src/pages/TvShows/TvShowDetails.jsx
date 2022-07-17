import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const TvShowDetails = () => {
  let { id } = useParams();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  });

  return (
    <section>
      <p>TV Show Details: {id}</p>
    </section>
  );
};

export default TvShowDetails;
