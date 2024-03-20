import React from "react";

export const Profile = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const handleSaveProfile = () => {
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Experience:", experience);
    console.log("Additional Details:", additionalDetails);
  };

  return (
    <div className=" w-[50%] rounded bg-white mt-5 mb-5 mx-auto border border-black">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5 mx-auto"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Profile"
            />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="surname"
                />
              </div>
            </div>
            {/* Add other input fields here */}
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                type="button"
                onClick={handleSaveProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="text-right">Experience</h4>
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Add
              </span>
            </div>
            <div className="col-md-12">
              <label className="labels">Experience in Designing</label>
              <input
                type="text"
                className="form-control"
                placeholder="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="additional details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
