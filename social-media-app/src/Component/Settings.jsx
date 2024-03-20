import React from "react";

const Settings = () => {
  return (
    <div className="container mx-auto py-10 px-3">
      <h1 className="text-3xl mb-10">Settings</h1>
      <div className="mb-5">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />
      </div>
      <div className="mb-5">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div className="mb-5">
        <label htmlFor="biography">Biography:</label>
        <textarea name="biography"></textarea>
      </div>
      <h2 className="text-xl mb-3">Account Settings</h2>
      <p className="mb-5">Here you can manage your account settings.</p>
      <div className="mb-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Change Password
        </button>
      </div>
      <div className="mb-5">
        <button className="bg-red-500 text-white py-2 px-4 rounded">
          Delete Account
        </button>
      </div>
      <div className="mb-5">
        <i className="fas fa-user-circle fa-3x"></i>
        <i className="fas fa-envelope fa-3x ml-5"></i>
      </div>
      <div></div>
    </div>
  );
};

export default Settings;
