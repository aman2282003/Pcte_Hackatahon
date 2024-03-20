import React, { useState } from "react";
import { Button, Slide } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/Authcontext";
import { useContext } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const name = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast();
  const { isAuth, setisAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formData;
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};

    if (storedData.email === email && storedData.password === password) {
      localStorage.setItem("isAuth", "Authenticated");
      toast({
        title: "Login succesfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      console.log("Done");
      setisAuth(true);
      console.log(isAuth);
      name("/");
    } else {
      toast({
        title: "Wrong input.",
        description: "Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      console.log("Not done");
    }
    setFormData({ email: "", password: "" });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login mb-[0px] bg-[#f0f8ff] flex flex-col justify-center text-center  ">
      <Navbar />
      <p className="font-bold text-3xl mb-[4%] mt-20">Enter your Credentials</p>
      <form onSubmit={handleSubmit}>
        <p className="font-bold text">Enter Email Address</p>
        <input
          className="border border-black m-1 h-[50px] w-[350px]"
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
        />
        <br />
        <p className="font-bold text ">Enter Password</p>
        <input
          className="border border-black m-1 h-[50px] w-[350px]"
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
        />
        <br />
        <button
          className="bg-orange-500 m-3 text-white p-3 rounded-full w-[300px]"
          type="submit"
        >
          Submit
        </button>
        <p>
          Not a user
          <Link to="/signup">
            <span className="underline text-orange-500">Click Here</span>{" "}
          </Link>
          to Signup
        </p>
      </form>
      <div>
        <p className="font-xl">
          Securing your personal information is our priority.
        </p>
        <p className="font-xl">See our Privacy measures.</p>
      </div>
    </div>
  );
};
