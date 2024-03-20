import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Authcontext";
import { useContext } from "react";

export const Content = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="text-center ml-[220px]">
      <h1 className="font-bold text-6xl mt-20">Welcome </h1>
      <br />
      <p className=" font-bold text-6xl  ">to your</p>
      <br />
      <p className=" font-bold text-5xl mt-22 ">Social Media Manager</p>
      <div className="icons mt-10  flex justify-center gap-6 0">
        <Link to={isAuth ? "/whatsp" : "/signup"}>
          <FaWhatsapp className="h-[45px] w-[50px] shadow text-green-500" />
        </Link>

        <FaInstagram className="h-[45px] w-[50px] shadow text-pink-500" />
        <FaFacebook className="h-[45px] w-[50px] shadow text-blue-900" />
        <FaTwitter className="h-[45px] w-[50px] shadow text-blue-500" />
        <FaLinkedin className="h-[45px] w-[50px] shadow text-blue-500" />
      </div>
      <button className=" flex bg-orange-400 p-1.5 mt-10 mx-[250px] text-center w-[150px] rounded-full  items-center   hover:cursor-pointer= text-gray-700">
        <p className="text-center mx-[30px]">Try Now</p>
      </button>
    </div>
  );
};
