import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Authcontext";
import { FaSnapchat } from "react-icons/fa6";
import { useContext } from "react";
export const Sidemenu = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <div className="sidebar bg-[#f0f8ff] shadow-2xl flex flex-col ]shadow-2xl items-center w-40 h-full  text-gray-700  rounded">
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3  border-gray-700">
            <a
              className="flex items-center w-full h-12 px-3 mt-20 rounded hover:bg-orange-400  "
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">home</span>
            </a>

            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-orange-400  "
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">New feed</span>
            </a>
          </div>
          <div className="flex flex-col items-center w-full mt-2  border-gray-700">
            <Link
              to={isAuth ? "/snapchat" : "/signup"}
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-orange-400  "
              href="#"
            >
              <FaSnapchat className="w-6 h-6 stroke-current" />
              <span className="ml-2 text-sm font-medium">snapchat</span>
            </Link>
            <Link
              to={isAuth ? "/postinput" : "/signup"}
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-orange-400  "
              href="#"
            >
              <IoIosAddCircleOutline className="w-6 h-6 stroke-current" />
              <span className="ml-2 text-sm font-medium">create</span>
            </Link>

            <Link
              to={isAuth ? "/settings" : "/signup"}
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-orange-400  "
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Settings</span>
            </Link>

            <Link
              to={isAuth ? "/whatsp" : "/signup"}
              className="relative flex items-center w-full h-12 px-3 mt-2
              rounded hover:bg-orange-400 "
              href="#"
            >
              <svg
                className="w-6 h-6 strokeCurrent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Messages</span>
            </Link>

            <Link
              to={isAuth ? "/profile" : "/signup"}
              className="flex items-center w-full h-12 mt-20 px-3  rounded hover:bg-orange-400  "
              href="#"
            >
              <FaUser />
              <span className="ml-2 text-sm font-medium">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
