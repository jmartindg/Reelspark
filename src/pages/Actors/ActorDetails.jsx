import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

const ActorDetails = () => {
  let { id } = useParams();

  return (
    <section>
      <p>Actor Details: {id}</p>
    </section>
  );
};

export default ActorDetails;
