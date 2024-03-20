import React, { useState } from "react";
import axios from "axios";

const AddDataForm = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/data", {
        caption,
        image,
      });
      console.log("Data added:", response.data);
      setCaption("");
      setImage("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding data:", error);
      setErrorMessage("Error adding data. Please try again.");
    }
  };

  return (
    <div className=" text-center   mt-[50px] mx-auto">
      <h2 className="font-bold text-3xl">Add Data</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form
        class="mt-8 space-y-3 bg-white-500 shadow-2xl border border-black mb-[150px] rounded-sm m-auto w-[40%] p-5"
        action="#"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide">
            Title
          </label>
          <input
            class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="mail@gmail.com"
          />
        </div>
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide">
            Attach Document
          </label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 h-10  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img
                    class="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    alt="freepik image"
                  />
                </div>
                <p class="pointer-none text-gray-500 ">
                  <span class="text-sm">Drag and drop</span> files here <br />{" "}
                  or{" "}
                  <a href="" id="" class=" hover:underline">
                    select a file
                  </a>{" "}
                  from your computer
                </p>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>
        <p class="text-sm text-gray-300">
          <span>File type: doc,pdf,types of images</span>
        </p>
        <div>
          <button
            type="submit"
            class="my-5 w-full flex justify-center bg-orange-500  text-black p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline  shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDataForm;
