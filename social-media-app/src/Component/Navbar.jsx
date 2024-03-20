import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Authcontext";
import FilterData from "./Filterdata"; // Import the FilterData component here

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async (e) => {
    const input = e.target.value;
    setSearch(input);

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <nav className="flex sticky bg-[#f0f8ff] top-0 z-10 shadow justify-between px-20 py-2 items-center ">
        <h1 className="text-3xl text-gray-800 font-bold">Social Hub</h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <input
              className=" outline-none bg-white font mx-4 border border-black rounded-full p-0.5  text-center"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pt-0.5 mr-3 ml-[-45px] text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleFocus} // Set the isFocused state to true only when the search icon is clicked
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <ul className="flex items-center space-x-6">
            <button className="bg-orange-400 rounded-full p-2 ">
              <Link to="/signup">
                <li className=" hover:underline hover:cursor-pointer text-gray-700">
                  {isAuth ? <p> Logout</p> : <p>Sign in</p>}
                </li>
              </Link>
            </button>
          </ul>
        </div>
      </nav>
      {isFocused && <FilterData data={filteredData} />}
    </>
  );
};
