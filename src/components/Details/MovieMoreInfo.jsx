import React from "react";

const MoreInfo = ({ website, status, budget, revenue }) => {
  return (
    <section className="mt-4 md:mt-0">
      <h2 className="font-semibold text-2xl border-l-4 border-yellow-500 pl-2 mb-[2rem]">More Info</h2>
      <article className="bg-[#131312] p-6 rounded truncate">
        <h3 className="font-bold">Website</h3>
        {website ? (
          <a href={website} className="font-light text-gray-50 transition hover:text-yellow-500" target="_blank">
            {website}
          </a>
        ) : (
          <p className="font-light text-gray-50">No website found</p>
        )}
        <h3 className="font-bold pt-3">Status</h3>
        <p className="font-light">{status ? status : "-"}</p>
        <h3 className="font-bold pt-3">Budget</h3>
        <p className="font-light">${budget ? budget.toLocaleString() : "-"}</p>
        <h3 className="font-bold pt-3">Revenue</h3>
        <p className="font-light">${revenue ? revenue.toLocaleString() : "-"}</p>
      </article>
    </section>
  );
};

export default MoreInfo;
