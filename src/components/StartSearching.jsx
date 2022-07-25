import React from "react";
import { RiMovie2Fill } from "react-icons/ri";

const StartSearching = () => {
  return (
    <section className="px-4 lg:px-0">
      <div className="h-screen flex flex-col items-center justify-center pb-24">
        <RiMovie2Fill className="text-yellow-500" size={50} />
        <p className="text-center md:text-lg pt-3">
          Nothing to show here or no results found. <br /> Start searching.
        </p>
      </div>
    </section>
  );
};

export default StartSearching;
