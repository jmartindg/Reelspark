import React from "react";
import Spinner from "../assets/spinner.svg";

const Loader = () => {
  return (
    <section className="pt-20 px-4 lg:px-0">
      <div className="flex justify-center">
        <img src={Spinner} alt="Loading" />
      </div>
    </section>
  );
};

export default Loader;
