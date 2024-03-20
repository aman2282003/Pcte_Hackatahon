import React, { useState } from "react";
import { Button, Input, Slide } from "@chakra-ui/react"; // Import Chakra UI components
import { useToast } from "@chakra-ui/react"; // Import useToast hook
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "./Authcontext";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { Navbar } from "../Navbar";

export const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast(); // Initialize useToast hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email.trim() && password.trim()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      setFormData({ email: "", password: "" });

      toast({
        title: "Account created.",
        description: "Please Login to continue.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please enter valid credentails.",
        description: "Wrong input",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="signup bg-[#f0f8ff] mb-[0px]flex flex-col justify-center text-center">
      <Navbar/>
      <p className="font-bold font-2xl m-2">Sign in or create your account</p>
      <div className="m-2">
        <p className="font-xl">Not sure if you have an account?</p>
        <p className="font-xl">Enter your email and we'll check for you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="font-bold text ">Enter Email Address</p>
        <input
          className="border border-black m-1 h-[50px] w-[350px]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <p className="font-bold text ">Enter Password</p>
        <input
          className="border border-black m-1 h-[50px] w-[350px]"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button
          className="bg-orange-500 m-auto text-white p-3 rounded-full w-[300px]"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>
        Already a user
        <Link to="/Login">
          <span className="underline text-orange-500"> Click Here</span>{" "}
        </Link>
        to login
      </p>
      <div>
        <p className="font-xl">
          Securing your personal information is our priority.
        </p>
        <p className="font-xl underline">See our Privacy measures.</p>
      </div>
    </div>
  );
};
