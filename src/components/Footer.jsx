import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Footer = () => {
  const apiLink = "https://developers.themoviedb.org/3/getting-started/introduction";
  const repoLink = "https://github.com/jmartindg/ReelSpark-v2";

  return (
    <footer className="bg-[#131312] mt-24 py-12">
      <div className="container mx-auto px-4 lg:px-0">
        <h4 className="text-center text-xl uppercase tracking-wide font-black text-yellow-400 pb-3">ReelSpark</h4>
        <div className="text-center mb-3 text-gray-50 flex justify-center space-x-5">
          <a
            href={apiLink}
            className="flex items-center justify-center hover:underline hover:underline-offset-8"
            target="_blank"
          >
            <span>API Used</span> <BiLinkExternal size={12} className="ml-1" />
          </a>
          <a
            href={repoLink}
            className="flex items-center justify-center hover:underline hover:underline-offset-8"
            target="_blank"
          >
            <span>GitHub Repo</span> <BiLinkExternal size={12} className="ml-1" />
          </a>
        </div>
        <p className="text-center text-sm text-gray-300 pt-5">
          &copy; {new Date().getFullYear()} by Jm De Guia - Front-End Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
