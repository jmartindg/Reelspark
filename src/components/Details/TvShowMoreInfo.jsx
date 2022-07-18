import React from "react";

const TvShowMoreInfo = ({ website, first_air, last_air, status, type, networks }) => {
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
        <h3 className="font-bold pt-3">First Air Date</h3>
        <p className="font-light">{first_air ? first_air : "-"}</p>
        <h3 className="font-bold pt-3">Last Air Date</h3>
        <p className="font-light">{last_air ? last_air : "-"}</p>
        <h3 className="font-bold pt-3">Status</h3>
        <p className="font-light">{status ? status : "-"}</p>
        <h3 className="font-bold pt-3">Type</h3>
        <p className="font-light">{type ? type : "-"}</p>
        <h3 className="font-bold pt-3">Network(s)</h3>
        {networks.map((network, index) => (
          <span key={index}>{(index ? ", " : "") + network.name}</span>
        ))}
      </article>
    </section>
  );
};

export default TvShowMoreInfo;
