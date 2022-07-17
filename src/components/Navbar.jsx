import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Browse",
      path: "/browse",
    },
    {
      id: 3,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 4,
      name: "TV Shows",
      path: "/tv-shows",
    },
  ];

  return (
    <nav className="bg-[#131312] text-gray-50 relative z-[999]">
      <div className="container mx-auto px-4 lg:px-0 py-5 flex items-center justify-between">
        <div>
          <Link to="/">
            <p className="uppercase tracking-wide font-black text-yellow-400">ReelSpark</p>
          </Link>
        </div>
        <ul className="hidden md:flex items-center">
          {links.map((link) => (
            <li key={link.id} className="font-medium">
              <Link to={link.path} className="rounded transition hover:bg-zinc-800 px-4 py-3">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div aria-label="Open" onClick={handleIsOpen} className="md:hidden cursor-pointer">
          <FaBars size={20} />
        </div>
      </div>
      <div className={isOpen ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black bg-opacity-40" : ""}>
        <nav
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#131312] h-screen bg-primary p-6 ease-in duration-150"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-150"
          }
        >
          <div className="flex items-center justify-between">
            <p className="uppercase tracking-wide font-black text-yellow-400">ReelSpark</p>
            <div aria-label="Close" onClick={handleIsOpen} className="cursor-pointer">
              <MdClose size={25} />
            </div>
          </div>
          <div>
            <ul className="my-12 space-y-3">
              {links.map((link) => (
                <li key={link.id} className="font-medium rounded transition hover:bg-zinc-800">
                  <Link to={link.path} className="block px-4 py-3" onClick={handleIsOpen}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
