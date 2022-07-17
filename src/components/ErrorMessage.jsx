import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <section className="pt-20 px-4 lg:px-0">
      <article className="flex justify-center">
        <div className="p-6 bg-[#131312] rounded">
          <h2 className="text-red-500">{error}</h2>
        </div>
      </article>
    </section>
  );
};

export default ErrorMessage;
