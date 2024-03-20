import React, { useState, useRef } from "react";

export const Snapchat = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [capturedImage, setCapturedImage] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null);

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setCapturedImage(dataUrl);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Snapchat</div>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("home")}
            >
              Home
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "search"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("search")}
            >
              Search
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "camera"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleTabClick("camera")}
            >
              Camera
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {activeTab === "home" && (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 p-4rounded-md flex flex-col items-center justify-center space-y-2"
              >
                <img
                  src="https://picsum.photos/id/237/50/50"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>Username</div>
                <div className="text-xs text-gray-500">Story</div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "search" && <div className="p-4">Search Tab</div>}
        {activeTab === "camera" && (
          <div className="p-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleOpenCamera}
            >
              Open Camera
            </button>
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCaptureImage}
            >
              Capture Image
            </button>
            <div className="mt-4">
              {cameraStream && (
                <>
                  <video
                    ref={videoRef}
                    className="border border-gray-400"
                    autoPlay
                    playsInline
                  />
                  {capturedImage && (
                    <img
                      src={capturedImage}
                      alt="Captured"
                      className="mt-4 border border-gray-400"
                    />
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
