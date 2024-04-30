import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const menuIcon= document.querySelector("#menu");
  const [menu, setmenu] = useState("close");
  const [dis, setDis] = useState("hidden");
  const [category, setCategory] = useState("general");

  function handleMenu(){
    setmenu("close");
    menuIcon.setAttribute("srcSet", "https://cdn-icons-png.flaticon.com/512/2099/2099192.png");
    setDis("hidden");
    console.log(category);
  }

  function onToggleMenu() {
    if(menu === "close"){
      setmenu("open");
      menuIcon.setAttribute("srcSet", "https://cdn.icon-icons.com/icons2/912/PNG/512/cancel-cross_icon-icons.com_71726.png")
      setDis("");
      console.log("cope");
    }
    else{
      setmenu("close");
      menuIcon.setAttribute("srcSet", "https://cdn-icons-png.flaticon.com/512/2099/2099192.png")
      setDis("hidden");
    }
    console.log("done");
  }

  return (
    <div className="flex fixed top-0 w-full">
      <nav className="bg-white border-gray-200  w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 w-full">
          <Link
            to="/"
            onClick={handleMenu}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/rick-news-logo.png"
              className="h-16"
              alt="Rick-News Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Rick-News
            </span>
          </Link>
          <img id="menu" srcSet="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" onClick={onToggleMenu} alt="menu-card" className="text-3xl cursor-pointer md:hidden h-12"/>
          
          <div className= {`w-full md:block md:w-auto ${dis}`} id="navbar-default">
            <ul className="md:items-center md:text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/general"
                  onClick={() => { handleMenu(); setCategory("general"); }}
                  className={`block py-2 px-3 ${category === "general" ? "md:text-blue-500 bg-blue-500" : ""}   rounded md:hover:text-blue-500 hover:bg-gray-700 md:hover:bg-transparent md:bg-transparent md:p-0 `}
                  aria-current="page"
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  onClick={() => { handleMenu(); setCategory("sports"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "sports" ? "md:text-blue-500 bg-blue-500"  : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent `}

                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  to="/technology"
                  onClick={() => { handleMenu(); setCategory("technology"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "technology" ? "md:text-blue-500 bg-blue-500" : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent`}
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  onClick={() => { handleMenu(); setCategory("science"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "science" ? "md:text-blue-500 bg-blue-500" : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent`}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  onClick={() => { handleMenu(); setCategory("health"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "health" ? "md:text-blue-500 bg-blue-500" : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent`}
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  onClick={() => { handleMenu(); setCategory("business"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "business" ? "md:text-blue-500 bg-blue-500" : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent`}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  onClick={() => { handleMenu(); setCategory("entertainment"); }}
                  className={`block py-2 px-3 rounded md:border-0 ${category === "entertainment" ? "md:text-blue-500 bg-blue-500" : ""} md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:md:hover:bg-transparent md:bg-transparent`}
                >
                  Entertainment
                </Link>
              </li>
            </ul>
            {/* <div className="flex items-center gap-6">
                <img id="menu" srcSet="https://cdn.icon-icons.com/icons2/950/PNG/512/cross-symbol_icon-icons.com_74149.png" onClick={onToggleMenu} alt="menu-card" className="text-3xl h-32  cursor-pointer md:hidden "/>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
