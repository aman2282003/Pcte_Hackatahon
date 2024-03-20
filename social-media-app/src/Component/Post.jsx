import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrLike } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";

import { Link } from "react-router-dom";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("https://server-hackthon.onrender.com/data")
      .then((response) => {
        setPosts(response.data);
        // Initialize likes with random values based on the number of posts
        setLikes(
          Array(response.data.length)
            .fill()
            .map(() => Math.floor(Math.random() * 100))
        );
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  return (
    <div className="container ml-[40%] py-8 w-[35%] ">
      <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 ">
          {posts.map((el, index) => (
            <div
              key={index}
              className="rounded-lg mb-[100px] bg-orange-400 h-[690px] shadow-md overflow-hidden"
            >
              <div className="flex items-center p-1">
                <FaRegUserCircle className="m-1 " />
                <p className="text-gray-700 m-1 text-xl text-black-700">
                  {el.username}
                </p>
              </div>

              <img
                src={el.image}
                alt={el.firstName}
                className="w-[580px] h-[520px] object-cover m-auto"
              />
              <div className="mt-2 flex items-center  ">
                <FaRegHeart
                  onClick={() => handleLike(index)}
                  className="ml-[10px] mb-[10px]"
                />

                <div className="mb-2 flex ">
                  <span className="ml-2">{likes[index]} likes</span>
                  <Link to="/share">
                    <FaTelegramPlane className="ml-2 h-[30px] w-[30px]" />
                  </Link>
                </div>
              </div>
              <h2 className="text-xl font-semibold  ml-2">
                {el.caption.slice(0, 30)}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
