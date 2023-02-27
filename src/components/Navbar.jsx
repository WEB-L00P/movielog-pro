import React from "react";
import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#16213e] shadow">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between px-4 py-3 md:py-5 md:block">
              <h2 className="text-3xl font-bold text-[#e7f6f2] hover:text-[#e94560] hover:transition-all hover:duration-300">
                <Link to="/">MovieLog Pro</Link>
              </h2>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-200 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#e7f6f2]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#e7f6f2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-[#e7f6f2] hover:bg-[#e94560] px-3 py-1 rounded-md hover:transition-all hover:duration-300 text-xl font-bold">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="text-[#e7f6f2] hover:bg-[#e94560] px-3 py-1 rounded-md hover:transition-all hover:duration-300 text-xl font-bold">
                  <NavLink to="movies">Movies</NavLink>
                </li>

                <li className="text-[#e7f6f2] hover:bg-[#e94560] px-3 py-1 rounded-md hover:transition-all hover:duration-300 text-xl font-bold">
                  <NavLink to="search">Search</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
