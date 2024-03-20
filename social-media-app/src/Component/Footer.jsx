import React from "react";

import { FaInstagram, FaWhatsapp, FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <footer className="bg-orange-400 pt-4  ml-[15%] h-[350px]">
        <div className="container bg-orange-400 mx-auto px-4">
          <div className="bg-orange-400 flex flex-wrap text-left lg:text-left">
            <div className="bg-orange-400 w-full lg:w-6/12 px-4">
              <h4 className="bg-orange-400 text-3xl fonat-semibold ">
                Let's keep in touch!
              </h4>
              <h5 className="bg-orange-400 text-lg mt-0 mb-2 ">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="bg-orange-400 mt-6 lg:mb-0 mb-6 flex flex-wrap">
                <a
                  href="https://www.instagram.com/codewithaman22_8/"
                  target="blank"
                >
                  <FaInstagram className="h-[50px]  w-[50px] m-5 text-pink-900" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VaA8Vxr1Hspor73uES0y"
                  target="blank"
                >
                  <FaWhatsapp className="h-[50px] w-[50px] m-5 text-green-400" />
                </a>
                <a
                  href="https://aman2282003.github.io/Portfolio/"
                  target="blank"
                >
                  <FaRegUserCircle className="h-[50px] w-[50px] m-5 text-blue-600" />
                </a>
                <a href="https://github.com/aman2282003" target="blank">
                  <FaGithub className="h-[50px] w-[50px]  m-5 text-grey-600" />
                </a>
              </div>
            </div>
            <div className=" bg-orange-400 w-full lg:w-6/12 px-4">
              <div className="bg-orange-400 flex flex-wrap items-top mb-6">
                <div className="bg-orange-400 w-full lg:w-4/12 px-4 ml-auto">
                  <span className="bg-orange-400 uppercase font-bold text-xl mb-2">
                    Useful Links
                  </span>
                  <ul className="bg-orange-400 list-unstyled">
                    <li className="bg-orange-400 text-2xl">About Us</li>
                    <li className="bg-orange-400 text-2xl">Blog</li>
                    <li className="bg-orange-400 text-2xl">Github</li>
                    <li className="bg-orange-400 text-2xl">Free Products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="bg-orange-400  font-bold flex justify-center text-2xl  text-center items-center text-black">
          @Copyright Made with love by Sky coders
        </p>
      </footer>
    </>
  );
};
