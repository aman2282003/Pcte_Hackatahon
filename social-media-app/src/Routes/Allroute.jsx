import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { Sidemenu } from "../Component/Sidemenu";
import { Content } from "../Component/Content";
import { About } from "../Component/About";
import { Middlecomp } from "../Component/Middlecomp";
import { useContext } from "react";
import { AuthContext } from "../Component/Context/Authcontext";
import { Post } from "../Component/Post";
import PostInput from "../Component/PostInput";
import { Features } from "../Component/Features";
import { Footer } from "../Component/Footer";
import Settings from "../Component/Settings";
import { Profile } from "../Component/Profile";

export function Allroutes() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <div>
        <Navbar />

        <div className="flex justify-between nowrap">
          <Sidemenu />
           
          {isAuth ? (
            <Post />
          ) : (
            <div className="flex ">
              <Content />
              <Middlecomp />
            </div>
          )}
        </div>
        <About />
        <Features />
        <Footer />
      </div>
    </>
  );
}
