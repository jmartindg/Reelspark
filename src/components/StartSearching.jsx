import React from "react";
import { RiMovie2Fill } from "react-icons/ri";

const StartSearching = () => {
  return (
    <section className="flex flex-col items-center pt-16 px-4 lg:px-0">
      <RiMovie2Fill className="text-yellow-500" size={50} />
      <p className="text-center md:text-lg pt-3">
        Nothing to show here or no results found. <br /> Start searching.
      </p>
    </section>
  );
};

export default StartSearching;
