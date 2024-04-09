import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex fixed top-0 w-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 w-full">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/rick-news-logo.png"
              className="h-16"
              alt="Rick-News Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Rick-News
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/general"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  to="/technology"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className="block py-2 px-3  rounded   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
